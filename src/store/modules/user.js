export default {

    namespaced: true,

    state: {
        socketId: null,

        userName: "",

        hashSala: "",

        objJogadorLogado: {
            hashSala: "",
            idJogador: "",
            userName: "",
            qtdMoedas: 0,
            isJogando: false,
            isBloqueadoJogar: true
        }
    },

    getters: {
        getSocketId(state) {
            return state.socketId
        },
        getUserName(state) {
            return state.userName
        },
        getHashSala(state) {
            return state.hashSala
        },
        getIsUserNameClear(state) {
            return state.userName == "" || state.userName == null
        },
        getIsHashSalaClear(state) {
            return state.hashSala == "" || state.hashSala == null
        }
    },

    mutations: {
        setUserName(state, username) {
            state.userName = username
        },

        setHashSala(state, hashSala) {
            state.hashSala = hashSala
        },

        SOCKET_salaConectada(state, objSala) {
            state.hashSala = objSala.hashSala
        },

        SOCKET_socketId(state, socketId) {
            state.socketId = socketId
        },

        SOCKET_atualizarJogadorLogado(state, objJogadorLogado) {
            state.objJogadorLogado = { ...objJogadorLogado}
        },

    },

    actions: {
        setUserName({ commit }, payload) {
            commit('setUserName', payload)
        },

        setHashSala({ commit }, payload) {
            commit('setHashSala', payload)
        },

        SOCKET_salaConectada({ commit }, payload) {
            commit('SOCKET_salaConectada', payload)
        },

        SOCKET_socketId({ commit }, payload) {
            commit('SOCKET_socketId', payload)
        },

        SOCKET_atualizarJogadorLogado({ commit }, payload) {
            commit('SOCKET_atualizarJogadorLogado', payload)
        },
    }
}