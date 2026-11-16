import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { site, type SocialKey } from '../config/site'
import { Logo } from './ui'
import { baixarBeta, navItems, scrollToId } from '../lib/nav'

const year = new Date().getFullYear()

const socialLabels: Record<SocialKey, string> = { discord: 'Discord', youtube: 'YouTube', instagram: 'Instagram', tiktok: 'TikTok' }

const credits = [
  ['Arena Corinthians (tela de título)', 'Jorge Morales Piderit', 'CC0'],
  ['Final da Copa 2014 (card Jogar)', 'Danilo Borges / copa2014.gov.br', 'CC BY 3.0'],
  ['RB Leipzig x Man. City (card ML)', 'Steffen Prößdorf', 'CC BY-SA 4.0'],
  ['Cristiano Ronaldo (card Lenda)', 'YantsImages', 'CC BY-SA 4.0'],
  ['Premiação Copa 2014 (card Conquistas)', 'Agência Brasil', 'CC BY 3.0 BR'],
] as const

export function FinalCta() {
  return (
    <section className="final">
      <div className="container final__inner">
        <Logo size="lg" />
        <h2>A nova era do futebol <i>começa no seu PC.</i></h2>
        <div className="final__ctas">
          <button type="button" className="btn btn--volt btn--lg" onClick={baixarBeta}><Download size={18} aria-hidden="true" /> Baixar o BETA</button>
          <button type="button" className="btn btn--ghost btn--lg" onClick={() => scrollToId('edicoes')}>Ver edições <ArrowRight size={18} aria-hidden="true" /></button>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  const socials = (Object.keys(site.social) as SocialKey[]).filter((k) => site.social[k])
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo size="md" onClick={() => scrollToId('inicio')} />
          <p>A nova era do futebol.</p>
          {socials.length > 0 && (
            <div className="footer__social">
              {socials.map((k) => <a key={k} href={site.social[k]} target="_blank" rel="noopener noreferrer">{socialLabels[k]}</a>)}
            </div>
          )}
        </div>
        <div>
          <h4>Navegação</h4>
          {navItems.map(([label, id]) => <button key={id} type="button" onClick={() => scrollToId(id)}>{label}</button>)}
        </div>
        <div>
          <h4>Patch</h4>
          <button type="button" onClick={baixarBeta}>Download do BETA</button>
          <button type="button" onClick={() => scrollToId('roadmap')}>Roadmap</button>
          <button type="button" onClick={() => scrollToId('lista')}>Contato</button>
        </div>
        <details className="footer__credits">
          <summary>Créditos das fotografias</summary>
          <ul>
            {credits.map(([what, who, lic]) => <li key={what}>{what} — {who} · {lic} · Wikimedia Commons</li>)}
          </ul>
        </details>
      </div>
      <div className="container footer__legal">
        <p>
          PES 2027 Revolution é um projeto de fã independente, sem vínculo com a KONAMI. eFootball, PES e Pro Evolution Soccer são marcas da KONAMI.
          Nomes de clubes, competições e marcas citados pertencem aos respectivos proprietários e aparecem apenas para identificar o conteúdo do jogo.
        </p>
        <p>© {year} PES 2027 Revolution</p>
      </div>
    </footer>
  )
}

/** Barra fixa de conversão no celular, aparece depois do hero. */
export function MobileCta() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      const beta = document.getElementById('beta')?.getBoundingClientRect()
      const onBeta = beta ? beta.top < window.innerHeight && beta.bottom > 0 : false
      setShow(window.scrollY > window.innerHeight * 0.8 && !onBeta)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <AnimatePresence>
      {show && (
        <motion.div className="mcta" initial={{ y: 80 }} animate={{ y: 0 }} exit={{ y: 80 }} transition={{ duration: 0.25 }}>
          <div>
            <b>PES 2027 Revolution</b>
            <span>{site.version} gratuito</span>
          </div>
          <button type="button" className="btn btn--volt btn--sm" onClick={baixarBeta}><Download size={15} aria-hidden="true" /> Baixar</button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
