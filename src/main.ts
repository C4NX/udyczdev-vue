import { createApp } from 'vue'
import App from './App.vue'

import * as Icons from './config/icons'
import { OhVueIcon, addIcons } from 'oh-vue-icons'

import FloatingVue from 'floating-vue'
import i18n from '@/i18n'

addIcons(...Object.values(Icons))

createApp(App).use(i18n).component('v-icon', OhVueIcon).use(FloatingVue).mount('#app')
