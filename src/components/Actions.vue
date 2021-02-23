<template>
    <v-card>
        <v-card-title>
            <v-btn color="primary" @click="iniciarPartida()" v-if="isPodeIniciarSala" left>
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
                    Suas moedas
                    <v-btn  class="ml-5" outlined color="yellow">
                        <v-icon left>attach_money</v-icon> {{ getMoedasJogadorLogado }}
                    </v-btn>
                </v-col>
            </v-row>

        </v-card-text>
    </v-card>
</template>

<script>

import { mapGetters } from 'vuex'
export default {

    props: {
        acoesRealizadas: {
            type: Array,
            required: true
        }
    },

    data: () => ({
    }),

    computed: {

        ...mapGetters('sala', ['getObjSala', 'getArrJogadoresSala']),
        ...mapGetters('user', ['getSocketId', 'getMoedasJogadorLogado']),

        isAdminSala(){
            return this.getObjSala.admin == this.getSocketId
        },

        isSalaIniciada() {
            return this.getObjSala.isSalaIniciada;
        },

        isPodeIniciarSala() {
            return !this.isSalaIniciada && this.getArrJogadoresSala.length > 1 && this.isAdminSala;
        },

    },

    methods: {

        iniciarPartida() {
            if (this.isPodeIniciarSala) {
                this.$emit('iniciarPartida');
            }
        },

        sairPartida() {
            this.$emit('sairPartida');
        },

        executarAcao(acao) {
            if (acao.id_acao == 11){
                this.$emit('escolherCarta');
            }
        }
    }
}
</script>