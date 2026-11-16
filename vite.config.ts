import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// Nomes que NUNCA podem virar VITE_* (tudo que é VITE_ vai para o JavaScript público do site).
const PROIBIDO = /(SECRET|PRIVATE|PASSWORD|PASSWD|SENHA|SERVICE_ROLE|ACCESS_KEY|TOKEN|CREDENTIAL|R2_|AWS_|STRIPE_SK|SK_LIVE)/i
// Formatos de chave privada conhecidos (caso alguém cole um segredo num nome "inocente").
const PARECE_SEGREDO = /(sk_live_|sk_test_|-----BEGIN|ghp_[A-Za-z0-9]{20}|github_pat_|AKIA[0-9A-Z]{16}|"role"\s*:\s*"service_role")/

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_')
  for (const [nome, valor] of Object.entries(env)) {
    let payload = ''
    // JWT do Supabase: a anon é pública, a service_role não pode ir para o site
    if (valor.split('.').length === 3) {
      try { payload = Buffer.from(valor.split('.')[1], 'base64url').toString() } catch { payload = '' }
    }
    if (PROIBIDO.test(nome) || PARECE_SEGREDO.test(valor) || PARECE_SEGREDO.test(payload)) {
      throw new Error(`[segurança] ${nome} parece um segredo e iria para o JavaScript público. Tire o prefixo VITE_ ou remova o valor.`)
    }
  }
  return {
    // GitHub Pages de projeto serve em /<repositorio>/. O workflow passa BASE_PATH; local fica '/'.
    base: process.env.BASE_PATH || '/',
    plugins: [react()],
    build: { sourcemap: false },
  }
})
