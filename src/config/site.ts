/**
 * Configuração comercial do site.
 * Tudo que é link, preço ou canal fica aqui: preencha e o site se ajusta sozinho.
 * Valores vazios escondem o item (ou trocam o botão por "lista de espera").
 * Os valores vêm do .env (local, fora do git) ou das Variables do GitHub Actions no deploy.
 * Atenção: tudo que é VITE_* fica público no JavaScript do site. Nunca coloque segredos aqui.
 */
const env = import.meta.env

export const site = {
  name: 'PES 2027 Revolution',
  version: 'BETA 1',

  /** Link do launcher do BETA (o patch é baixado pelo próprio launcher). Vazio = botão vira "Avisar quando sair". */
  betaUrl: env.VITE_BETA_URL ?? '',
  /** Tamanho do patch baixado pelo launcher (3 volumes .7z no R2). */
  betaSize: '≈ 5,5 GB',
  /** Tamanho do launcher (o arquivo que o site baixa). */
  launcherSize: '3 MB',

  /** Link do checkout (ASAAS, Mercado Pago, Hotmart...). Vazio = botão vira "Entrar na pré-venda". */
  checkoutUrl: env.VITE_CHECKOUT_URL ?? '',
  /** Preço exibido, ex.: 'R$ 49,90'. Vazio = "Preço a anunciar". */
  price: env.VITE_PRICE ?? '',
  /** Preço "de", ex.: 'R$ 79,90' (opcional, aparece riscado). */
  priceFrom: env.VITE_PRICE_FROM ?? '',

  /**
   * Endpoint que recebe o formulário de lista/contato (POST JSON).
   * Ex.: Supabase Edge Function, Formspree, Make/Zapier webhook.
   */
  leadEndpoint: env.VITE_LEAD_ENDPOINT ?? '',
  /** E-mail de contato. Usado como alternativa (mailto) quando não há endpoint. */
  contactEmail: env.VITE_CONTACT_EMAIL ?? '',

  social: {
    discord: env.VITE_DISCORD_URL ?? '',
    youtube: env.VITE_YOUTUBE_URL ?? '',
    instagram: env.VITE_INSTAGRAM_URL ?? '',
    tiktok: env.VITE_TIKTOK_URL ?? '',
  },
} as const

export type SocialKey = keyof typeof site.social
