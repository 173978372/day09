import './assets/main.css'

import { createApp } from 'vue'
import { Icon } from '@iconify/vue'
import router from './router'
import App from './App.vue'
import { pinia } from './store'

createApp(App).use(Icon).use(pinia).use(router).mount('#app')
