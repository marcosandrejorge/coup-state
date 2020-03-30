<template>

    <v-row
        align="center"
        justify="center"
    >
        <v-col
            cols="11"
            sm="8"
            md="6"
            lg="5"
            xl="4"
        >
            <v-card
                class="mx-auto"
            >

                <v-toolbar
                    color="colorBack"
                    dark
                >
                    <v-toolbar-title>Salas</v-toolbar-title>
                </v-toolbar>

                <v-list two-line subheader>
                    
                    <v-subheader>
                        Salas em espera
                    </v-subheader>

                    <v-list-item-group>

                        <v-list-item
                            v-for="(item, index) in getSalasNaoIniciadas"
                            :key="item.hash"
                        >

                            <v-list-item-avatar>
                                <v-icon
                                >
                                    group
                                </v-icon>
                            </v-list-item-avatar>

                            <v-list-item-content>

                                <v-list-item-title v-text="'Sala ' + (index + 1) " class="ma-2">
                                </v-list-item-title>

                                <v-list-item-subtitle>
                                    Jogadores: {{ item.arrPessoas.length }}
                                </v-list-item-subtitle>

                            </v-list-item-content>

                            <v-list-item-action>
                                <v-btn color="primary" @click="irParaSala(item.hash)">
                                    <v-icon>keyboard_tab</v-icon>
                                </v-btn>
                            </v-list-item-action>

                        </v-list-item>
                    </v-list-item-group>


                    <v-subheader>Salas iniciadas</v-subheader>

                     <v-list-item-group>

                        <v-list-item
                            v-for="(item, index) in getSalasIniciadas"
                            :key="item.hash"
                        >

                            <v-list-item-avatar>
                                <v-icon
                                >
                                    group
                                </v-icon>
                            </v-list-item-avatar>

                            <v-list-item-content>

                                <v-list-item-title v-text="'Sala ' + (index + 1) " class="ma-2">
                                </v-list-item-title>

                                <v-list-item-subtitle>
                                    Jogadores: {{ item.arrPessoas.length }}
                                </v-list-item-subtitle>

                            </v-list-item-content>

                        </v-list-item>

                    </v-list-item-group>
                </v-list>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>

import { mapGetters } from 'vuex'
import mixinRouter from '@/mixins/mixinRouter'

export default {

    mixins: [
        mixinRouter
    ],

    data:() => ({
    }),

    computed: {
        ...mapGetters('sala', ['getArrSalas']),

        getSalasIniciadas() {
            return this.getArrSalas.filter(sala => {return sala.isSalaIniciada})
        },

        getSalasNaoIniciadas() {
            return this.getArrSalas.filter(sala => {return !sala.isSalaIniciada})
        }
    },

    methods: {
        irParaSala(hash) {
            this.mixinRouterPush({
                name: 'sala',
                params: {
                    hash
                }
            });
        }
    }
}
</script>