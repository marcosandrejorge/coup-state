<template>
    <v-toolbar class="elevation-0" color="colorBack" grow>

        <v-toolbar-title >COUP STATE</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn text class="d-none d-sm-flex" v-for="button in menus" :key="button.icon">
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
                @click="ir()"
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

    </v-toolbar>
</template>

<script>
export default {
    data: ()=> ({
        menus: [
            {
                icon: 'help',
                text: 'Como jogar'
            },
            {
                icon: 'info',
                text: 'Sobre'
            }
        ]
    }),

    methods: {
        ir(){}
    }
}
</script>