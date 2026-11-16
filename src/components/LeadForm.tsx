import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ArrowRight, CheckCircle2, Mail } from 'lucide-react'
import { site } from '../config/site'
import { SectionTitle } from './ui'

const interests = ['Quero ser avisado do BETA', 'Quero entrar na pré-venda', 'Suporte / dúvida', 'Parceria / divulgação'] as const

const schema = z.object({
  name: z.string().trim().min(2, 'Informe seu nome.'),
  email: z.email('Informe um e-mail válido.'),
  interest: z.enum(interests, { message: 'Escolha uma opção.' }),
  message: z.string().max(1500, 'Máximo de 1500 caracteres.').optional(),
  website: z.string().max(0).optional(), // honeypot anti-spam
})
type Lead = z.infer<typeof schema>

async function sendLead(data: Lead) {
  const payload = { name: data.name, email: data.email, interest: data.interest, message: data.message ?? '', source: 'site', at: new Date().toISOString() }
  if (site.leadEndpoint) {
    const res = await fetch(site.leadEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return 'sent' as const
  }
  if (site.contactEmail) {
    const body = `Nome: ${payload.name}\nE-mail: ${payload.email}\nInteresse: ${payload.interest}\n\n${payload.message}`
    window.location.href = `mailto:${site.contactEmail}?subject=${encodeURIComponent(`[PES 2027 Revolution] ${payload.interest}`)}&body=${encodeURIComponent(body)}`
    return 'mail' as const
  }
  throw new Error('no-channel')
}

export function LeadForm() {
  const [done, setDone] = useState<'sent' | 'mail' | null>(null)
  const [fail, setFail] = useState('')
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<Lead>({
    resolver: zodResolver(schema),
    defaultValues: { interest: interests[0] },
  })

  const submit = async (data: Lead) => {
    setFail('')
    if (data.website) return // bot
    try {
      setDone(await sendLead(data))
      reset()
    } catch (e) {
      setFail(e instanceof Error && e.message === 'no-channel'
        ? 'O canal de contato ainda não foi configurado. Tente novamente em breve.'
        : 'Não foi possível enviar agora. Tente novamente em alguns minutos.')
    }
  }

  return (
    <section id="lista" className="section lead-sec">
      <div className="container leadbox">
        <div>
          <SectionTitle kicker="Lista Revolution" lead="Seja avisado quando o BETA e a pré-venda abrirem, ou fale direto com a equipe. Sem spam: só o que importa do patch.">
            Faça parte <i>da revolução.</i>
          </SectionTitle>
          <ul className="lead__perks">
            <li><b>01</b>Link do BETA no dia em que sair</li>
            <li><b>02</b>Preço de pré-venda antes de todo mundo</li>
            <li><b>03</b>Novidades de cada atualização</li>
          </ul>
        </div>

        <form className="form" onSubmit={handleSubmit(submit)} noValidate>
          {done ? (
            <div className="form__ok" role="status">
              <CheckCircle2 size={38} aria-hidden="true" />
              <h3>{done === 'sent' ? 'Você está na lista!' : 'Quase lá!'}</h3>
              <p>{done === 'sent' ? 'Assim que tiver novidade, você recebe no seu e-mail.' : 'Abrimos o seu aplicativo de e-mail com a mensagem pronta. É só enviar.'}</p>
              <button type="button" className="btn btn--ghost" onClick={() => setDone(null)}>Enviar outra mensagem</button>
            </div>
          ) : (
            <>
              <label>
                <span>Nome</span>
                <input {...register('name')} autoComplete="name" placeholder="Seu nome" aria-invalid={!!errors.name} />
                {errors.name && <small role="alert">{errors.name.message}</small>}
              </label>
              <label>
                <span>E-mail</span>
                <input {...register('email')} type="email" autoComplete="email" placeholder="voce@email.com" aria-invalid={!!errors.email} />
                {errors.email && <small role="alert">{errors.email.message}</small>}
              </label>
              <fieldset className="form__wide">
                <legend>O que você quer?</legend>
                <div className="radios">
                  {interests.map((it) => (
                    <label key={it} className="radio">
                      <input type="radio" value={it} {...register('interest')} />
                      <span>{it}</span>
                    </label>
                  ))}
                </div>
                {errors.interest && <small role="alert">{errors.interest.message}</small>}
              </fieldset>
              <label className="form__wide">
                <span>Mensagem <em>(opcional)</em></span>
                <textarea rows={4} {...register('message')} placeholder="Conte o que você quer ver no patch, ou descreva sua dúvida." />
                {errors.message && <small role="alert">{errors.message.message}</small>}
              </label>
              <input className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" {...register('website')} />
              <div className="form__wide form__foot">
                <button className="btn btn--volt btn--lg" disabled={isSubmitting}>
                  {isSubmitting ? 'Enviando…' : 'Quero entrar na lista'} <ArrowRight size={18} aria-hidden="true" />
                </button>
                {site.contactEmail && <a className="form__mail" href={`mailto:${site.contactEmail}`}><Mail size={14} aria-hidden="true" />{site.contactEmail}</a>}
              </div>
              {fail && <p className="form__fail" role="alert">{fail}</p>}
            </>
          )}
        </form>
      </div>
    </section>
  )
}
