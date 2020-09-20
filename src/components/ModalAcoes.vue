<template>
  <v-row justify="center">
    <!--Modal de ações de ataque-->
    <v-dialog v-model="mostrarModalAcaoAtaque" persistent max-width="290" overlay-opacity="0.7">
      <v-card>
        <v-card-title class="headline">Sua vez de jogar</v-card-title>
        <v-card-text>Você tem {{ segundosJogar }} segundos para jogar</v-card-text>
        <v-card-actions>
            <v-card-actions>
                <v-row
                    align="center"
                    justify="start"
                >
                    <v-col
                        v-for="(acao, index) in getAcoesDeAtaque"
                        :key="index"
                        class="shrink pa-1"
                    >
                        <v-chip :color="acao.color" style="cursor:pointer" @click="verificarAcaoEscolhida(acao.id_acao)">
                            {{ acao.text }}
                        </v-chip>
                    </v-col>
                </v-row>
            </v-card-actions>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!--Modal de mostrar os jodadores para selecionar-->
    <v-dialog scrollable  v-model="mostrarModalJogadores" persistent max-width="320px">

      <v-card>
        <v-card-title class="headline">Selecione o jogador que receberá a ação</v-card-title>

        <v-card-text>Você tem {{ segundosJogar }} segundos para jogar</v-card-text>

        <v-divider></v-divider>

        <v-card-text style="height: 300px;">

            <v-row align="center">
                <v-col cols="12">
                    <div class="text-center">
                        <div 
                            class="my-2"
                            v-for="(jogador, index) in getJogadoresContra"
                            :key="index"
                        >
                            <v-btn 
                                color="warning"
                                dark
                                @click="selecionarJogador(jogador.idJogador, jogador.username)"
                            >
                                {{jogador.username}}
                            </v-btn>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-card-text>
      </v-card>
      
    </v-dialog>


    <!--Modal de ações de defesa-->
    <v-dialog v-model="mostrarModalAcaoDefesa" persistent max-width="290" overlay-opacity="0.7">
      <v-card>
        <v-card-title class="headline">{{titleDefesa}}</v-card-title>
        <v-card-text>{{descricaoAcaoSofrida}}</v-card-text>
        <v-card-text>Você tem {{ segundosJogar }} segundos para jogar</v-card-text>
        <v-card-actions>
            <v-card-actions>
                <v-row
                    align="center"
                    justify="start"
                >
                    <v-col
                        v-for="(acao, index) in getAcoesDefesa"
                        :key="index"
                        class="shrink pa-1"
                    >
                        <v-chip :color="acao.color" style="cursor:pointer" @click="executarAcaoDefesa(acao.id_acao)">
                            {{ acao.text }}
                        </v-chip>
                    </v-col>
                </v-row>
            </v-card-actions>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-row>
</template>


<script>

import acoesPossiveis from '@/getActions'
import { mapGetters } from 'vuex'

export default {

    data: () => ({
        segundosJogar: 10,
        mostrarModalAcaoAtaque: false,
        mostrarModalAcaoDefesa: false,
        mostrarModalJogadores: false,
        usernameJogadorAtacado: null,
        acoesPossiveis: acoesPossiveis,
        tempoAcao: null,
        numeroCartaEscolhida: null,
        idJogadorAtacado: null,
        idAcao: null,
        titleDefesa: "",
        descricaoAcaoSofrida: "",
        idJogadorQueAtacou: null,
        usernameQueAtacou: null,
        isEsconderAcaoDefender: false
    }),

    computed: {
        ...mapGetters('sala', ['arrJogadoresSala']),
        ...mapGetters('user', ['getSocketId']),

        getJogadoresContra() {
            return this.arrJogadoresSala.filter(jogador => {
                return jogador.idJogador != this.getSocketId && jogador.isJogando
            })
        },

        getAcoesDeAtaque() {
            return acoesPossiveis.filter(acao => !acao.is_acao_defesa);
        },

        getAcoesDefesa() {
            return acoesPossiveis.filter(acao => {

                if (!this.isEsconderAcaoDefender) {
                    return acao.is_acao_defesa
                }

                return acao.is_acao_defesa && acao.id_acao !== 6
            });
        }
    },

    sockets: {
        suaVezDeJogar() {
            this.mostrarModalAcaoAtaque = true;
            this.segundosJogar = 10;
            this.idJogadorAtacado = null;
            this.numeroCartaEscolhida = null;
            this.setTempoAcao();
        },

        ataqueRecebido(objAtaqueRecebido) {
            console.log(objAtaqueRecebido);
            this.titleDefesa = objAtaqueRecebido.title;
            this.descricaoAcaoSofrida = objAtaqueRecebido.descricaoAcao;
            this.idJogadorQueAtacou = objAtaqueRecebido.idJogadorQueAtacou;
            this.usernameQueAtacou = objAtaqueRecebido.usernameQueAtacou;

            //Esconde a ação de defender, ela só irá aparecer quando for uma defesa de ASSASSINAR
            this.isEsconderAcaoDefender = objAtaqueRecebido.isEsconderAcaoDefender;
            this.mostrarModalAcaoDefesa = true;
            this.segundosJogar = 10;
            this.setTempoAcao();
        }
    },

    methods: {

        verificarAcaoEscolhida(idAcao) {

            //Finaliza o setInterval que foi criado em suaVezDeJogar()
            clearInterval(this.tempoAcao);
            this.idAcao = idAcao;

            //Verifica se a ação escolhida pelo jogador precisa selecionar alguém pra receber a ação. Exemplo: Ação de extorquir alguém
            let precisaEscolherJogador = this.acoesPossiveis.filter(acao => {
                return acao.id_acao == idAcao && acao.is_necessario_escolher_jogador
            }).length > 0;

            if (!precisaEscolherJogador) {
                this.executarAcao();
                return;
            }

            this.mostrarModalAcaoAtaque = false;
            this.mostrarModalJogadores = true;
            this.segundosJogar = 10;

            this.setTempoAcao();
        },

        selecionarJogador(idJogadorSelecionado, usernameJogadorSelecionado) {
            this.idJogadorAtacado = idJogadorSelecionado;
            this.usernameJogadorAtacado = usernameJogadorSelecionado;
            this.executarAcao();
        },

        executarAcao() {
            clearInterval(this.tempoAcao);
            this.mostrarModalAcaoAtaque = false;
            this.mostrarModalJogadores = false;
            this.mostrarModalAcaoDefesa = false;

            //Emit o evento para fora do componente.
            this.$emit('acaoEscolhida', {
                idAcao: this.idAcao,
                idJogadorAtacado: this.idJogadorAtacado,
                usernameJogadorAtacado: this.usernameJogadorAtacado,
                numeroCartaEscolhida: this.numeroCartaEscolhida,
            });
        },

        executarAcaoDefesa(idAcao) {
            this.$emit('acaoDefesaEscolhida', {
                idAcao: idAcao,
                idJogadorDefendido: this.idJogadorQueAtacou,
                usernameJogadorDefendido: this.usernameQueAtacou
            });
        },

        setTempoAcao() {
            this.tempoAcao = setInterval(() => {
                this.segundosJogar--;

                //Se chegou em 0 segundos, executa a ação 1 (RENDA)
                if (this.segundosJogar < 1) {
                    this.idAcao = 1;
                    this.executarAcao();
                }
            }, 1000);
        }
    }
}
</script>