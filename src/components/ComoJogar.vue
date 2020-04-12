<template>
    <v-dialog v-model="mostrar" persistent max-width="600px">
        <v-card>
            <v-card-title>
                <span class="headline">Como jogar</span>
            </v-card-title>
            <v-card-text>
                <h3>Os personagens</h3>
                <v-container>

                    <v-row
                        v-for="(carta, index) in cartas"
                        :key="index"
                    >
                        <v-col cols="12" sm="12" md="3">
                            <Card
                                :isSmall="true"
                                :carta="carta"
                            />
                        </v-col>

                        <v-col cols="12" sm="12" md="9">
                            <p class="text-justify">
                                {{ carta.texto }}
                            </p>
                            <p class="text-justify">
                                <i>{{ carta.observacao }}</i> 
                            </p>
                            <p class="text-justify" v-show="carta.texto2 != null">
                                {{ carta.texto2 }}
                            </p>
                            <p class="text-justify" v-show="carta.observacao2 != null">
                                <i>{{ carta.observacao2 }}</i> 
                            </p>
                        </v-col>
                        
                    </v-row>

                    <hr>

                    <h3 class="ma-2">Resumo de turno</h3>

                    <p class="text-justify">
                        <strong>No seu turno, você deve realizar uma das seguintes ações.</strong> 
                    </p>

                    <v-row>
                        <v-col cols="12">
                            <h4>Renda</h4>
                            <p class="text-justify">
                                Recebe 1 moeda.
                            </p>
                            <p class="text-justify">
                                <i>Não pode ser bloqueado ou contestado.</i> 
                            </p>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12">
                            <h4>Ajuda externa</h4>
                            <p class="text-justify">
                                Recebe 2 moedas.
                            </p>
                            <p class="text-justify">
                                <i>Pode ser bloqueado pelo Rei. Pode duvidar do Rei se for bloqueado.</i> 
                            </p>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12">
                            <h4>Golpe de estado</h4>
                            <p class="text-justify">
                                Pegue 7 moedas e escolha um jogador que perderá uma carta.
                            </p>
                            <p class="text-justify">
                                <i>Não pode ser bloqueado ou contestado.</i>
                            </p>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12">
                            <h4>Ação de um personagem</h4>
                            <p class="text-justify">
                                Declare influenciar um personagem. Você pode dizer a verdade ou blefar.
                            </p>
                            <p class="text-justify">
                                <i>Pode ser contestado referente ao personagem, se estiver blefando, perde 1 carta.</i>
                            </p>
                        </v-col>
                    </v-row>

                    <hr>

                    <h3 class="ma-2">Consequências</h3>

                    <v-row>
                        <v-col cols="12">
                            <p class="text-justify">
                                Se você for contestado por uma ação e estiver blefando, você perde 1 carta.
                            </p>
                            <p class="text-justify">
                                Se contestar outro jogador e o mesmo estiver falando a verdade, você perde 1 carta.
                            </p>
                            <p class="text-justify">
                                Se contestar um matador e o mesmo estiver falando a verdade, você perde 2 cartas. 1 por ter contestado e o jogador está falando a verdade, outra pela ação do matador.
                            </p>
                        </v-col>
                    </v-row>
                    
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="fecharModal()">Fechar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>

import cards from '@/getCards'
import Card from '@/components/Card'

export default {
    props: {
        mostrar: {
            type: Boolean,
            default: false
        }
    },

    components: {
        Card
    },

    data: ()=>({
        cartas: cards,
    }),

    methods: {
        fecharModal() {
            this.$emit('fecharModal');
        }
    }
}
</script>