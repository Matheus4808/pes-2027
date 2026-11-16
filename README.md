# PES 2027 Revolution — site

Landing page de vendas do patch (React 19 + TypeScript + Vite + Framer Motion).

## Executar

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # produção em dist/
```

## Onde mexer

| O quê | Arquivo |
|---|---|
| Links de download/checkout, preço, e-mail, redes sociais | `.env` (local, fora do git; modelo em `.env.example`) e, no deploy, as Variables do GitHub |
| Números, vitrine de telas, recursos, roadmap, edições, FAQ | `src/data/patch.ts` |
| Lista de competições (filtro/busca) | `src/data/competitions.ts` |
| Prints e artes | `src/assets/img/*.webp` (vídeo da abertura em `public/media/intro.mp4`) |
| Visual (cores = paleta do jogo) | `src/App.css` (variáveis em `:root`) |

### Comportamento automático dos botões

- `VITE_BETA_URL` vazio → "Me avise quando liberar" (leva ao formulário). Preenchido → "Baixar agora".
- `VITE_CHECKOUT_URL` vazio → "Entrar na pré-venda". Preenchido → "Comprar agora" (abre o checkout).
- `VITE_PRICE` vazio → "Pré-venda". Preenchido → mostra o preço (e `VITE_PRICE_FROM` riscado).
- Formulário: envia POST JSON para `VITE_LEAD_ENDPOINT` (Edge Function, Formspree, webhook). Sem endpoint, abre o e-mail em `VITE_CONTACT_EMAIL`. Sem os dois, avisa que o canal não está configurado.

## Origem do conteúdo

Números e competições vêm dos arquivos do jogo (`content\advedit\comps.tsv`, `clubs.tsv`, `stadiums.tsv`) em 11/11/2026. As imagens são prints reais das telas do patch; fotos dos cards do menu são da Wikimedia Commons (créditos no rodapé).

## Publicar no GitHub Pages (com segurança)

1. Crie o repositório com o conteúdo desta pasta (`frontend`). O `.gitignore` deixa de fora `.env*` (menos o `.env.example`), chaves, `rclone.conf`, binários do patch, `node_modules`, `dist` e `.claude`.
2. **Settings → Pages → Source: GitHub Actions.**
3. **Settings → Secrets and variables → Actions → aba Variables**: crie `VITE_BETA_URL` e os outros `VITE_*` que for usar.
4. Dê push na `main`. O `.github/workflows/deploy.yml` faz o build e publica.

**Importante:** num site estático, tudo que é `VITE_*` fica visível no JavaScript publicado. Isso é normal para links, preço e a chave **anon** do Supabase. Segredos de verdade (chaves do R2, `service_role`, tokens, senhas) nunca entram aqui. O `vite.config.ts` derruba o build se um `VITE_*` tiver cara de segredo.

Antes do primeiro push, confira com `git status` que nenhum `.env` aparece. Também ligue **Settings → Code security → Secret scanning + Push protection**.
