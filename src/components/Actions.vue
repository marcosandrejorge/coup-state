<template>
    <v-card>
        <v-card-title>
            <v-btn color="primary" @click="iniciarPartida()" v-if="isAdminSala" left>
                Iniciar partida
            </v-btn>
            <v-btn color="secondary" @click="sairPartida()" right absolute>
                Sair
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

            <v-row>
                <v-col class="text-center ma-0">
                    <v-btn outlined color="yellow">
                        <v-icon left>attach_money</v-icon> 10
                    </v-btn>
                </v-col>
            </v-row>

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

import { mapActions } from 'vuex'
import mixinRouter from '@/mixins/mixinRouter'
import acoesPossiveis from '@/getActions'
export default {

    props: {
        acoesRealizadas: {
            type: Array,
            required: true
        }
    },

    mixins: [
        mixinRouter
    ],

    data: () => ({
        acoesPossiveis: acoesPossiveis
    }),

    computed: {
        isAdminSala(){
            return true
        }
    },

    methods: {

        ...mapActions('user', ['setHashSala']),

        iniciarPartida() {},

        sairPartida() {
            this.$socket.emit('sairSala')
            this.setHashSala('')

            this.mixinRouterPush({
                name: 'Home'
            });
        },

        executarAcao(acao) {
            if (acao.id_acao == 11){
                this.$emit('escolherCarta');
            }
        }
    }
}
</script>