/**
 * Catálogo de competições do PES 2027 Revolution.
 * Gerado a partir do content\advedit\comps.tsv do jogo (185 registros), sem as entradas
 * técnicas (fases internas, grupos auxiliares, "Clubes sem liga", amistosos de pré-temporada).
 */
export type Region =
  | 'Brasil'
  | 'América do Sul'
  | 'Europa'
  | 'América do Norte'
  | 'Ásia e Oceania'
  | 'África'
  | 'Seleções'

export type Kind = 'Liga' | 'Copa' | 'Supercopa' | 'Continental' | 'Estadual' | 'Base' | 'Seleções'

export interface Competition {
  name: string
  country: string
  region: Region
  kind: Kind
  /** Destaque visual (competições que mais vendem o patch). */
  hot?: boolean
}

const c = (name: string, country: string, region: Region, kind: Kind, hot = false): Competition => ({ name, country, region, kind, hot })

export const competitions: Competition[] = [
  // ---------------- Brasil
  c('Brasileirão Série A', 'Brasil', 'Brasil', 'Liga', true),
  c('Brasileirão Série B', 'Brasil', 'Brasil', 'Liga', true),
  c('Brasileirão Série C', 'Brasil', 'Brasil', 'Liga', true),
  c('Brasileirão Série D', 'Brasil', 'Brasil', 'Liga', true),
  c('Copa do Brasil', 'Brasil', 'Brasil', 'Copa', true),
  c('Supercopa Rei', 'Brasil', 'Brasil', 'Supercopa'),
  c('Campeonato Paulista', 'São Paulo', 'Brasil', 'Estadual', true),
  c('Paulista Série A2', 'São Paulo', 'Brasil', 'Estadual'),
  c('Campeonato Carioca', 'Rio de Janeiro', 'Brasil', 'Estadual', true),
  c('Campeonato Mineiro', 'Minas Gerais', 'Brasil', 'Estadual', true),
  c('Campeonato Gaúcho', 'Rio Grande do Sul', 'Brasil', 'Estadual', true),
  c('Campeonato Paranaense', 'Paraná', 'Brasil', 'Estadual'),
  c('Campeonato Catarinense', 'Santa Catarina', 'Brasil', 'Estadual'),
  c('Campeonato Baiano', 'Bahia', 'Brasil', 'Estadual'),
  c('Campeonato Goiano', 'Goiás', 'Brasil', 'Estadual'),
  c('Campeonato Cearense', 'Ceará', 'Brasil', 'Estadual'),
  c('Campeonato Pernambucano', 'Pernambuco', 'Brasil', 'Estadual'),
  c('Campeonato Paraense', 'Pará', 'Brasil', 'Estadual'),
  c('Campeonato Mato-Grossense', 'Mato Grosso', 'Brasil', 'Estadual'),
  c('Brasileirão Sub-20', 'Brasil', 'Brasil', 'Base', true),
  c('Copa São Paulo de Futebol Júnior', 'Brasil', 'Brasil', 'Base', true),

  // ---------------- América do Sul
  c('CONMEBOL Libertadores', 'CONMEBOL', 'América do Sul', 'Continental', true),
  c('CONMEBOL Sul-Americana', 'CONMEBOL', 'América do Sul', 'Continental', true),
  c('Recopa Sul-Americana', 'CONMEBOL', 'América do Sul', 'Supercopa'),
  c('Liga Profesional de Fútbol', 'Argentina', 'América do Sul', 'Liga', true),
  c('Copa Argentina', 'Argentina', 'América do Sul', 'Copa'),
  c('Supercopa Argentina', 'Argentina', 'América do Sul', 'Supercopa'),
  c('Liga de Primera', 'Chile', 'América do Sul', 'Liga'),
  c('Copa Chile', 'Chile', 'América do Sul', 'Copa'),
  c('Liga BetPlay DIMAYOR', 'Colômbia', 'América do Sul', 'Liga'),
  c('Copa BetPlay', 'Colômbia', 'América do Sul', 'Copa'),
  c('Superliga BetPlay', 'Colômbia', 'América do Sul', 'Supercopa'),
  c('LigaPro Serie A', 'Equador', 'América do Sul', 'Liga'),
  c('Liga 1', 'Peru', 'América do Sul', 'Liga'),
  c('Primera División', 'Paraguai', 'América do Sul', 'Liga'),
  c('Primera División', 'Uruguai', 'América do Sul', 'Liga'),
  c('División Profesional', 'Bolívia', 'América do Sul', 'Liga'),
  c('Liga FUTVE', 'Venezuela', 'América do Sul', 'Liga'),

  // ---------------- Europa
  c('UEFA Champions League', 'UEFA', 'Europa', 'Continental', true),
  c('UEFA Europa League', 'UEFA', 'Europa', 'Continental', true),
  c('UEFA Super Cup', 'UEFA', 'Europa', 'Supercopa'),
  c('Premier League', 'Inglaterra', 'Europa', 'Liga', true),
  c('EFL Championship', 'Inglaterra', 'Europa', 'Liga'),
  c('League One', 'Inglaterra', 'Europa', 'Liga'),
  c('League Two', 'Inglaterra', 'Europa', 'Liga'),
  c('National League', 'Inglaterra', 'Europa', 'Liga'),
  c('FA Cup', 'Inglaterra', 'Europa', 'Copa'),
  c('Community Shield', 'Inglaterra', 'Europa', 'Supercopa'),
  c('LaLiga', 'Espanha', 'Europa', 'Liga', true),
  c('LaLiga 2', 'Espanha', 'Europa', 'Liga'),
  c('Primera Federación', 'Espanha', 'Europa', 'Liga'),
  c('Copa del Rey', 'Espanha', 'Europa', 'Copa'),
  c('Supercopa de España', 'Espanha', 'Europa', 'Supercopa'),
  c('Serie A', 'Itália', 'Europa', 'Liga', true),
  c('Serie B', 'Itália', 'Europa', 'Liga'),
  c('Coppa Italia', 'Itália', 'Europa', 'Copa'),
  c('Supercoppa Italiana', 'Itália', 'Europa', 'Supercopa'),
  c('Bundesliga', 'Alemanha', 'Europa', 'Liga', true),
  c('2. Bundesliga', 'Alemanha', 'Europa', 'Liga'),
  c('DFB-Pokal', 'Alemanha', 'Europa', 'Copa'),
  c('DFL-Supercup', 'Alemanha', 'Europa', 'Supercopa'),
  c('Ligue 1', 'França', 'Europa', 'Liga', true),
  c('Ligue 2', 'França', 'Europa', 'Liga'),
  c('Coupe de France', 'França', 'Europa', 'Copa'),
  c('Trophée des Champions', 'França', 'Europa', 'Supercopa'),
  c('Liga Portugal', 'Portugal', 'Europa', 'Liga', true),
  c('Liga Portugal 2', 'Portugal', 'Europa', 'Liga'),
  c('Taça de Portugal', 'Portugal', 'Europa', 'Copa'),
  c('Supertaça Cândido de Oliveira', 'Portugal', 'Europa', 'Supercopa'),
  c('Eredivisie', 'Holanda', 'Europa', 'Liga'),
  c('Keuken Kampioen Divisie', 'Holanda', 'Europa', 'Liga'),
  c('KNVB Cup', 'Holanda', 'Europa', 'Copa'),
  c('Johan Cruyff Shield', 'Holanda', 'Europa', 'Supercopa'),
  c('Jupiler Pro League', 'Bélgica', 'Europa', 'Liga'),
  c('Croky Cup', 'Bélgica', 'Europa', 'Copa'),
  c('Supercopa da Bélgica', 'Bélgica', 'Europa', 'Supercopa'),
  c('Scottish Premiership', 'Escócia', 'Europa', 'Liga'),
  c('Scottish Cup', 'Escócia', 'Europa', 'Copa'),
  c('Süper Lig', 'Turquia', 'Europa', 'Liga'),
  c('Copa da Turquia', 'Turquia', 'Europa', 'Copa'),
  c('Süper Kupa', 'Turquia', 'Europa', 'Supercopa'),
  c('Premier Liga', 'Rússia', 'Europa', 'Liga'),
  c('Copa da Rússia', 'Rússia', 'Europa', 'Copa'),
  c('Supercopa da Rússia', 'Rússia', 'Europa', 'Supercopa'),
  c('Super League', 'Grécia', 'Europa', 'Liga'),
  c('Copa da Grécia', 'Grécia', 'Europa', 'Copa'),
  c('Superliga', 'Dinamarca', 'Europa', 'Liga'),
  c('Copa da Dinamarca', 'Dinamarca', 'Europa', 'Copa'),
  c('Ekstraklasa', 'Polônia', 'Europa', 'Liga'),
  c('I Liga', 'Polônia', 'Europa', 'Liga'),
  c('Premier League Ucraniana', 'Ucrânia', 'Europa', 'Liga'),
  c('Copa da Ucrânia', 'Ucrânia', 'Europa', 'Copa'),
  c('Eliteserien', 'Noruega', 'Europa', 'Liga'),
  c('Allsvenskan', 'Suécia', 'Europa', 'Liga'),
  c('Liga I', 'Romênia', 'Europa', 'Liga'),
  c('Superliga', 'Sérvia', 'Europa', 'Liga'),
  c('PrvaLiga', 'Eslovênia', 'Europa', 'Liga'),
  c('Primeira Liga', 'Macedônia do Norte', 'Europa', 'Liga'),
  c("Ligat ha'Al", 'Israel', 'Europa', 'Liga'),
  c('MOL Cup', 'Tchéquia', 'Europa', 'Copa'),
  c('Magyar Kupa', 'Hungria', 'Europa', 'Copa'),

  // ---------------- América do Norte e Central
  c('MLS', 'Estados Unidos', 'América do Norte', 'Liga', true),
  c('US Open Cup', 'Estados Unidos', 'América do Norte', 'Copa'),
  c('USL Championship', 'Estados Unidos', 'América do Norte', 'Liga'),
  c('Liga MX', 'México', 'América do Norte', 'Liga', true),
  c('CONCACAF Champions Cup', 'CONCACAF', 'América do Norte', 'Continental'),
  c('Liga FPD', 'Costa Rica', 'América do Norte', 'Liga'),
  c('Liga Nacional', 'Honduras', 'América do Norte', 'Liga'),
  c('Liga Nacional', 'Guatemala', 'América do Norte', 'Liga'),
  c('Primera División', 'El Salvador', 'América do Norte', 'Liga'),
  c('LPF', 'Panamá', 'América do Norte', 'Liga'),
  c('Liga Primera', 'Nicarágua', 'América do Norte', 'Liga'),
  c('Jamaica Premier League', 'Jamaica', 'América do Norte', 'Liga'),
  c('Liga Dominicana', 'Rep. Dominicana', 'América do Norte', 'Liga'),

  // ---------------- Ásia e Oceania
  c('AFC Champions League', 'AFC', 'Ásia e Oceania', 'Continental'),
  c('AFC Champions League Two', 'AFC', 'Ásia e Oceania', 'Continental'),
  c('AFC Challenge League', 'AFC', 'Ásia e Oceania', 'Continental'),
  c('Saudi Pro League', 'Arábia Saudita', 'Ásia e Oceania', 'Liga', true),
  c("King's Cup", 'Arábia Saudita', 'Ásia e Oceania', 'Copa'),
  c('Supercopa Saudita', 'Arábia Saudita', 'Ásia e Oceania', 'Supercopa'),
  c('J1 League', 'Japão', 'Ásia e Oceania', 'Liga'),
  c("Emperor's Cup", 'Japão', 'Ásia e Oceania', 'Copa'),
  c('Supercopa do Japão', 'Japão', 'Ásia e Oceania', 'Supercopa'),
  c('K League 1', 'Coreia do Sul', 'Ásia e Oceania', 'Liga'),
  c('Chinese Super League', 'China', 'Ásia e Oceania', 'Liga'),
  c('Copa da China', 'China', 'Ásia e Oceania', 'Copa'),
  c('Supercopa da China', 'China', 'Ásia e Oceania', 'Supercopa'),
  c('Qatar Stars League', 'Catar', 'Ásia e Oceania', 'Liga'),
  c('UAE Pro League', 'Emirados Árabes', 'Ásia e Oceania', 'Liga'),
  c('Persian Gulf Pro League', 'Irã', 'Ásia e Oceania', 'Liga'),
  c('Thai League 1', 'Tailândia', 'Ásia e Oceania', 'Liga'),
  c('Northern League', 'Nova Zelândia', 'Ásia e Oceania', 'Liga'),
  c('OFC Champions League', 'OFC', 'Ásia e Oceania', 'Continental'),

  // ---------------- África
  c('CAF Champions League', 'CAF', 'África', 'Continental'),
  c('CAF Confederation Cup', 'CAF', 'África', 'Continental'),
  c('CAF Super Cup', 'CAF', 'África', 'Supercopa'),
  c('Botola Pro', 'Marrocos', 'África', 'Liga'),
  c('Egyptian Premier League', 'Egito', 'África', 'Liga'),
  c('Premiership', 'África do Sul', 'África', 'Liga'),
  c('NPFL', 'Nigéria', 'África', 'Liga'),
  c('Ligue 1', 'Senegal', 'África', 'Liga'),
  c('Elite One', 'Camarões', 'África', 'Liga'),
  c('Kenyan Premier League', 'Quênia', 'África', 'Liga'),

  // ---------------- Seleções e mundiais
  c('Copa do Mundo', 'FIFA', 'Seleções', 'Seleções', true),
  c('Mundial de Clubes', 'FIFA', 'Seleções', 'Continental', true),
  c('Eliminatórias — Europa', 'UEFA', 'Seleções', 'Seleções'),
  c('Eliminatórias — América do Sul', 'CONMEBOL', 'Seleções', 'Seleções'),
  c('Eliminatórias — CONCACAF', 'CONCACAF', 'Seleções', 'Seleções'),
  c('Eliminatórias — Ásia/Oceania', 'AFC/OFC', 'Seleções', 'Seleções'),
  c('Eliminatórias — África', 'CAF', 'Seleções', 'Seleções'),
  c('Copa América', 'CONMEBOL', 'Seleções', 'Seleções', true),
  c('UEFA EURO', 'UEFA', 'Seleções', 'Seleções', true),
  c('Copa da Ásia', 'AFC', 'Seleções', 'Seleções'),
  c('Copa Africana de Nações', 'CAF', 'Seleções', 'Seleções'),
]

export const regions: Region[] = ['Brasil', 'América do Sul', 'Europa', 'América do Norte', 'Ásia e Oceania', 'África', 'Seleções']
