import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import vuetify from './plugins/vuetify';
import VueSocketIO from 'vue-socket.io'

const vueSocket = new VueSocketIO({
  debug: true,
  connection: 'http://localhost:3000',
  vuex: {
    store,
    //O nome o evento emitido no servidor é "salasAtualizadas", no store, o mutation será SOCKET_salasAtualizadas
    actionPrefix: 'SOCKET_'
  }
});

Vue.config.productionTip = false

Vue.use(vueSocket)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
