import store from '@/store/store'

export const getUserName = () => store.getters["user/getUserName"]

export const setUserName = username => store.dispatch(('user/setUserName'), username)

export const getIsUserNameClear = () => store.getters['user/getIsUserNameClear']


/**
 * Esse arquivo é para melhorar a chama de metodos do store(vuex), sem esse arquivo, a chama no router.js deveria ser como está em baixo
 * store.dispatch(('user/setUserName'), "Marcos");
 * console.log(store.getters["user/getUserName"]);
 */