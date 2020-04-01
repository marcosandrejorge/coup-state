<template>
    <v-card
        width="250"
        class="ma-2"
        hover
        shaped
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
            
    </v-card>
</template>

<script>
export default {
    props:{
        carta: {
            type: Object,
            required: true
        }
    }
}
</script>