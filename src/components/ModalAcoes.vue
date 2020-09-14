<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="290" overlay-opacity="0.7">
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
                        v-for="(acao, index) in acoesPossiveis"
                        :key="index"
                        class="shrink pa-1"
                    >
                        <v-chip :color="acao.color" style="cursor:pointer" @click="executarAcao(acao.id_acao)">
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

export default {

    data: () => ({
        segundosJogar: 10,
        dialog: false,
        acoesPossiveis: acoesPossiveis,
        tempoAcao: null,
    }),

    sockets: {
        suaVezDeJogar() {
            this.dialog = true;
            this.segundosJogar = 10;

            this.tempoAcao = setInterval(() => {
                this.segundosJogar--;

                //Se chegou em 0 segundos, executa a ação 1 (RENDA)
                if (this.segundosJogar < 1) {
                    this.executarAcao(1);
                }
            }, 1000);
        }
    },

    methods: {
        executarAcao(idAcao) {
            clearInterval(this.tempoAcao);
            this.dialog = false;
            console.log('Id da Ação:', idAcao);
        }
    }
}
</script>