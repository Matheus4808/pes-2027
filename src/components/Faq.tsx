import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { faq } from '../data/patch'
import { SectionTitle } from './ui'
import { scrollToId } from '../lib/nav'

export function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="section faq">
      <div className="container faq__grid">
        <div>
          <SectionTitle kicker="Perguntas frequentes" lead="Não achou sua dúvida? Fale com a equipe pelo formulário logo abaixo.">
            Antes de <i>entrar em campo.</i>
          </SectionTitle>
          <button type="button" className="btn btn--ghost" onClick={() => scrollToId('lista')}>Falar com a equipe</button>
        </div>
        <div className="faq__list">
          {faq.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q} className={`qa${isOpen ? ' is-open' : ''}`}>
                <h3>
                  <button type="button" onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen} aria-controls={`qa-${i}`}>
                    {f.q}
                    <Plus size={18} aria-hidden="true" />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div id={`qa-${i}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
                      <p>{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
