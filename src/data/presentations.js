export const presentations = [
  {
    slug: 'nintendo-interview',
    title: 'Nintendo Interview Presentation',
    description: 'Interview presentation for Nintendo, showcasing game development projects.',
    thumbnail: '/presentation-images/Fracutred Reverie Title_Logo.png',
    slides: () => import('../presentations/nintendo-interview'),
  },
  // Future presentations can be added here
]

export function getPresentationBySlug(slug) {
  return presentations.find((p) => p.slug === slug)
}
