import { App } from 'vue'
import Footer from '../container/src/footer.vue'

export default (app: App): void => {
	app.component(Footer.name, Footer)
}

export { Footer }
