import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import './assets/svg.js'

// import 'github-markdown-css'
// import './index.scss'
// import '../packages/vae.scss'

// import Markdown from './components/Markdown.vue'
import 'vite-plugin-vuedoc/style.css'

const app = createApp(App)

app.use(router)
app.mount('#app')
// app.component('Markdown', Markdown)
