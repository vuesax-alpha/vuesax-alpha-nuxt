import { defineNuxtConfig } from 'nuxt/config'
import VuesaxAlpha from '..'

export default defineNuxtConfig({
  modules: [VuesaxAlpha],
  vuesaxAlpha: {
    imports: ['useLocale'],
    injectionID: { prefix: 100, current: 1 }
  }
})
