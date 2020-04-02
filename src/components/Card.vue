<template>

    <v-card
        width="250"
        class="ma-2"
        hover
        shaped
        @click="selecionarCarta()"
    >
            
        <v-avatar size="250" tile>
            <v-img
                width="250"
                height="250"
                :src="carta.img"
                position="center"
            >
            </v-img>
        </v-avatar>
        

        <v-card-title class="justify-center">
            {{ carta.nome }}
        </v-card-title>

        <v-card-title>Ações</v-card-title>

        <v-card-text>
            <v-chip-group
                active-class="deep-purple accent-4 white--text"
                column
            >
                <v-chip v-for="(acao, index) in carta.acoes" :key="index">
                    {{ acao }}
                </v-chip>

            </v-chip-group>
        </v-card-text>

        <v-overlay
            z-index="3"
            opacity="0.7"
            v-if="!this.carta.sn_ativa"
            absolute
        >
        </v-overlay>

    </v-card>
</template>

<script>
export default {
    props:{
        carta: {
            type: Object,
            required: true
        }
    },

    methods: {
        selecionarCarta() {
            this.$emit('selecionarCarta', this.carta)
        }
    }
}
</script>