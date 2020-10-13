import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routers'
import DemoBlock from './components/demo-block.vue'
import App from './App.vue'

import 'highlight.js/styles/color-brewer.css'
import './assets/styles/common.css'


const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)

app.component('DemoBlock', DemoBlock)

app.use(router)

app.mount('#app')