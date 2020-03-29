<template>
    <v-container
    class="fill-height"
    fluid
    >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12" color="colorBack pa-3">
                <v-card-title class="justify-center">
                    <p>Seja bem-vindo</p>
                </v-card-title>
                <v-card-text>
                    <v-form>
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
                        />
                    </v-form>
                </v-card-text>
                <v-card-actions class="justify-center">
                    <v-btn color="primary" width="96%" @click="entrarUser()">Entrar</v-btn>
                </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
    </v-container>
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

        entrarUser() {
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