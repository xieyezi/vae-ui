import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import { h } from 'vue'
import Markdown from './components/Markdown.vue'
import intro from './markdown/intro.md'
import getStarted from './markdown/get-started.md'
import install from './markdown/install.md'
import ButtonDemo from './examples/ButtonDemo.vue'

const history = createWebHashHistory()
const md = (string) => h(Markdown, { content: string, key: string })

const router = createRouter({
	history: history,
	routes: [
		{ path: '/', component: Home },
		{
			path: '/doc',
			component: Doc,
			children: [
				{ path: '', redirect: '/doc/intro' },
				{ path: 'intro', component: md(intro) },
				{ path: 'get-started', component: md(getStarted) },
				{ path: 'install', component: md(install) },
				{ path: 'button', component: ButtonDemo }
			]
		}
	]
})
router.afterEach(() => {})

export default router
