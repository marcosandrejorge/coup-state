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

        arrMinhasCartas: [],

        arrAcoesSala: []
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
        },

        getIsSalaIniciada(state) {
            return state.objSala.isSalaIniciada
        },

        getMinhasCartas(state) {
            return state.arrMinhasCartas
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

        SOCKET_minhasCartas(state, arrCartas) {
            state.arrMinhasCartas = [...arrCartas]
        },

        SOCKET_acoesSala(state, arrAcoes) {
            state.arrAcoesSala = [...arrAcoes]
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

        SOCKET_minhasCartas({ commit }, payload) {
            commit('SOCKET_minhasCartas', payload)
        },

        SOCKET_acoesSala({ commit }, payload) {
            commit('SOCKET_acoesSala', payload)
        },
    }

}