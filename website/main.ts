import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vite-plugin-vuedoc/style.css'
import '@vae-ui/theme-chalk/index.scss'

const app = createApp(App)

app.use(router)
app.mount('#app')
