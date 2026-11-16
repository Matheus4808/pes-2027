import { Bell, Download, HardDrive, MonitorPlay, Package, RotateCcw } from 'lucide-react'
import { installSteps, requirements } from '../data/patch'
import { site } from '../config/site'
import { Reveal, SectionTitle } from './ui'
import { scrollToId } from '../lib/nav'

const reqIcons = [MonitorPlay, Package, HardDrive, RotateCcw]

export function Beta() {
  return (
    <section id="beta" className="section beta">
      <div className="container">
        <div className="beta__box">
          <div className="beta__copy">
            <SectionTitle kicker={`${site.version} · acesso antecipado`} lead="Jogue antes de todo mundo, mande seu feedback e ajude a fechar a versão final. O launcher deixa tudo reversível.">
              Entre em campo <i>antes de todo mundo.</i>
            </SectionTitle>
            <ol className="steps">
              {installSteps.map((s) => (
                <li key={s.n}>
                  <b>{s.n}</b>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <Reveal className="dl" delay={0.1}>
            <div className="dl__head">
              <span className="dl__icon"><Download size={22} aria-hidden="true" /></span>
              <div>
                <small>Download</small>
                <h3>PES 2027 Revolution — {site.version}</h3>
              </div>
            </div>
            <dl className="dl__req">
              {requirements.map((r, i) => {
                const Icon = reqIcons[i]
                return (
                  <div key={r.label}>
                    <dt><Icon size={15} aria-hidden="true" />{r.label}</dt>
                    <dd>{r.label === 'Download' ? site.betaSize : r.value}</dd>
                  </div>
                )
              })}
            </dl>
            {site.betaUrl ? (
              <>
                <a className="btn btn--volt btn--block btn--lg" href={site.betaUrl} download>
                  <Download size={18} aria-hidden="true" /> Baixar o launcher
                </a>
                <p className="dl__note">Launcher para Windows ({site.launcherSize}). Ele baixa o patch ({site.betaSize}), instala dentro do SiderAddons e abre o jogo.</p>
              </>
            ) : (
              <>
                <button type="button" className="btn btn--volt btn--block btn--lg" onClick={() => scrollToId('lista')}>
                  <Bell size={18} aria-hidden="true" /> Me avise quando liberar
                </button>
                <p className="dl__note">O link do {site.version} está na reta final de empacotamento. Deixe seu e-mail e receba primeiro.</p>
              </>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
