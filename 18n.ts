import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import {initReactI18next} from 'react-i18next'
import Backend from 'i18next-http-backend'

import EN from './app/locales/en/en.json'
import RU from './app/locales/ru/ru.json'
import UZ from './app/locales/uz/uz.json'

const resources = {
    en: EN,
    ru: RU,
    uz: UZ,
}

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        saveMissing: true,
        react: {useSuspense: true},
    })

export default i18n
