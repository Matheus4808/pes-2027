import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Download, Play } from 'lucide-react'
import heroBg from '../assets/img/hero-bg.webp'
import menuPrincipal from '../assets/img/menu-principal.webp'
import escolhaClube from '../assets/img/escolha-clube.webp'
import classSerieA from '../assets/img/class-serie-a.webp'
import aovivo from '../assets/img/aovivo-70min.webp'
import { scrollToId } from '../lib/nav'
import { site } from '../config/site'
import { competitions } from '../data/competitions'

const slides = [
  { src: menuPrincipal, label: 'Menu principal' },
  { src: escolhaClube, label: 'Escolha seu clube' },
  { src: classSerieA, label: 'Classificação' },
  { src: aovivo, label: 'Rodada ao Vivo' },
]

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = window.setInterval(() => setI((v) => (v + 1) % slides.length), 4200)
    return () => window.clearInterval(t)
  }, [])

  const ticker = competitions.filter((c) => c.hot).map((c) => c.name)

  return (
    <section id="inicio" className="hero">
      <img className="hero__bg" src={heroBg} alt="" aria-hidden="true" fetchPriority="high" />
      <div className="hero__shade" aria-hidden="true" />

      <div className="hero__inner">
        <div className="hero__copy">
          <motion.p className="hero__badge" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }}>
            <i aria-hidden="true" /> {site.version} · Patch brasileiro para PES 2021
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08, ease }}>
            <span className="hero__pes">PES 2027</span>
            <span className="hero__bar" aria-hidden="true" />
            <span className="hero__rev">REVOLUTION</span>
          </motion.h1>
          <motion.p className="hero__lead" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.18, ease }}>
            O futebol brasileiro <strong>da Série A à Série D</strong>, 13 estaduais, Sub-20 e Copinha — dentro de um jogo com
            interface nova, rodada ao vivo e tabelas com a cara de cada competição.
          </motion.p>
          <motion.div className="hero__ctas" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.28, ease }}>
            <button type="button" className="btn btn--volt btn--lg" onClick={() => scrollToId('beta')}>
              <Download size={18} aria-hidden="true" /> Baixar o BETA grátis
            </button>
            <button type="button" className="btn btn--ghost btn--lg" onClick={() => scrollToId('por-dentro')}>
              <Play size={16} aria-hidden="true" /> Ver o jogo por dentro
            </button>
          </motion.div>
          <motion.ul className="hero__proof" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.45 }}>
            <li><b>4</b> divisões nacionais</li>
            <li><b>13</b> estaduais</li>
            <li><b>128</b> clubes na Copinha</li>
          </motion.ul>
        </div>

        <motion.div className="hero__screen" initial={{ opacity: 0, x: 40, rotateY: -14 }} animate={{ opacity: 1, x: 0, rotateY: -8 }} transition={{ duration: 1, delay: 0.2, ease }}>
          <div className="screen">
            <div className="screen__glass">
              <AnimatePresence mode="sync">
                <motion.img key={slides[i].src} src={slides[i].src} alt={`Print do jogo: ${slides[i].label}`} initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }} />
              </AnimatePresence>
            </div>
            <div className="screen__bar">
              <span>{slides[i].label}</span>
              <div className="screen__dots">
                {slides.map((s, k) => (
                  <button key={s.label} type="button" className={k === i ? 'is-on' : ''} onClick={() => setI(k)} aria-label={`Mostrar ${s.label}`} />
                ))}
              </div>
            </div>
          </div>
          <p className="hero__screen-note">Imagens reais do jogo · 1920×1080</p>
        </motion.div>
      </div>

      <button type="button" className="hero__scroll" onClick={() => scrollToId('numeros')} aria-label="Rolar para baixo">
        <ArrowRight size={16} aria-hidden="true" />
      </button>

      <div className="ticker" aria-hidden="true">
        <div className="ticker__track">
          {[...ticker, ...ticker].map((t, k) => (
            <span key={k}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
