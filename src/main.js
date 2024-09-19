import './assets/main.css'

import { createApp } from 'vue'
import { Icon } from '@iconify/vue'
import router from './router'
import App from './App.vue'

createApp(App).use(Icon).use(router).mount('#app')
