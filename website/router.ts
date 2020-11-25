import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'

const history = createWebHashHistory()
const router = createRouter({
	history: history,
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/button',
			name: 'button',
			component: async () => import('./docs/zh-CN/button.md')
		},
		{
			path: '/message',
			name: 'message',
			component: async () => import('./docs/zh-CN/message.md')
		},
		{
			path: '/alert',
			name: 'alert',
			component: async () => import('./docs/zh-CN/alert.md')
		}
	]
})

router.afterEach(() => {})

export default router
