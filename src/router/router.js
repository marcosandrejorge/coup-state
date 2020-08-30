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
			if (getStore.getIsUserNameClear()){
				next({ name: 'username' })
			}
			else {
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
			getStore.setHashSala(to.params.hashSala);
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
