import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import vae from '../packages/index'

const app = createApp(App)
app.use(vae)
app.mount('#app')
