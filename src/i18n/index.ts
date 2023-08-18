import { createI18n } from 'vue-i18n'
import frFR from './messages/fr-FR.json'
import enUS from './messages/en-US.json'

type MessageSchema = typeof enUS

export default createI18n<[MessageSchema], 'en-US' | 'fr-FR'>({
  locale: 'fr-FR',
  fallbackLocale: 'fr-FR',
  allowComposition: true,
  messages: {
    'fr-FR': frFR,
    'en-US': enUS
  }
})
