import { MotionConfig } from 'framer-motion'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { Showcase } from './components/Showcase'
import { Brazil } from './components/Brazil'
import { Identity } from './components/Identity'
import { Competitions } from './components/Competitions'
import { Features } from './components/Features'
import { Roadmap, Editions } from './components/Offer'
import { Beta } from './components/Beta'
import { Faq } from './components/Faq'
import { LeadForm } from './components/LeadForm'
import { FinalCta, Footer, MobileCta } from './components/Footer'
import './App.css'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip" href="#por-dentro">Pular para o conteúdo</a>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Showcase />
        <Brazil />
        <Identity />
        <Competitions />
        <Features />
        <Editions />
        <Beta />
        <Roadmap />
        <Faq />
        <LeadForm />
        <FinalCta />
      </main>
      <Footer />
      <MobileCta />
    </MotionConfig>
  )
}
