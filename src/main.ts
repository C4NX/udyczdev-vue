import { createApp } from 'vue'
import App from './App.vue'

import * as RemixIcons from 'oh-vue-icons/icons/ri'
import { OhVueIcon, addIcons } from 'oh-vue-icons'

import FloatingVue from 'floating-vue'
import i18n from '@/i18n'

const Ri = Object.values({ ...RemixIcons })
addIcons(...Ri)

//FIXME: this is a hack to expose the searchIcons function to the window object
declare global {
  interface Window {
    searchIcons: (name: string) => string[]
  }
}
window.searchIcons = (name: string) => Ri.filter((x) => x.name.includes(name)).map((x) => x.name)


createApp(App).use(i18n).component('v-icon', OhVueIcon).use(FloatingVue).mount('#app')
