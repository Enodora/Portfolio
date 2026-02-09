import { useLanguage } from '../../i18n'

function Intro() {
  const { t } = useLanguage()

  const handleScroll = (e) => {
    e.preventDefault()
    const header = document.getElementById('header')
    if (header) {
      header.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div id="intro">
      <h1 className="preline">{t('site.intro.title')}</h1>
      <p>{t('site.intro.subtitle')}</p>
      <ul className="actions">
        <li>
          <a href="#header" className="button icon solid solo fa-arrow-down scrolly" onClick={handleScroll}>
            {t('site.intro.cta')}
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Intro
