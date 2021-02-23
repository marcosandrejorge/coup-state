<template>
    <v-card
        class="ma-2"
        hover
    >
        <v-card-title class="justify-center">
            {{ player.username }}
        </v-card-title>

        <v-card-text class="text-center">
            <v-btn outlined color="yellow" class="mb-10">
                <v-icon left>attach_money</v-icon> {{ player.qtdMoedas }}
            </v-btn>

            <v-row
                align-center
                justify="center"
            >
                <Card
                    v-for="(carta, index) in player.arrCartas"
                    :key="index"
                    :isSmall="true"
                    :carta="carta"
                />
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>

import Card from '@/components/Card'

export default {

    components: {
        Card
    },

    props:{
        player:{
            type: Object,
            required: true
        }
    }
}
</script>