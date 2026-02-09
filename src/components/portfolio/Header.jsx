import { Link } from 'react-router-dom'
import { useLanguage } from '../../i18n'

function Header() {
  const { t } = useLanguage()

  return (
    <header id="header">
      <Link to="/" className="logo">
        {t('site.logo')}
      </Link>
    </header>
  )
}

export default Header
