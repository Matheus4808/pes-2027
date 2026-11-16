import { ArrowRight, Check, Download, Lock, ShoppingCart } from 'lucide-react'
import { editions, roadmap } from '../data/patch'
import { site } from '../config/site'
import { Logo, Reveal, SectionTitle, StatusPill } from './ui'
import { baixarBeta, scrollToId } from '../lib/nav'

export function Roadmap() {
  return (
    <section id="roadmap" className="section roadmap">
      <div className="container">
        <SectionTitle kicker="Próximos passos" lead="O BETA é só o pontapé inicial. Cada fase libera mais do que já está pronto aqui.">
          A revolução <i>em quatro tempos.</i>
        </SectionTitle>
        <ol className="road">
          {roadmap.map((r, i) => (
            <Reveal as="li" key={r.phase} className={`road__step${r.active ? ' is-now' : ''}`} delay={i * 0.08}>
              <b>{r.phase}</b>
              <StatusPill status={r.status} />
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Editions() {
  const buy = site.checkoutUrl
  return (
    <section id="edicoes" className="section editions">
      <div className="container">
        <SectionTitle center kicker="Edições" lead="Comece de graça pelo BETA. Quando a Edição Revolution abrir, quem está na lista recebe primeiro.">
          Jogue agora. <i>Garanta a completa.</i>
        </SectionTitle>
        <div className="ed-grid">
          <Reveal as="article" className="ed">
            <p className="ed__tag">{editions.beta.tag}</p>
            <h3>{editions.beta.name}</h3>
            <p className="ed__price"><b>R$ 0</b><span>para sempre</span></p>
            <ul className="checks">
              {editions.beta.items.map((it) => <li key={it}><Check size={16} aria-hidden="true" />{it}</li>)}
            </ul>
            <button type="button" className="btn btn--ghost btn--block" onClick={baixarBeta}>
              <Download size={16} aria-hidden="true" /> Baixar o BETA
            </button>
          </Reveal>

          <Reveal as="article" className="ed ed--full" delay={0.1}>
            <span className="ed__ribbon">Recomendado</span>
            <Logo size="sm" />
            <p className="ed__tag">{editions.full.tag}</p>
            <h3>{editions.full.name}</h3>
            <p className="ed__price">
              {site.priceFrom && <s>{site.priceFrom}</s>}
              <b>{site.price || 'Pré-venda'}</b>
              <span>{site.price ? 'pagamento único' : 'preço revelado primeiro para a lista'}</span>
            </p>
            <ul className="checks">
              {editions.full.items.map((it) => <li key={it}><Check size={16} aria-hidden="true" />{it}</li>)}
            </ul>
            {buy ? (
              <a className="btn btn--volt btn--block btn--lg" href={buy} target="_blank" rel="noopener noreferrer">
                <ShoppingCart size={18} aria-hidden="true" /> Comprar agora
              </a>
            ) : (
              <button type="button" className="btn btn--volt btn--block btn--lg" onClick={() => scrollToId('lista')}>
                Entrar na pré-venda <ArrowRight size={18} aria-hidden="true" />
              </button>
            )}
            <p className="ed__safe"><Lock size={13} aria-hidden="true" /> {buy ? 'Pagamento processado com segurança pelo provedor de checkout.' : 'Sem cobrança agora: você só recebe o aviso de abertura.'}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
