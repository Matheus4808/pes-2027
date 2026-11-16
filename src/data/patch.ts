import menuPrincipal from '../assets/img/menu-principal.webp'
import menuMl from '../assets/img/menu-ml.webp'
import menuSub from '../assets/img/menu-sub.webp'
import escolhaClube from '../assets/img/escolha-clube.webp'
import escolhaPais from '../assets/img/escolha-pais.webp'
import matchday from '../assets/img/matchday.webp'
import classSerieA from '../assets/img/class-serie-a.webp'
import classLibertadores from '../assets/img/class-libertadores.webp'
import classPaulista from '../assets/img/class-paulista.webp'
import aovivo70 from '../assets/img/aovivo-70min.webp'
import aovivoPausa from '../assets/img/aovivo-pausa.webp'
import resumo from '../assets/img/resumo.webp'
import heroTitle from '../assets/img/hero-title.webp'
import { competitions } from './competitions'

/* ------------------------------------------------------------------ números
   Medidos nos arquivos do jogo (content\advedit\*.tsv) em 11/11/2026. */
const compCount = Math.floor(competitions.length / 10) * 10

export const stats = [
  { value: compCount, suffix: '+', label: 'Competições', note: 'ligas, copas, supercopas e torneios de seleções' },
  { value: 1900, suffix: '+', label: 'Times', note: 'clubes e seleções no banco de dados' },
  { value: 57, suffix: '', label: 'Países', note: 'com campeonato nacional próprio' },
  { value: 690, suffix: '+', label: 'Estádios', note: 'catalogados no servidor de estádios' },
]

/* ------------------------------------------------------------------ vitrine (prints reais do jogo) */
export interface Shot {
  src: string
  alt: string
  caption: string
}
export interface ShowcaseTab {
  id: string
  label: string
  kicker: string
  title: string
  text: string
  bullets: string[]
  shots: Shot[]
}

export const showcase: ShowcaseTab[] = [
  {
    id: 'menu',
    label: 'Menu principal',
    kicker: 'Interface REVOLUTION',
    title: 'Um jogo novo desde o primeiro botão.',
    text: 'O menu nativo foi redesenhado do zero: cards com fotografia, navegação em acordeão, submenus em lista e uma paleta própria em violeta e volt.',
    bullets: ['Tela de título e abertura em vídeo próprias', 'Menu em cards com descrição de cada modo', 'Pop-ups e diálogos com o mesmo visual'],
    shots: [
      { src: menuPrincipal, alt: 'Menu principal do PES 2027 Revolution com o card Entre em Campo em destaque', caption: 'Menu principal — Entre em Campo' },
      { src: menuMl, alt: 'Card da Master League em destaque no menu principal', caption: 'Menu principal — Master League' },
      { src: menuSub, alt: 'Submenu Entre em Campo com amistoso, cooperativo, liga e copa', caption: 'Submenu em lista' },
      { src: heroTitle, alt: 'Tela de título do PES 2027 Revolution', caption: 'Tela de título' },
    ],
  },
  {
    id: 'clube',
    label: 'Escolha seu clube',
    kicker: 'Seleção de time',
    title: 'País, liga e clube — em três passos.',
    text: 'Esqueça a lista cinza do jogo base. A seleção de time virou uma vitrine com bandeiras, ligas com escudos e a ficha completa do clube antes de confirmar.',
    bullets: ['Geral, reputação, estádio e sigla', 'Força de ataque, meio e defesa', 'Todos os escudos da liga numa fileira'],
    shots: [
      { src: escolhaClube, alt: 'Tela Escolha seu clube mostrando a ficha do EC Vitória', caption: 'Ficha do clube' },
      { src: escolhaPais, alt: 'Seleção de país e liga com o Brasil em destaque', caption: 'País e liga' },
      { src: matchday, alt: 'Tela Matchday com confronto entre dois clubes', caption: 'Matchday — Amistoso' },
    ],
  },
  {
    id: 'classificacao',
    label: 'Classificação',
    kicker: 'Tabelas com identidade',
    title: 'Cada competição com a sua cara.',
    text: 'Classificação, pós-rodada e pré-partida desenhadas para cada torneio: as cores do Brasileirão, o dourado da Libertadores, o azul do Paulistão, faixas de G4, Z4 e acesso.',
    bullets: ['Brasileirão A, B, C e D', 'Libertadores, Sul-Americana e Recopa', 'Estaduais, Sub-20 e Copinha'],
    shots: [
      { src: classSerieA, alt: 'Tabela de classificação do Brasileirão Série A', caption: 'Brasileirão Série A' },
      { src: classLibertadores, alt: 'Classificação de grupo da Libertadores', caption: 'Libertadores — fase de grupos' },
      { src: classPaulista, alt: 'Classificação do Campeonato Paulista', caption: 'Campeonato Paulista' },
    ],
  },
  {
    id: 'aovivo',
    label: 'Rodada ao Vivo',
    kicker: 'Durante a partida',
    title: 'A rodada inteira acontecendo junto com o seu jogo.',
    text: 'Enquanto você joga, os outros jogos da rodada correm em tempo real. Gols aparecem na tela, a tabela se move ao vivo e, na pausa, você confere tudo.',
    bullets: ['Aviso de gol dos outros jogos', 'Tabela ao vivo com a posição de cada time', 'Painel completo da rodada na pausa'],
    shots: [
      { src: aovivo70, alt: 'Partida com a tabela ao vivo exibida aos 70 minutos', caption: 'Tabela ao vivo aos 70 minutos' },
      { src: aovivoPausa, alt: 'Painel da rodada da Libertadores no menu de pausa', caption: 'Pausa — painel da rodada' },
    ],
  },
  {
    id: 'resumo',
    label: 'Resumo da Temporada',
    kicker: 'Em testes',
    title: 'Quem foi campeão, quem subiu, quem caiu.',
    text: 'Ao fim de cada temporada da Master League, um painel resume o futebol do país: campeões, acessos, rebaixamentos, copas e vagas continentais.',
    bullets: ['Campeões de todas as divisões', 'Acesso e rebaixamento', 'Destaques e números da temporada'],
    shots: [{ src: resumo, alt: 'Painel Resumo da Temporada com campeões do Brasil', caption: 'Resumo da Temporada — Brasil' }],
  },
]

