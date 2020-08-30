import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import sala from './modules/sala'

Vue.use(Vuex)

export default new Vuex.Store({
    //Responsavel por setar o socket.io na vuex e poder usar esse state.socket nos modules.
    state: {
        socket: null,
    },

    mutations: {
        setSocket(state, socket) {
            state.socket = socket
        }
    },

    actions: {
        setSocket({ commit }, socket) {
            commit('setSocket', socket)
        }
    },
    //FIM
    modules: {
        user,
        sala
    }
})
