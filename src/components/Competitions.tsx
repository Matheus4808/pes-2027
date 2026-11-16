import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Search, Star } from 'lucide-react'
import { competitions, regions, type Region } from '../data/competitions'
import { SectionTitle } from './ui'

const PAGE = 18
const norm = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

export function Competitions() {
  const [region, setRegion] = useState<Region | 'Todas'>('Todas')
  const [query, setQuery] = useState('')
  const [all, setAll] = useState(false)

  const filtered = useMemo(() => {
    const q = norm(query.trim())
    return competitions
      .filter((c) => region === 'Todas' || c.region === region)
      .filter((c) => !q || norm(`${c.name} ${c.country}`).includes(q))
      .sort((a, b) => Number(!!b.hot) - Number(!!a.hot))
  }, [region, query])

  const list = all || query ? filtered : filtered.slice(0, PAGE)
  const count = (r: Region) => competitions.filter((c) => c.region === r).length

  return (
    <section id="competicoes" className="section comps">
      <div className="container">
        <SectionTitle kicker="Competições" lead={`${competitions.length} competições jogáveis em ${regions.length} regiões — ligas, copas nacionais, supercopas, torneios continentais e de seleções.`}>
          O mundo inteiro <i>no seu calendário.</i>
        </SectionTitle>

        <div className="comps__bar">
          <div className="filters" role="toolbar" aria-label="Filtrar por região">
            <button type="button" className={region === 'Todas' ? 'is-active' : ''} onClick={() => { setRegion('Todas'); setAll(false) }}>
              Todas <span>{competitions.length}</span>
            </button>
            {regions.map((r) => (
              <button key={r} type="button" className={region === r ? 'is-active' : ''} onClick={() => { setRegion(r); setAll(false) }}>
                {r} <span>{count(r)}</span>
              </button>
            ))}
          </div>
          <label className="search">
            <Search size={16} aria-hidden="true" />
            <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar liga, copa ou país" aria-label="Buscar competição" />
          </label>
        </div>

        <motion.ul className="comp-grid" layout>
          <AnimatePresence initial={false}>
            {list.map((c) => (
              <motion.li key={`${c.name}-${c.country}`} layout initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className={`comp${c.hot ? ' comp--hot' : ''}`}>
                <div className="comp__top">
                  <span className="comp__kind">{c.kind}</span>
                  {c.hot && <Star size={13} aria-label="Destaque" />}
                </div>
                <h3>{c.name}</h3>
                <p>{c.country}</p>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
        {list.length === 0 && <p className="empty">Nenhuma competição encontrada para "{query}".</p>}

        {!query && filtered.length > PAGE && (
          <button type="button" className="btn btn--ghost comps__more" onClick={() => setAll(!all)}>
            {all ? 'Mostrar menos' : `Ver todas as ${filtered.length} competições`}
          </button>
        )}
      </div>
    </section>
  )
}
