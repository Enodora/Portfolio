import { useEffect } from 'react'
import Intro from '../components/portfolio/Intro'
import Header from '../components/portfolio/Header'
import Nav from '../components/portfolio/Nav'
import ProjectFeatured from '../components/portfolio/ProjectFeatured'
import ProjectCard from '../components/portfolio/ProjectCard'
import Footer from '../components/portfolio/Footer'
import Copyright from '../components/portfolio/Copyright'
import { useScrollEffects } from '../hooks/useScrollEffects'

function PortfolioPage() {
  useScrollEffects()

  useEffect(() => {
    // Set body class for theme
    document.body.className = 'is-preload'
  }, [])

  return (
    <div id="wrapper" className="fade-in">
      <div className="bg"></div>
      <Intro />
      <Header />
      <Nav />
      <div id="main">
        <ProjectFeatured projectKey="fractured-reverie" />
        <section className="posts">
          <ProjectCard projectKey="fruits-bomber" />
          <ProjectCard projectKey="ubcroid" />
          <ProjectCard projectKey="fly-through" />
          <ProjectCard projectKey="forest-escape" />
        </section>
      </div>
      <Footer />
      <Copyright />
    </div>
  )
}

export default PortfolioPage
