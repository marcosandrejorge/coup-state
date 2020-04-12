<template>
    <v-toolbar class="elevation-0" grow>
        <v-toolbar-title >COUP STATE</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn text class="d-none d-sm-flex" v-for="button in menus" :key="button.text" @click="mostrarModal(button.icon)">
            <span class="pa-2">{{ button.text }}</span>
            <v-icon>{{ button.icon }}</v-icon>
        </v-btn>

        <v-menu bottom left>
            <template v-slot:activator="{ on }">
              <v-btn
                dark
                icon
                v-on="on"
                class="d-flex d-sm-none"
              >
                <v-icon>more_vert</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(button, i) in menus"
                :key="i"
                @click="mostrarModal(button.icon)"
              >
                <v-list-item-avatar>
                    <v-icon>
                        {{ button.icon }}
                    </v-icon>
                </v-list-item-avatar>
                <v-list-item-title>{{ button.text }}</v-list-item-title>
              </v-list-item>
            </v-list>
        </v-menu>

        <ComoJogar :mostrar="modalComoJogar" @fecharModal="fecharModalComoJogar()"/>

    </v-toolbar>
</template>

<script>

import ComoJogar from '@/components/ComoJogar'

export default {

    components: {
        ComoJogar
    },

    data: ()=> ({
        menus: [
            {
                icon: 'help',
                text: 'Como jogar'
            },
            // {
            //     icon: 'info',
            //     text: 'Sobre'
            // }
        ],

        modalComoJogar: false,
    }),

    methods: {
        mostrarModal(button) {
            switch (button) {
                case 'help':
                    this.modalComoJogar = true;
                    break;
                case 'info':
                    break;
            }
        },

        fecharModalComoJogar() {
            this.modalComoJogar = false;
        }
    }
}
</script>