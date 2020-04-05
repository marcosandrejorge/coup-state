export default {

    namespaced: true,

    state: {
        userName: "",
        hashSala: "",
    },

    getters: {
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
        setHashSala(state, hash) {
            state.hashSala = hash
        }
    },

    actions: {
        setUserName({ commit }, payload) {
            commit('setUserName', payload)
        },
        setHashSala({ commit }, payload) {
            commit('setHashSala', payload)
        }
    }
}