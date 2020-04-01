<template>
    <v-card>
        <v-card-title class="justify-center">
            Ações
        </v-card-title>

        <v-card-text>

            <v-container
                style="max-height: 400px"
                class="overflow-y-auto"
            >

                <template v-for="acao in acoesRealizadas">
                    <p :key="acao"> {{ acao }} </p>
                </template>

            </v-container>
        </v-card-text>

        <v-card-actions>
            <v-card-actions>
                <v-row
                    align="center"
                    justify="start"
                >
                    <v-col
                        v-for="(acao) in acoesPossiveis"
                        :key="acao"
                        class="shrink pa-1"
                    >
                        <v-chip :color="acao.color" style="cursor:pointer">
                            {{ acao.text }}
                        </v-chip>
                    </v-col>
                </v-row>
            </v-card-actions>
        </v-card-actions>
    </v-card>
</template>

<script>

import acoesPossiveis from '@/getActions'
export default {

    props: {
        acoesRealizadas: {
            type: Array,
            required: true
        }
    },

    data: () => ({
        acoesPossiveis: acoesPossiveis
    })
}
</script>