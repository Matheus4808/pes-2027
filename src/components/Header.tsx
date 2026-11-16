import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import { Logo } from './ui'
import { navItems, scrollToId } from '../lib/nav'
import { site } from '../config/site'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    navItems.forEach(([, id]) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => {
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const go = (id: string) => {
    setOpen(false)
    scrollToId(id)
  }

  return (
    <header className={`header${scrolled ? ' header--solid' : ''}`}>
      <Logo size="sm" onClick={() => go('inicio')} />
      <nav className="nav" aria-label="Seções">
        {navItems.map(([label, id]) => (
          <button key={id} type="button" className={active === id ? 'is-active' : ''} onClick={() => go(id)}>
            {label}
          </button>
        ))}
      </nav>
      <div className="header__actions">
        <span className="header__version">{site.version}</span>
        <button type="button" className="btn btn--volt btn--sm" onClick={() => go('beta')}>
          <Download size={15} aria-hidden="true" /> Baixar BETA
        </button>
      </div>
      <button type="button" className="hamburger" onClick={() => setOpen(!open)} aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open}>
        {open ? <X /> : <Menu />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div className="mobile-nav" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.2 }}>
            {navItems.map(([label, id], i) => (
              <button key={id} type="button" onClick={() => go(id)}>
                <span>0{i + 1}</span>
                {label}
              </button>
            ))}
            <button type="button" className="btn btn--volt" onClick={() => go('beta')}>
              <Download size={16} aria-hidden="true" /> Baixar BETA
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
