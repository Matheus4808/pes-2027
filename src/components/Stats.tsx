import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { stats } from '../data/patch'
import { Reveal } from './ui'
import { prefersReducedMotion } from '../lib/nav'

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [reduced] = useState(prefersReducedMotion)
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView || reduced) return
    let raf = 0
    const t0 = performance.now()
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / 1400)
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, reduced, to])
  return (
    <span ref={ref}>
      {(reduced ? to : n).toLocaleString('pt-BR')}
      {suffix && <em>{suffix}</em>}
    </span>
  )
}

export function Stats() {
  return (
    <section id="numeros" className="stats" aria-label="O patch em números">
      <div className="container stats__grid">
        {stats.map((s, i) => (
          <Reveal key={s.label} className="stat" delay={i * 0.08}>
            <b className="stat__value"><Counter to={s.value} suffix={s.suffix} /></b>
            <span className="stat__label">{s.label}</span>
            <small>{s.note}</small>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
