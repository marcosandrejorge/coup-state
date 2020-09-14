<template>
    <div>
        <v-row>

            <v-col cols="12" sm="12" md="6" xl="8" style="z-index: 2">

                <v-row
                    align-center
                    justify="center"
                    v-if="getIsSalaIniciada"
                >
                    <Card
                        v-for="(carta, index) in getMinhasCartas"
                        :key="index" 
                        :carta="carta"
                        @selecionarCarta="selecionarCarta($event)"
                    />

                </v-row>

                <v-row
                    align-center
                    justify="center"
                    v-if="!getIsSalaIniciada"
                >
                    
                    <div>
                        <v-alert
                            color="primary"
                            elevation="1"
                        >
                            Aguarde a partida começar.
                        </v-alert>
                    </div>
                </v-row>
            
            </v-col>

            <v-col cols="12" sm="12" md="6" xl="4">
                
                <Actions
                    :acoesRealizadas="getAcoesSala"
                    @escolherCarta="escolherCarta()"
                    @sairPartida="sairPartida()"
                    @iniciarPartida="iniciarPartida()"
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

        <ModalAcoes />
    </div>
</template>

<script>

import Card from '@/components/Card'
import Actions from '@/components/Actions'
import Player from '@/components/Player'
import ModalAcoes from '@/components/ModalAcoes'
import { mapGetters, mapActions } from 'vuex'
import mixinRouter from '@/mixins/mixinRouter'


export default {

    props: {
        hashSala: {
            type: String,
            required: true
        }
    },

    mixins: [
        mixinRouter
    ],

    components: {
        Card,
        Actions,
        Player,
        ModalAcoes
    },

    data: ()=> ({

        overlay: false,
        zIndex: 0
    }),

    computed: {
        ...mapGetters('sala', ['arrJogadoresSala', 'getAcoesSala', 'getIsSalaIniciada', 'getMinhasCartas']),
        ...mapGetters('user', ['getSocketId', 'getUserName']),

        getJogadoresContra() {
            return this.arrJogadoresSala.filter(jogador => {
                return jogador.idJogador != this.getSocketId
            })
        }
    },

    sockets: {
        mensagem(objMensagem) {
            alert(objMensagem.mensagem)
            if (objMensagem.tipo == 'redirect') {
                this.setHashSala('');
                this.mixinRouterPush({
                    name: 'Home'
                });
            }
        }
    },

    methods: {

        ...mapActions('user', ['setHashSala']),

        escolherCarta() {
            this.overlay = true
        },

        selecionarCarta(cartaSelecionada){
            let selecionou = false;
            this.getMinhasCartas.map(carta => {
                if (carta.idCarta == cartaSelecionada.idCarta && !selecionou){
                    carta.sn_ativa = false
                    selecionou = true
                }
            })
            this.overlay = false
        },

        sairPartida() {
            this.$socket.emit('sairSala')
            this.setHashSala('')

            this.mixinRouterPush({
                name: 'Home'
            });
        },

        //Entra na sala do hash que foi passado como parametro.
        entrarSala() {
            this.$socket.emit('entrarSala', {
                username: this.getUserName,
                hashSala: this.hashSala
            })
        },

        iniciarPartida() {
            this.$socket.emit('iniciarPartida')
        }
    },

    created() {
        this.entrarSala()
    }
}
</script>