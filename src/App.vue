<template>

    <div>
        <v-app id="inspire">

            <v-app-bar app>
                
                <TopBar />

            </v-app-bar>

            <v-content class="back">
                <v-container fill-height fluit>
                    <v-flex>
                        <router-view/>
                    </v-flex>
                </v-container>
            </v-content>

            <v-footer app>
                <Footer />
            </v-footer>
        </v-app>
    </div>
    
</template>

<script>
import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer'
export default {
    name: 'App',

    components: {
        TopBar,
        Footer
    }
};
</script>
