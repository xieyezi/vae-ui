import { default as Button } from './button'

const components = [Button]

const install = function (app) {
	components.map((component) => {
		app.use(component)
	})
}
export { Button }

export default {
	install
}
