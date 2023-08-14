import { createI18n } from 'vue-i18n'
import messages from './messages'

export default createI18n({
  locale: 'fr-FR',
  fallbackLocale: 'en-US',
  messages
})