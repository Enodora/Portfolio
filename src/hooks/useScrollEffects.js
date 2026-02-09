import { useEffect, useState } from 'react'

export function useScrollEffects() {
  const [isNavPanelOpen, setIsNavPanelOpen] = useState(false)

  useEffect(() => {
    // Remove preload class after page load
    const timer = setTimeout(() => {
      document.body.classList.remove('is-preload')
    }, 100)

    // Intro hide on scroll using IntersectionObserver
    const intro = document.getElementById('intro')
    const main = document.getElementById('main')

    if (intro && main) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              intro.classList.add('hidden')
            } else {
              intro.classList.remove('hidden')
            }
          })
        },
        {
          rootMargin: '-25% 0px -50% 0px',
          threshold: 0,
        }
      )

      observer.observe(main)

      return () => {
        observer.disconnect()
        clearTimeout(timer)
      }
    }

    return () => clearTimeout(timer)
  }, [])

  const toggleNavPanel = () => {
    setIsNavPanelOpen(!isNavPanelOpen)
    document.body.classList.toggle('is-navPanel-visible', !isNavPanelOpen)
  }

  const closeNavPanel = () => {
    setIsNavPanelOpen(false)
    document.body.classList.remove('is-navPanel-visible')
  }

  return {
    isNavPanelOpen,
    toggleNavPanel,
    closeNavPanel,
  }
}
