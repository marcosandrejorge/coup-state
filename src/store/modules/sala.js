export default {

    namespaced: true,

    state: {
        arrSalas: [],
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