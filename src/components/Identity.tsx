import { useEffect, useRef, useState } from 'react'
import { Pause, Play } from 'lucide-react'
import logoIntro from '../assets/img/logo-intro.webp'
import cardMl from '../assets/img/card-ml.webp'
import cardLenda from '../assets/img/card-lenda.webp'
import cardConquistas from '../assets/img/card-conquistas.webp'
import { Reveal, SectionTitle } from './ui'
import { prefersReducedMotion } from '../lib/nav'

const palette = [
  { name: 'Ink', hex: '#05070C' },
  { name: 'Violeta', hex: '#6B3BFF' },
  { name: 'Volt', hex: '#D4FF2E' },
  { name: 'Gelo', hex: '#E8EDF5' },
]

const cards = [
  { src: cardMl, label: 'Master League' },
  { src: cardLenda, label: 'Crie sua lenda' },
  { src: cardConquistas, label: 'Conquistas' },
]

export function Identity() {
  const video = useRef<HTMLVideoElement>(null)
  const [reduced] = useState(prefersReducedMotion)
  const [playing, setPlaying] = useState(!reduced)

  useEffect(() => {
    const v = video.current
    if (!v || reduced) return
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? v.play().catch(() => setPlaying(false)) : v.pause()), { threshold: 0.3 })
    io.observe(v)
    return () => io.disconnect()
  }, [reduced])

  const toggle = () => {
    const v = video.current
    if (!v) return
    if (v.paused) {
      void v.play()
      setPlaying(true)
    } else {
      v.pause()
      setPlaying(false)
    }
  }

  return (
    <section className="section identity">
      <div className="container identity__grid">
        <div>
          <SectionTitle kicker="Identidade própria" lead="Abertura em vídeo, tela de título, logotipo e paleta criados para o patch. Quando o jogo abre, não parece mais o PES 2021.">
            Uma nova edição <i>desde a abertura.</i>
          </SectionTitle>
          <Reveal className="palette">
            {palette.map((c) => (
              <div key={c.hex}>
                <span style={{ background: c.hex }} />
                <b>{c.name}</b>
                <small>{c.hex}</small>
              </div>
            ))}
          </Reveal>
          <Reveal className="mini-cards" delay={0.1}>
            {cards.map((c) => (
              <figure key={c.label}>
                <img src={c.src} alt={`Card ${c.label} do menu`} loading="lazy" />
                <figcaption>{c.label}</figcaption>
              </figure>
            ))}
          </Reveal>
        </div>
        <Reveal className="film" delay={0.1}>
          <video ref={video} src={`${import.meta.env.BASE_URL}media/intro.mp4`} poster={logoIntro} muted loop playsInline preload="metadata" aria-label="Abertura do PES 2027 Revolution" />
          <button type="button" className="film__toggle" onClick={toggle} aria-label={playing ? 'Pausar vídeo' : 'Reproduzir vídeo'}>
            {playing ? <Pause size={16} /> : <Play size={16} />}
          </button>
          <span className="film__tag">Abertura do jogo</span>
        </Reveal>
      </div>
    </section>
  )
}
