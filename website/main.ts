import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VaeUI from 'vae-ui/index'
// import { Button as VaeButton } from 'vae-ui/button/index'

import './index.scss'
import 'vae-ui/index.scss'
import 'vite-plugin-vuedoc/style.css'

const app = createApp(App)

app.use(router)
app.use(VaeUI)
// app.component('VaeButton',VaeButton)
app.mount('#app')
