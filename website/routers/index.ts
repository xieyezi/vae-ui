import navConfig from './nav.config.json'

interface NavItem {
	groupName?: string
	list: Array<RouterItem>
}
interface RouterItem {
	path: string
	title?: string
	description?: string
}

function loadDoc(name: string) {
	return () => import(`./components${name}.md`)
}

function registerRoutes(navs: Array<NavItem>) {
	let routes = []
	navs.forEach((nav) => {
		if (nav.list) {
			nav.list.forEach((page) => {
				let item = null
				if (page.path === '/layout') {
					item = {
						path: page.path,
						meta: {
							title: page.title,
							description: page.description
						},
						component: () => import('../components/alert.vue')
					}
				} else {
					item = {
						path: page.path,
						meta: {
							title: page.title,
							description: page.description
						},
						component: loadDoc(page.path)
					}
				}
				routes.push(item)
			})
		}
	})
	return routes
}

export default registerRoutes(navConfig)
