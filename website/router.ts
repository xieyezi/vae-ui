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
			component: async () => import('./docs/Button.zh-CN.md')
		}
	]
})

router.afterEach(() => {})

export default router
