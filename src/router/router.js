import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import * as getStore from '@/store/getStore'

const Sala = () => import('@/components/Sala')
const UserName = () => import('@/components/UserName')
const Page404 = () => import('@/components/Page404')

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		beforeEnter: (to, from, next) => {
			//Se o usuario não inseriu o username, redireciona ele para a tela para inserir
			if (getStore.getIsUserNameClear()){
				next({ name: 'username' })
			}
			else {
				//Se o usuário já inseriu o username e tem o hashSala na vuex, 
				//quer dizer que ele veio atraves do link de convite da sala, logo, redireciona o mesmo para a sala
				if (!getStore.getIsHashSalaClear()) {
					next({ name: 'sala', params: { hashSala: getStore.getHashSala() } })
				} else {
					next()
				}
			}
		},
	},
	{
		path: '/sala/:hashSala',
		name: 'sala',
		props: true,
		component: Sala,
		beforeEnter: (to, from, next) => {
			//Seta o hash da sala na vuex, para que caso o usuario esteja vindo do link de convite deixe salvo o hash para redirecionar depois de inserir o username.
			getStore.setHashSala(to.params.hashSala);
			//Caso não tenha o username inserido, redireciona pra pagina pra inserir
			getStore.getIsUserNameClear() ? next({ name: 'username' }) : next()
		},
	},
	{
		path: '/username',
		name: 'username',
		component: UserName
	},
	{
		path: '*',
		component: Page404
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
