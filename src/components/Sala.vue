<template>
    <div>
        <v-row>

            <v-col cols="12" sm="12" md="8" xl="8" style="z-index: 2">

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

            <v-col cols="12" sm="12" md="8" xl="4">
                
                <Actions 
                    :acoesRealizadas="acoesRealizadas"
                    @escolherCarta="escolherCarta()"
                />

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
import cards from '@/getCards'

export default {

    components: {
        Card,
        Actions
    },

    data: ()=> ({

        overlay: false,
        zIndex: 0,

        cartas: cards,

        acoesRealizadas: [
            'Jogador Pedro comprou 3 moedas',
            'Jogador Marcos comprou 1 moeda',
            'Jogador Pedro comprou 3 moedas',
            'Jogador Marcos comprou 1 moeda',
            'Jogador Pedro comprou 3 moedas',
            'Jogador Marcos comprou 1 moeda',
            'Jogador Pedro comprou 3 moedas',
            'Jogador Marcos comprou 1 moeda',
            'Jogador Pedro comprou 3 moedas',
            'Jogador Marcos comprou 1 moeda',
            'Jogador Pedro comprou 3 moedas',
            'Jogador Marcos comprou 1 moeda',
            'Jogador Pedro comprou 3 moedas',
            'Jogador Marcos comprou 1 moeda',
            'Jogador Pedro comprou 3 moedas',
            'Jogador Marcos comprou 1 moeda',
            'Jogador Pedro comprou 3 moedas',
            'Jogador Marcos comprou 1 moeda',
            'Jogador Pedro comprou 3 moedas',
            'Jogador Marcos comprou 1 moeda',
            'Jogador Pedro comprou 3 moedas',
            'Jogador Marcos comprou 1 moeda',
            'Jogador Pedro comprou 3 moedas',
        ]
    }),

    methods: {
        escolherCarta() {
            this.overlay = true
        },

        selecionarCarta(cartaSelecionada){
            this.cartas.map(carta => {
                if (carta.nome == cartaSelecionada.nome){
                    carta.sn_ativa = false
                }
            })
            this.overlay = false
        }
    }
}
</script>