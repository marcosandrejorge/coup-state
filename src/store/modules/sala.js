export default {

    namespaced: true,

    state: {
        arrSalas: [],
        objSala: {
            hashSala: "swtedvqwe",
            isSalaIniciada: false,
            isBloqueadoJogar: false,
            jogadorVez: "",
            arrPessoas: [
                {
                    userName: "Jorge",
                    isAdmin: true,
                    qtdMoedas: 2,
                    isJogando: false,
                    arrCartas: [
                        {
                            idCarta: 1,
                            sn_ativa: false
                        },
                        {
                            idCarta: 2,
                            sn_ativa: true
                        }
                    ]
                },
                {
                    userName: "André",
                    isAdmin: false,
                    qtdMoedas: 10,
                    isJogando: false,
                    arrCartas: [
                        {
                            idCarta: 3,
                            sn_ativa: true
                        },
                        {
                            idCarta: 4,
                            sn_ativa: false
                        }
                    ]
                },
                {
                    userName: "Todesco",
                    isAdmin: false,
                    qtdMoedas: 7,
                    isJogando: false,
                    arrCartas: [
                        {
                            idCarta: 5,
                            sn_ativa: true
                        },
                        {
                            idCarta: 5,
                            sn_ativa: false
                        }
                    ]
                },
                {
                    userName: "Romulo",
                    isAdmin: false,
                    qtdMoedas: 0,
                    isJogando: false,
                    arrCartas: [
                        {
                            idCarta: 4,
                            sn_ativa: false
                        },
                        {
                            idCarta: 1,
                            sn_ativa: false
                        }
                    ]
                },
                {
                    userName: "Piske",
                    isAdmin: false,
                    qtdMoedas: 2,
                    isJogando: false,
                    arrCartas: [
                        {
                            idCarta: 2,
                            sn_ativa: true
                        },
                        {
                            idCarta: 2,
                            sn_ativa: true
                        }
                    ]
                },
                {
                    userName: "Rovela",
                    isAdmin: false,
                    qtdMoedas: 2,
                    isJogando: false,
                    arrCartas: [
                        {
                            idCarta: 2,
                            sn_ativa: true
                        },
                        {
                            idCarta: 2,
                            sn_ativa: true
                        }
                    ]
                }
            ],
            arrCartasJogo: [],
            arrAcoes: [
                'Jogador Pedro comprou 3 moedas',
                'Jogador Marcos comprou 1 moeda',
                'Jogador Pedro comprou 3 moedas',
                'Jogador Marcos comprou 1 moeda',
                'Jogador Pedro comprou 3 moedas',
                'Jogador Marcos comprou 1 moeda',
                'Jogador Pedro comprou 3 moedas',
                'Jogador Marcos comprou 1 moeda',
                'Jogador Pedro comprou 3 moedas',
                'Jogador Marcos comprou 1 moeda',
                'Jogador Pedro comprou 3 moedas',
                'Jogador Marcos comprou 1 moeda',
                'Jogador Pedro comprou 3 moedas',
                'Jogador Marcos comprou 1 moeda',
                'Jogador Pedro comprou 3 moedas',
                'Jogador Marcos comprou 1 moeda',
                'Jogador Pedro comprou 3 moedas',
                'Jogador Marcos comprou 1 moeda',
                'Jogador Pedro comprou 3 moedas',
                'Jogador Marcos comprou 1 moeda',
                'Jogador Pedro comprou 3 moedas',
                'Jogador Marcos comprou 1 moeda',
                'Jogador Pedro comprou 3 moedas',
            ]
        }
    },

    getters: {
        getArrSalas(state) {
            return state.arrSalas
        },
        getPessoasSala(state) {
            return state.objSala.arrPessoas
        },
        getAcoesSala(state) {
            return state.objSala.arrAcoes
        },

    },

    mutations: {

        SOCKET_salasAtualizadas(state, arrSalas) {
            state.arrSalas = [...arrSalas]
        },
    },

    actions: {
        //SOCKET_ é os eventos emitidos pelo servidor
        //SOCKET_EMIT_ é os eventos emitidos pelo front-end para o servidor.

        SOCKET_salasAtualizadas({ commit }, arrSalas) {
            commit('SOCKET_salasAtualizadas', arrSalas)
        },
    }

}