export default {

    namespaced: true,

    state: {
        arrSalas: [
            {
                hash: "swtedvqwe",
                quantidadeJogadores: 4,
                isSalaIniciada: false,
            },
            {
                hash: "wfwefwefwfwe",
                quantidadeJogadores: 4,
                isSalaIniciada: false,
            },
            {
                hash: "wefew53245wegfreg",
                quantidadeJogadores: 4,
                isSalaIniciada: true,
            }
        ],
        objSala: {
            hash: "swtedvqwe",
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