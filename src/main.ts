import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './assets/font.less'
import router from './router'

createApp(App).use(router).mount('#app')
