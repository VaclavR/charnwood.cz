import csTranslations from '@/src/locales/cs/common.json'
import enTranslations from '@/src/locales/en/common.json'

export const t = (key, lang) => {
    if (typeof key === 'object') {
        const translation = lang === 'cs'? csTranslations[key.key] : enTranslations[key.key]
        return translation.includes('{link}')? translation.replace('{link}', key.link) : translation
    } else {
        if (lang === 'cs') {
            return csTranslations[key]? csTranslations[key] : key
        } else {
            return enTranslations[key]? enTranslations[key] : key
        }
    }
}