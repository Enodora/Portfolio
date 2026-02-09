import { useLanguage } from '../../i18n'

function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()

  const handleChange = (e) => {
    setLanguage(e.target.value)
  }

  return (
    <div className="lang-dropdown">
      <label htmlFor="langSelect" className="visually-hidden">
        Language
      </label>
      <select
        id="langSelect"
        aria-label="Language"
        value={language}
        onChange={handleChange}
      >
        <option value="en">{t('site.lang.en')}</option>
        <option value="ja">{t('site.lang.ja')}</option>
      </select>
    </div>
  )
}

export default LanguageSwitcher
