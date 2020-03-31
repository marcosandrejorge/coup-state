<template>
    <v-row
        align-center
        justify="center"
    >

        <Card 
            v-for="(carta, index) in cartas" 
            :key="index" 
            :carta="carta" 
        />

    </v-row>
</template>

<script>

import Card from '@/components/Card'
import cards from '@/getCards'

export default {

    components: {
        Card
    },

    data: ()=> ({
        cartas: cards
    })
}
</script>