import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import * as getStore from '@/store/getStore'

const Sala = () => import('@/components/Sala')
const UserName = () => import('@/components/UserName')
const Pagina404 = () => import('@/components/Pagina404')

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		beforeEnter: (to, from, next) => {
			getStore.getIsUserNameClear() ? next({ name: 'username' }) : next()
		},
	},
	{
		path: '/sala/:hash',
		name: 'sala',
		props: true,
		component: Sala,
		beforeEnter: (to, from, next) => {
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
		component: Pagina404
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
