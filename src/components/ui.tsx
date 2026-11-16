import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

/** Marca do patch: PES 2027 / filete / R E V O L U T I O N (igual à tela de título do jogo). */
export function Logo({ size = 'md', onClick }: { size?: 'sm' | 'md' | 'lg'; onClick?: () => void }) {
  const inner = (
    <>
      <span className="logo__pes">PES 2027</span>
      <span className="logo__bar" aria-hidden="true" />
      <span className="logo__rev">REVOLUTION</span>
    </>
  )
  return onClick ? (
    <button type="button" className={`logo logo--${size}`} onClick={onClick} aria-label="PES 2027 Revolution — voltar ao início">
      {inner}
    </button>
  ) : (
    <span className={`logo logo--${size}`} aria-label="PES 2027 Revolution">{inner}</span>
  )
}

export function SectionTitle({ kicker, children, lead, center = false }: { kicker: string; children: ReactNode; lead?: ReactNode; center?: boolean }) {
  return (
    <Reveal className={`stitle${center ? ' stitle--center' : ''}`}>
      <p className="kicker">{kicker}</p>
      <h2>{children}</h2>
      {lead && <p className="lead">{lead}</p>}
    </Reveal>
  )
}

export function Reveal({ children, className, delay = 0, as = 'div' }: { children: ReactNode; className?: string; delay?: number; as?: 'div' | 'li' | 'article' }) {
  const M = motion[as]
  return (
    <M className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </M>
  )
}

export function StatusPill({ status }: { status: string }) {
  const live = status === 'NA BETA' || status === 'AGORA'
  return <span className={`pill${live ? ' pill--live' : ''}`}>{live && <i aria-hidden="true" />}{status}</span>
}
