import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './assets/css/font.less'
import './assets/css/media.less'
import router from './router'

createApp(App).use(router).mount('#app')
