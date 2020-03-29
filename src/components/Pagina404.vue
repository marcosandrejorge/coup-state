<template>
  <v-container
    fill-height
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
            <v-card color="colorBack pa-5">

                <v-card-title class="justify-center">
                    
                    <h1 class="display-2 primary--text">Ops, 404</h1>

                </v-card-title>   

                <v-card-text class="text-center">

                    <p>A página que você está procurando não existe</p>

                    <v-btn
                        color="primary"
                        outlined
                        :to="{ name: 'Home' }"
                    >
                        Tire-me daqui!
                    </v-btn>

                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Page404'
  }
</script>