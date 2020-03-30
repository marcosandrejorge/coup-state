export default {

    namespaced: true,

    state: {
        arrSalas: [
            {
                hash: "swtedvqwe", 
                isSalaIniciada: false,
                isBloqueadoJogar: false,
                jogadorVez: "",
                arrPessoas: [
                    {
                        userName: "Marcos",
                        isAdmin: true,
                        qtdMoedas: 2,
                        isJogando: false,
                        arrCartas: [
                            {
                                carta: 1,
                                sn_ativa: true
                            }
                        ]
                    }
                ],
                arrCartasJogo: [],
                arrAcoes:[]
            },
            {
                hash: "dfgdfwqerwer",
                isSalaIniciada: false,
                isBloqueadoJogar: false,
                jogadorVez: "",
                arrPessoas: [
                    {
                        userName: "Marcos",
                        isAdmin: true,
                        qtdMoedas: 2,
                        isJogando: false,
                        arrCartas: [
                            {
                                carta: 1,
                                sn_ativa: true
                            }
                        ]
                    }
                ],
                arrCartasJogo: [],
                arrAcoes: []
            },
            {
                hash: "fsdfwefwef",
                isSalaIniciada: true,
                isBloqueadoJogar: false,
                jogadorVez: "",
                arrPessoas: [
                    {
                        userName: "Marcos",
                        isAdmin: true,
                        qtdMoedas: 2,
                        isJogando: false,
                        arrCartas: [
                            {
                                carta: 1,
                                sn_ativa: true
                            }
                        ]
                    }
                ],
                arrCartasJogo: [],
                arrAcoes: []
            }
        ],
        objSala: {}
    },

    getters: {
        getArrSalas(state) {
            return state.arrSalas
        }
    },

    mutations: {
        setArrSalas(state, arrSalas) {
            state.arrSalas = [...arrSalas]
        }
    },

    actions: {
        setArrSalas({ commit }, arrSalas) {
            commit('setArrSalas', arrSalas)
        }
    }

}