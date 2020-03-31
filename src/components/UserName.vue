<template>
    <v-row
        align-center
        justify="center"
    >
        <v-col
            cols="11"
            sm="8"
            md="6"
            lg="5"
            xl="4"
        >
            <v-form>
                <v-card class="elevation-12" color="colorBack pa-3">
                    <v-card-title class="justify-center">
                        <p>Seja bem-vindo</p>
                    </v-card-title>
                    <v-card-text>
                        <v-text-field
                            outlined
                            v-model="userName"
                            label="Digite um Username para entrar"
                            placeholder="Username"
                            name="username"
                            type="text"
                            dark
                            :hide-details="isValidUserName"
                            :error-messages="mensagemErro"
                            @keypress.enter="enterUser()"
                        />
                    </v-card-text>
                    <v-card-actions class="justify-center">
                        <v-btn color="primary" width="96%" @click="enterUser()">Entrar</v-btn>
                    </v-card-actions>
                </v-card>
            </v-form>
        </v-col>
    </v-row>
</template>

<script>

import { mapActions } from 'vuex'
import mixinRouter from '@/mixins/mixinRouter'

  export default {

    data() {
        return {
            userName: "",
            isValidUserName: true,
            mensagemErro: "",
        }
    },

    mixins: [
        mixinRouter
    ],

    methods: {

        ...mapActions('user',['setUserName']),

        enterUser() {
            if (this.verificarUserNameValido()){
                this.isValidUserName = true
                this.mensagemErro = ""

                this.setUserName(this.userName);

                this.mixinRouterPush({ 
                    name: 'Home'
                })

                return
            }
            
            this.isValidUserName = false
            this.mensagemErro = 'Username inválido'
        },

        verificarUserNameValido() {
            return true
        }
    }
  }
</script>