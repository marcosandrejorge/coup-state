export default {

    namespaced: true,

    state: {

        objSala: {
            hashSala: "",
            isSalaIniciada: false,
            quantidadeJogadores: 0,
            admin: "",
            adminUserName: ""
        },

        arrSalas: [],

        arrJogadoresSala: [],

        //TODO PRA CIMA JÁ ESTÁ OK, FALTA OS DEBAIXO

        arrAcoesSala: [
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
        ],

        arrCartasJogo: [
            {
                idCarta: 1,
                sn_ativa: false,
                idJogador: ""
            },
            {
                idCarta: 1,
                sn_ativa: false,
                idJogador: ""
            }
        ]
    },

    getters: {
        getArrSalas(state) {
            return state.arrSalas
        },

        arrJogadoresSala(state) {
            return state.arrJogadoresSala
        },

        getAcoesSala(state) {
            return state.arrAcoesSala
        },

        getObjSala(state) {
            return state.objSala
        }
    },

    mutations: {
        SOCKET_salasAtualizadas(state, arrSalas) {
            state.arrSalas = [...arrSalas]
        },

        SOCKET_salaConectada(state, objSala) {
            state.objSala = { ...objSala}
        },

        SOCKET_jogadoresAtualizado(state, arrJogadores) {
            state.arrJogadoresSala = [...arrJogadores]
        },
    },

    actions: {
        //SOCKET_ é os eventos emitidos pelo servidor
        //SOCKET_EMIT_ é os eventos emitidos pelo front-end para o servidor.

        SOCKET_salasAtualizadas({ commit }, arrSalas) {
            commit('SOCKET_salasAtualizadas', arrSalas)
        },

        SOCKET_salaConectada({ commit }, payload) {
            commit('SOCKET_salaConectada', payload)
        },

        SOCKET_jogadoresAtualizado({ commit }, payload) {
            commit('SOCKET_jogadoresAtualizado', payload)
        },
    }

}