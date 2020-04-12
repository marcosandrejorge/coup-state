<template>

    <v-card
        :width="getWidthHeightCard"
        class="ma-2"
        hover
        :shaped="!isSmall"
        @click="selecionarCarta()"
        :color="getColorCard"
    >
            
        <v-avatar :size="getWidthHeightCard" tile>
            <v-img
                :width="getWidthHeightCard"
                :height="getWidthHeightCard"
                :src="getImgCard"
                position="center"
                v-if="mostrarImgCard"
            >
            </v-img>

            <span class="white--text headline" v-if="!mostrarImgCard">
                {{ getImgCard }}
            </span>
        </v-avatar>
        

        <v-card-title class="justify-center" :style="getStyleTitle">
            {{ getNomeCard }}
        </v-card-title>

        <v-card-title v-if="!isSmall" >Ações</v-card-title>

        <v-card-text v-if="!isSmall">
            <v-chip-group
                active-class="deep-purple accent-4 white--text"
                column
            >
                <v-chip v-for="(acao, index) in getActionsCard" :key="index">
                    {{ acao }}
                </v-chip>

            </v-chip-group>
        </v-card-text>

        <v-overlay
            z-index="3"
            opacity="0.7"
            v-if="getActiveOverlay"
            absolute
        >
        </v-overlay>

    </v-card>
</template>

<script>

import * as detailsCard from '@/getDetailsCards'

export default {
    props:{
        carta: {
            type: Object,
            required: true
        },
        isSmall: {
            type: Boolean,
            default: false,
        }
    },

    computed: {

        getWidthHeightCard(){
            return this.isSmall ? 80 : 250
        },

        getStyleTitle() {
            return this.isSmall ? { fontSize: '12px' } : ""
        },

        getActiveOverlay(){
            return !this.carta.sn_ativa && !this.isSmall
        },

        mostrarImgCard(){
            return (this.carta.sn_ativa && this.isSmall) ? false : true
        },

        getImgCard() {
            return (this.carta.sn_ativa && this.isSmall) ? "?" : detailsCard.getImageCard(this.carta.idCarta)
        },

        getNomeCard() {
            return (this.carta.sn_ativa && this.isSmall) ? "Segredo" : detailsCard.getNameCard(this.carta.idCarta)
        },

        getActionsCard() {
            return detailsCard.getActionsCard(this.carta.idCarta)
        },

        getColorCard() {
            return this.mostrarImgCard ? "" : "colorBack"
        }

    },

    methods: {
        selecionarCarta() {
            if (this.isSmall) return
            this.$emit('selecionarCarta', this.carta)
        }
    }
}
</script>