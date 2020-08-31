<template>
    <div>
        <v-row>

            <v-col cols="12" sm="12" md="6" xl="8" style="z-index: 2">

                <v-row
                    align-center
                    justify="center"
                >

                    <Card
                        v-for="(carta, index) in cartas"
                        :key="index" 
                        :carta="carta"
                        v-show="index > 2"
                        @selecionarCarta="selecionarCarta($event)"
                    />

                </v-row>
            
            </v-col>

            <v-col cols="12" sm="12" md="6" xl="4">
                
                <Actions 
                    :acoesRealizadas="getAcoesSala"
                    @escolherCarta="escolherCarta()"
                />

            </v-col>
        </v-row>

        <v-row>
            <v-col sm="12">
                <v-row>
                    <v-col 
                        cols="12"
                        sm="12"
                        md="3"
                        xl="2"
                        v-for="(pessoa, index) in getJogadoresContra" 
                        :key="index"
                    >
                        <Player
                            :player="pessoa"
                        />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-overlay
            z-index="1"
            v-if="overlay"
            absolute
            opacity="0.7"
        >

        </v-overlay>
    </div>
</template>

<script>

import Card from '@/components/Card'
import Actions from '@/components/Actions'
import Player from '@/components/Player'
import cards from '@/getCards'
import { mapGetters } from 'vuex'

export default {

    props: {
        hashSala: {
            type: String,
            required: true
        }
    },

    components: {
        Card,
        Actions,
        Player
    },

    data: ()=> ({

        overlay: false,
        zIndex: 0,

        cartas: cards
    }),

    computed: {
        ...mapGetters('sala', ['arrJogadoresSala', 'getAcoesSala']),
        ...mapGetters('user', ['getSocketId']),

        getJogadoresContra() {
            return this.arrJogadoresSala.filter(jogador => {
                return jogador.idJogador != this.getSocketId
            })
        }
    },

    methods: {

        escolherCarta() {
            this.overlay = true
        },

        selecionarCarta(cartaSelecionada){
            let selecionou = false;
            this.cartas.map(carta => {
                if (carta.idCarta == cartaSelecionada.idCarta && !selecionou){
                    carta.sn_ativa = false
                    selecionou = true
                }
            })
            this.overlay = false
        }
    }
}
</script>