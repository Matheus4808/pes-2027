import { CalendarDays, Cpu, LayoutDashboard, Mic, Newspaper, Radio, Shield, Sprout, Swords, Table2, Trophy, Video } from 'lucide-react'
import type { ComponentType } from 'react'
import { features, type Feature } from '../data/patch'
import { Reveal, SectionTitle, StatusPill } from './ui'

const icons: Record<Feature['icon'], ComponentType<{ size?: number }>> = {
  layout: LayoutDashboard,
  shield: Shield,
  radio: Radio,
  table: Table2,
  sprout: Sprout,
  video: Video,
  calendar: CalendarDays,
  mic: Mic,
  cpu: Cpu,
  trophy: Trophy,
  news: Newspaper,
  swords: Swords,
}

export function Features() {
  const live = features.filter((f) => f.status === 'NA BETA').length
  return (
    <section id="recursos" className="section features">
      <div className="container">
        <SectionTitle kicker="Recursos exclusivos" lead={`${live} módulos já liberados no BETA e mais em testes. Tudo feito por nós, rodando dentro do jogo.`}>
          Não é só atualização de elenco. <i>É outro jogo.</i>
        </SectionTitle>
        <div className="feat-grid">
          {features.map((f, i) => {
            const Icon = icons[f.icon]
            return (
              <Reveal as="article" key={f.title} className={`feat${f.status !== 'NA BETA' ? ' feat--soon' : ''}`} delay={(i % 3) * 0.06}>
                <div className="feat__head">
                  <span className="feat__icon"><Icon size={20} /></span>
                  <StatusPill status={f.status} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