/* ------------------------------------------------------------------ Brasil */
export const brazil = {
  national: [
    { name: 'Série A', clubs: '20 clubes', note: 'Pontos corridos, Libertadores e Z4' },
    { name: 'Série B', clubs: '20 clubes', note: 'Acesso direto + play-off' },
    { name: 'Série C', clubs: '20 clubes', note: 'Primeira fase + fase final' },
    { name: 'Série D', clubs: '96 clubes', note: 'Grupos regionais + mata-mata' },
  ],
  cups: ['Copa do Brasil', 'Supercopa Rei', 'Libertadores', 'Sul-Americana', 'Recopa'],
  states: [
    'Paulista', 'Paulista A2', 'Carioca', 'Mineiro', 'Gaúcho', 'Paranaense', 'Catarinense',
    'Baiano', 'Goiano', 'Cearense', 'Pernambucano', 'Paraense', 'Mato-Grossense',
  ],
}

/* ------------------------------------------------------------------ recursos */
export type Status = 'NA BETA' | 'EM TESTES'
export interface Feature {
  icon: 'layout' | 'shield' | 'radio' | 'table' | 'sprout' | 'video' | 'calendar' | 'mic' | 'cpu' | 'trophy' | 'news' | 'swords'
  title: string
  text: string
  status: Status
}

export const features: Feature[] = [
  { icon: 'layout', title: 'Interface REVOLUTION', text: 'Tema nativo completo: título, abertura em vídeo, menu em cards, listas, pop-ups e cores do texto.', status: 'NA BETA' },
  { icon: 'shield', title: 'Escolha seu clube', text: 'País → Liga → Clube com ficha do time, estrelas, estádio e força por setor. Vale para ML, Rumo ao Estrelato e amistosos.', status: 'NA BETA' },
  { icon: 'swords', title: 'Matchday', text: 'Tela de confronto para Amistoso e Contra com os dois clubes lado a lado.', status: 'NA BETA' },
  { icon: 'radio', title: 'Rodada ao Vivo', text: 'Gols dos outros jogos em tempo real, tabela que se mexe durante a partida e painel na pausa.', status: 'NA BETA' },
  { icon: 'table', title: 'Classificação com identidade', text: 'Tabela, pós-rodada e pré-partida com o visual de cada competição.', status: 'NA BETA' },
  { icon: 'calendar', title: 'Calendário brasileiro', text: 'Temporada no ritmo do Brasil: estaduais no começo do ano, regulamentos reais e fases finais de verdade.', status: 'NA BETA' },
  { icon: 'sprout', title: 'Tela SUB-20', text: 'Elencos de base ligados aos clubes profissionais, com Brasileirão Sub-20 e Copinha.', status: 'NA BETA' },
  { icon: 'video', title: 'VAR', text: 'Revisão de lances com cenas próprias de falta durante a partida.', status: 'NA BETA' },
  { icon: 'mic', title: 'Imersão de transmissão', text: 'Multinarrador, placares por competição, câmeras de TV, cânticos, gol songs, clima e público dinâmicos.', status: 'NA BETA' },
  { icon: 'cpu', title: 'Motor de competições', text: 'Limites do jogo ampliados: 600 regulamentos e 250 slots de competição para caber o futebol inteiro.', status: 'NA BETA' },
  { icon: 'trophy', title: 'ML Hub + calendário', text: 'Novo menu da Master League com calendário interativo e "simular até a data".', status: 'EM TESTES' },
  { icon: 'news', title: 'Resumo e notícias', text: 'Resumo da temporada com campeões e acessos, e notícias da carreira.', status: 'EM TESTES' },
]

