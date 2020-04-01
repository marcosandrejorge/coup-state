<template>
    <div>
        <v-row

        >

            <v-col cols="12" sm="12" md="8" xl="8">

                <v-row
                    align-center
                    justify="center"
                >

                    <Card 
                        v-for="(carta, index) in cartas" 
                        :key="index" 
                        :carta="carta"
                        v-show="index > 2"
                    />

                </v-row>
            
            </v-col>

            <v-col cols="12" sm="12" md="8" xl="4">
                
                <Actions :acoesRealizadas="acoesRealizadas"/>

            </v-col>
        </v-row>
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
    })
}
</script>