import { App } from 'vue'
import Header from '../container/src/index.vue'

export default (app: App): void => {
	app.component(Header.name, Header)
}

export { Header }
