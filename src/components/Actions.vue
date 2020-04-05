<template>
    <v-card>
        <v-card-title>
            Ações realizadas
            <v-btn color="primary" @click="iniciarPartida()" v-if="isAdminSala" right absolute>
                Iniciar partida
            </v-btn>
        </v-card-title>

        <v-card-text>

            <v-container
                style="height: 400px"
                class="overflow-y-auto"
            >

                <template v-for="(acao, index) in acoesRealizadas">
                    <p :key="index"> {{ acao }} </p>
                </template>

            </v-container>
        </v-card-text>

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
                        <v-chip :color="acao.color" style="cursor:pointer" @click="executarAcao(acao)">
                            {{ acao.text }}
                        </v-chip>
                    </v-col>
                </v-row>
            </v-card-actions>
        </v-card-actions>
    </v-card>
</template>

<script>

import acoesPossiveis from '@/getActions'
export default {

    props: {
        acoesRealizadas: {
            type: Array,
            required: true
        }
    },

    data: () => ({
        acoesPossiveis: acoesPossiveis
    }),

    computed: {
        isAdminSala(){
            return true
        }
    },

    methods: {
        iniciarPartida() {},

        executarAcao(acao) {
            if (acao.id_acao == 11){
                this.$emit('escolherCarta');
            }
        }
    }
}
</script>