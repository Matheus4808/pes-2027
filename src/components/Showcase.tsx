import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, ChevronLeft, ChevronRight, Expand, X } from 'lucide-react'
import { showcase, type Shot } from '../data/patch'
import { SectionTitle } from './ui'

function Lightbox({ shots, index, onClose, onMove }: { shots: Shot[]; index: number; onClose: () => void; onMove: (d: number) => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onMove(1)
      if (e.key === 'ArrowLeft') onMove(-1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onMove])
  const shot = shots[index]
  return (
    <motion.div className="lightbox" role="dialog" aria-modal="true" aria-label={shot.caption} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <button type="button" className="lightbox__close" onClick={onClose} aria-label="Fechar"><X /></button>
      <motion.figure key={shot.src} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} onClick={(e) => e.stopPropagation()}>
        <img src={shot.src} alt={shot.alt} />
        <figcaption>{shot.caption} <span>{index + 1} / {shots.length}</span></figcaption>
      </motion.figure>
      {shots.length > 1 && (
        <>
          <button type="button" className="lightbox__nav lightbox__nav--prev" onClick={(e) => { e.stopPropagation(); onMove(-1) }} aria-label="Anterior"><ChevronLeft /></button>
          <button type="button" className="lightbox__nav lightbox__nav--next" onClick={(e) => { e.stopPropagation(); onMove(1) }} aria-label="Próxima"><ChevronRight /></button>
        </>
      )}
    </motion.div>
  )
}

export function Showcase() {
  const [tab, setTab] = useState(0)
  const [shot, setShot] = useState(0)
  const [zoom, setZoom] = useState<number | null>(null)
  const current = showcase[tab]

  const move = useCallback((d: number) => setZoom((z) => (z === null ? z : (z + d + current.shots.length) % current.shots.length)), [current.shots.length])
  const close = useCallback(() => setZoom(null), [])

  return (
    <section id="por-dentro" className="section showcase">
      <div className="container">
        <SectionTitle kicker="Por dentro do patch" lead="Nada de mockup: tudo o que você vê aqui é print do jogo rodando com o PES 2027 Revolution.">
          Veja o jogo <i>antes de baixar.</i>
        </SectionTitle>

        <div className="tabs" role="tablist" aria-label="Telas do patch">
          {showcase.map((t, k) => (
            <button key={t.id} type="button" role="tab" aria-selected={tab === k} className={tab === k ? 'is-active' : ''} onClick={() => { setTab(k); setShot(0) }}>
              <span>0{k + 1}</span>{t.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={current.id} className="showcase__body" role="tabpanel" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }}>
            <div className="showcase__stage">
              <button type="button" className="frame" onClick={() => setZoom(shot)} aria-label={`Ampliar: ${current.shots[shot].caption}`}>
                <AnimatePresence mode="wait">
                  <motion.img key={current.shots[shot].src} src={current.shots[shot].src} alt={current.shots[shot].alt} loading="lazy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} />
                </AnimatePresence>
                <span className="frame__zoom"><Expand size={16} aria-hidden="true" /> Ampliar</span>
              </button>
              {current.shots.length > 1 && (
                <div className="thumbs">
                  {current.shots.map((s, k) => (
                    <button key={s.src} type="button" className={k === shot ? 'is-active' : ''} onClick={() => setShot(k)} aria-label={s.caption}>
                      <img src={s.src} alt="" loading="lazy" />
                      <span>{s.caption}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="showcase__copy">
              <p className="kicker">{current.kicker}</p>
              <h3>{current.title}</h3>
              <p>{current.text}</p>
              <ul className="checks">
                {current.bullets.map((b) => (
                  <li key={b}><Check size={16} aria-hidden="true" />{b}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <AnimatePresence>{zoom !== null && <Lightbox shots={current.shots} index={zoom} onClose={close} onMove={move} />}</AnimatePresence>
    </section>
  )
}
