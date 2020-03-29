export default {

    namespaced: true,

    state: {
        userName: ""
    },

    getters: {
        getUserName(state) {
            return state.userName
        },
        getIsUserNameClear(state) {
            return state.userName == "" || state.userName == null
        }
    },

    mutations: {
        setUserName(state, username) {
            state.userName = username
        }
    },

    actions: {
        setUserName({ commit }, payload) {
            commit('setUserName', payload)
        }
    }
}