import { Link } from 'react-router-dom'
import { useLanguage } from '../../i18n'
import LanguageSwitcher from './LanguageSwitcher'

function Nav() {
  const { t } = useLanguage()

  return (
    <nav id="nav">
      <ul className="links">
        <li className="active">
          <Link to="/">{t('site.nav.projects')}</Link>
        </li>
      </ul>
      <ul className="icons">
        <li>
          <Link to="/presentation" className="presentation-link">
            {t('site.nav.presentation')}
          </Link>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/atsuhiro-shirakaki/" className="icon brands alt fa-linkedin">
            <span className="label">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/Enodora" className="icon brands alt fa-github">
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/@Enodora_GameDev" className="icon brands alt fa-youtube">
            <span className="label">YouTube</span>
          </a>
        </li>
      </ul>
      <LanguageSwitcher />
    </nav>
  )
}

export default Nav
