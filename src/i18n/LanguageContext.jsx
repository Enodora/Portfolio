import { createContext, useContext, useState, useCallback } from 'react'
import en from './en.json'
import ja from './ja.json'

const translations = { en, ja }
const LanguageContext = createContext()

function resolve(obj, path) {
  return path.split('.').reduce((o, k) => o?.[k], obj) ?? path
}

function detectLanguage() {
  const stored = localStorage.getItem('site_lang')
  if (stored && translations[stored]) return stored
  const nav = navigator.language?.slice(0, 2)
  return translations[nav] ? nav : 'en'
}

export function LanguageProvider({ children }) {
  const [language, setLang] = useState(detectLanguage)
  const setLanguage = useCallback((lng) => {
    localStorage.setItem('site_lang', lng)
    setLang(lng)
  }, [])
  const t = useCallback(
    (key) => resolve(translations[language], key),
    [language]
  )
  return (
    <LanguageContext.Provider value={{ t, language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
