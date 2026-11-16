import { site } from '../config/site'

export const scrollToId = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

// Botões "Baixar BETA": com link configurado baixa o launcher direto; sem link, leva à seção do BETA.
export const baixarBeta = () => {
  if (!site.betaUrl) return scrollToId('beta')
  const a = document.createElement('a')
  a.href = site.betaUrl
  a.download = ''
  a.rel = 'noopener'
  document.body.appendChild(a)
  a.click()
  a.remove()
}

export const prefersReducedMotion = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const navItems: [label: string, id: string][] = [
  ['Por dentro', 'por-dentro'],
  ['Brasil', 'brasil'],
  ['Competições', 'competicoes'],
  ['Recursos', 'recursos'],
  ['Edições', 'edicoes'],
  ['FAQ', 'faq'],
]
