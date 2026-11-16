import { brazil } from '../data/patch'
import { Reveal, SectionTitle } from './ui'
import cardJogar from '../assets/img/card-jogar.webp'

export function Brazil() {
  return (
    <section id="brasil" className="section brazil">
      <img className="brazil__bg" src={cardJogar} alt="" aria-hidden="true" loading="lazy" />
      <div className="container">
        <SectionTitle kicker="Futebol brasileiro completo" lead="A pirâmide inteira, com regulamento, fases finais e calendário de verdade. Do Maracanã ao interior — tudo jogável na Master League.">
          O Brasil inteiro, <i>da Série A à Série D.</i>
        </SectionTitle>

        <div className="pyramid">
          {brazil.national.map((d, i) => (
            <Reveal key={d.name} className="pyramid__tier" delay={i * 0.08}>
              <span className="pyramid__rank">{String.fromCharCode(65 + i)}</span>
              <div>
                <h3>Brasileirão {d.name}</h3>
                <p>{d.note}</p>
              </div>
              <b>{d.clubs}</b>
            </Reveal>
          ))}
        </div>

        <div className="brazil__grid">
          <Reveal className="bcard bcard--states">
            <p className="kicker">13 estaduais</p>
            <h3>O começo de temporada que o brasileiro conhece.</h3>
            <ul className="chips">
              {brazil.states.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </Reveal>
          <Reveal className="bcard" delay={0.08}>
            <p className="kicker">Copas e continente</p>
            <h3>Mata-mata, supercopa e Libertadores.</h3>
            <ul className="chips">
              {brazil.cups.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </Reveal>
          <Reveal className="bcard bcard--base" delay={0.16}>
            <p className="kicker">Categorias de base</p>
            <h3>Sub-20 e Copinha com elencos próprios.</h3>
            <div className="base-nums">
              <div><b>20</b><span>clubes no Brasileirão Sub-20</span></div>
              <div><b>128</b><span>clubes na Copa São Paulo</span></div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
