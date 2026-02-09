import { useLanguage } from '../../i18n'

function ProjectCard({ projectKey }) {
  const { t } = useLanguage()

  return (
    <article>
      <header>
        <h2>{t(`site.${projectKey}.title`)}</h2>
      </header>
      <div className="iframe-container">
        <iframe
          width="560"
          height="315"
          src={getYouTubeEmbedUrl(projectKey)}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <p>{t(`site.${projectKey}.overview`)}</p>
      {t(`site.${projectKey}.systems`) && <p>{t(`site.${projectKey}.systems`)}</p>}
      {(t(`site.${projectKey}.tool`) || t(`site.${projectKey}.team`) || t(`site.${projectKey}.period`) || t(`site.${projectKey}.playtime`)) && (
        <ul>
          {t(`site.${projectKey}.tool`) && <li>{t(`site.${projectKey}.tool`)}</li>}
          {t(`site.${projectKey}.team`) && <li>{t(`site.${projectKey}.team`)}</li>}
          {t(`site.${projectKey}.period`) && <li>{t(`site.${projectKey}.period`)}</li>}
          {t(`site.${projectKey}.playtime`) && <li>{t(`site.${projectKey}.playtime`)}</li>}
        </ul>
      )}
      <ul className="actions special">
        <li>
          <a href={getGitHubUrl(projectKey)} className="button">
            {t(`site.${projectKey}.cta_repo`)}
          </a>
        </li>
        {getDownloadUrl(projectKey) && (
          <li>
            <a href={getDownloadUrl(projectKey)} className="button">
              {t(`site.${projectKey}.cta_dl`) || t(`site.${projectKey}.cta_play`)}
            </a>
          </li>
        )}
      </ul>
    </article>
  )
}

function getYouTubeEmbedUrl(projectKey) {
  const urls = {
    'fractured-reverie': 'https://www.youtube.com/embed/s_RIxhlEp0A?si=nM60PkfVMprOF-i7',
    'fruits-bomber': 'https://www.youtube.com/embed/KHVJSGmGBdU?si=f_Q_x9ZWrPDGdNen',
    'ubcroid': 'https://www.youtube.com/embed/GQJeqVL3ANM?si=XQf5_iF6YjYxWC50',
    'fly-through': 'https://www.youtube.com/embed/PYEsXMj5Xe8?si=TNLipNqEivg29zKW',
    'forest-escape': 'https://www.youtube.com/embed/b1rtPToxDrg?si=rmt_VMjJh5OBKT2O',
  }
  return urls[projectKey] || ''
}

function getGitHubUrl(projectKey) {
  const urls = {
    'fractured-reverie': 'https://github.com/Enodora/Fractured-Reverie',
    'fruits-bomber': 'https://github.com/Enodora/Fruits-Bomber',
    'ubcroid': 'https://github.com/Enodora/UBC-CPSC-427',
    'fly-through': 'https://github.com/Enodora/Fly-Through-Revised',
    'forest-escape': 'https://github.com/Enodora/Forest-Escape',
  }
  return urls[projectKey] || '#'
}

function getDownloadUrl(projectKey) {
  const urls = {
    'fruits-bomber': 'https://play.google.com/store/apps/details?id=com.enodora.fruitsbomber',
    'ubcroid': 'https://play.google.com/store/apps/details?id=com.enodora.fruitsbomber&fbclid=PAAaZbPKSdGDUm-4QKRKgwmWYM4sp8jrp0e9kxbwQGe932qUFi82bEVyQCwfM_aem_AQrTwgpx5kZmCI1SkDLskJ0NDh40L470H66wiXom2Q9phfYkvKk90fujWnpjhV5WQ2c',
  }
  return urls[projectKey] || null
}

export default ProjectCard
