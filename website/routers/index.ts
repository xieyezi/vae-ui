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
	return () => import(`../docs${name}.md`)
}

function registerRoutes(navs: Array<NavItem>) {
	let routes = []
	navs.forEach((nav) => {
		if (nav.list) {
			nav.list.forEach((page) => {
				let item = {
					path: page.path,
					meta: {
						title: page.title,
						description: page.description
					},
					component: null
				}
				if (page.path === '/test') {
					item.component = () => import('../components/test.vue')
				} else {
					item.component = loadDoc(page.path)
				}
				routes.push(item)
			})
		}
	})
	return routes
}

export default registerRoutes(navConfig)
