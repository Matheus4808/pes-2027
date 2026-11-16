/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BETA_URL?: string
  readonly VITE_CHECKOUT_URL?: string
  readonly VITE_PRICE?: string
  readonly VITE_PRICE_FROM?: string
  readonly VITE_LEAD_ENDPOINT?: string
  readonly VITE_CONTACT_EMAIL?: string
  readonly VITE_DISCORD_URL?: string
  readonly VITE_YOUTUBE_URL?: string
  readonly VITE_INSTAGRAM_URL?: string
  readonly VITE_TIKTOK_URL?: string
  readonly VITE_SUPABASE_URL?: string
  readonly VITE_SUPABASE_ANON_KEY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
