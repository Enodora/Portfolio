import { useLanguage } from '../../i18n'

function Footer() {
  const { t } = useLanguage()

  return (
    <footer id="footer">
      <section className="split contact">
        <section>
          <h3>{t('site.footer.phone')}</h3>
          <p><a href="tel:+1587-894-8833">+1 (587) 894-8833</a></p>
        </section>
        <section>
          <h3>{t('site.footer.email')}</h3>
          <p><a href="mailto:atsuhiro.shirakaki@gmail.com">atsuhiro.shirakaki@gmail.com</a></p>
        </section>
        <section>
          <h3>{t('site.footer.social')}</h3>
          <ul className="icons alt">
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
        </section>
      </section>
    </footer>
  )
}

export default Footer