/* ------------------------------------------------------------------ roadmap */
export const roadmap = [
  { phase: '01', title: 'BETA 1', status: 'AGORA', active: true, text: 'Competições, clubes e elencos, interface REVOLUTION, Rodada ao Vivo, Classificação, Sub-20 e VAR.' },
  { phase: '02', title: 'BETA 2', status: 'EM TESTES', active: false, text: 'ML Hub com calendário interativo, Resumo da Temporada e notícias da carreira.' },
  { phase: '03', title: 'Pré-venda', status: 'EM BREVE', active: false, text: 'Abertura da lista de compra com condição especial para quem testou o BETA.' },
  { phase: '04', title: 'Edição Revolution', status: 'LANÇAMENTO', active: false, text: 'Versão completa com todos os módulos liberados e atualizações da temporada.' },
]

/* ------------------------------------------------------------------ edições (o que cada uma entrega) */
export const editions = {
  beta: {
    name: 'BETA',
    tag: 'Gratuito',
    items: [
      'Todas as competições, clubes e elencos',
      'Interface REVOLUTION completa',
      'Escolha seu clube e Matchday',
      'Rodada ao Vivo e Classificação',
      'Tela SUB-20, Copinha e VAR',
      'Launcher: instala, atualiza e abre o jogo',
    ],
  },
  full: {
    name: 'Edição Revolution',
    tag: 'Completa',
    items: [
      'Tudo do BETA',
      'ML Hub com calendário interativo',
      'Resumo da Temporada e notícias',
      'Atualizações de elencos da temporada',
      'Novos módulos conforme forem liberados',
      'Suporte direto da equipe',
    ],
  },
}

/* ------------------------------------------------------------------ requisitos e instalação */
export const requirements = [
  { label: 'Jogo base', value: 'eFootball PES 2021 (PC)' },
  { label: 'Patch base', value: 'Football Life 2026 instalado' },
  { label: 'Download', value: '≈ 5,5 GB' },
  { label: 'Instalação', value: 'Pelo launcher, com backup e desinstalação' },
]

export const installSteps = [
  { n: '01', title: 'Baixe o launcher', text: 'Um arquivo leve para Windows. O patch vem pelo próprio launcher, direto do nosso servidor.' },
  { n: '02', title: 'Escolha a pasta do Football Life 2026', text: 'O launcher encontra o SiderAddons, baixa o patch, confere cada arquivo e instala. Tudo que for substituído ganha backup.' },
  { n: '03', title: 'Jogue pela aba Play', text: 'Sider e jogo abrem juntos. Em Configurações você abre o Settings do jogo, e Desinstalar Patch volta tudo ao original.' },
]

/* ------------------------------------------------------------------ FAQ */
export const faq = [
  { q: 'O que é o PES 2027 Revolution?', a: 'É um patch brasileiro para o PES 2021 que transforma o jogo numa nova edição: interface própria, futebol brasileiro completo (Séries A a D, estaduais, base), competições do mundo inteiro e módulos exclusivos como Rodada ao Vivo e Classificação com identidade.' },
  { q: 'O BETA é gratuito?', a: 'Sim. O BETA é a forma de você jogar antes e ajudar a gente a lapidar o patch. A Edição Revolution completa será vendida na pré-venda, com condição especial para quem testou.' },
  { q: 'O que eu preciso ter instalado?', a: 'eFootball PES 2021 no PC com o Football Life 2026 instalado e atualizado. O Revolution é instalado por cima pelo launcher, sem substituir o seu Football Life.' },
  { q: 'Vai bagunçar o meu jogo?', a: 'Não. Antes de instalar, o launcher guarda uma cópia de cada arquivo do jogo que vai ser substituído. Na aba Desinstalar Patch tudo volta ao original com um clique.' },
  { q: 'Funciona na Master League em andamento?', a: 'As telas novas funcionam em qualquer carreira. Para aproveitar o calendário brasileiro, os estaduais e as novas divisões, o ideal é começar uma Master League nova.' },
  { q: 'Tem Série C, Série D e estaduais de verdade?', a: 'Tem. Série C com fase final, Série D com 96 clubes em grupos regionais, 13 estaduais (incluindo Paulista A2), Brasileirão Sub-20 e Copinha com 128 clubes.' },
  { q: 'Quando sai a versão completa?', a: 'A data será anunciada junto com a pré-venda. Entre na lista para ser avisado primeiro e garantir a condição de lançamento.' },
]
