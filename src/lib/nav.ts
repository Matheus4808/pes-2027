export const scrollToId = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

export const prefersReducedMotion = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const navItems: [label: string, id: string][] = [
  ['Por dentro', 'por-dentro'],
  ['Brasil', 'brasil'],
  ['Competições', 'competicoes'],
  ['Recursos', 'recursos'],
  ['Edições', 'edicoes'],
  ['FAQ', 'faq'],
]
