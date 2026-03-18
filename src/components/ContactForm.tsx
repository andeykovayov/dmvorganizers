import { FormEvent, useEffect, useMemo, useState } from 'react'

type ContactFormProps = {
  endpoint: string
}

type FormState = {
  name: string
  email: string
  message: string
  company: string
}

const initialState: FormState = {
  name: '',
  email: '',
  message: '',
  company: '',
}

export function ContactForm({ endpoint }: ContactFormProps) {
  const [form, setForm] = useState<FormState>(initialState)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [feedback, setFeedback] = useState('')

  const endpointConfigured = useMemo(() => Boolean(endpoint?.trim()), [endpoint])

  useEffect(() => {
    if (status !== 'success' || !feedback) {
      return
    }

    const timeoutId = window.setTimeout(() => {
      setFeedback('')
      setStatus('idle')
    }, 5000)

    return () => window.clearTimeout(timeoutId)
  }, [status, feedback])

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error')
      setFeedback('Please fill in your name, email, and message.')
      return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(form.email)) {
      setStatus('error')
      setFeedback('Please enter a valid email address.')
      return
    }

    if (form.company.trim()) {
      setStatus('success')
      setFeedback('Thanks! Your message was received.')
      setForm(initialState)
      return
    }

    if (!endpointConfigured) {
      setStatus('error')
      setFeedback('Set NEXT_PUBLIC_CONTACT_FORM_ENDPOINT to enable form submissions.')
      return
    }

    try {
      setStatus('submitting')
      setFeedback('')

      const payload = new FormData()
      payload.append('name', form.name)
      payload.append('email', form.email)
      payload.append('message', form.message)
      payload.append('company', form.company)

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: payload,
      })

      if (!response.ok) {
        throw new Error('Message submission failed')
      }

      setStatus('success')
      setFeedback('Thanks for reaching out. We will get back to you soon.')
      setForm(initialState)
    } catch (error) {
      setStatus('error')
      setFeedback('Something went wrong while sending your message. Please call or email directly.')
    }
  }

  return (
    <form
      id='contact-form'
      onSubmit={onSubmit}
      className='rounded-3xl border border-line bg-white/90 p-6 shadow-card sm:p-8'
      noValidate
    >
      <div className='mb-4 grid gap-4 sm:grid-cols-2'>
        <label className='space-y-2 text-sm font-medium text-ink'>
          Name
          <input
            type='text'
            name='name'
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            className='w-full rounded-xl border border-line bg-white px-3 py-2 text-base text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20'
            required
          />
        </label>

        <label className='space-y-2 text-sm font-medium text-ink'>
          Email
          <input
            type='email'
            name='email'
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            className='w-full rounded-xl border border-line bg-white px-3 py-2 text-base text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20'
            required
          />
        </label>
      </div>

      <label className='space-y-2 text-sm font-medium text-ink'>
        Message
        <textarea
          name='message'
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          rows={5}
          className='w-full rounded-xl border border-line bg-white px-3 py-2 text-base text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20'
          required
        />
      </label>

      <label className='sr-only' htmlFor='company-field'>
        Company
      </label>
      <input
        id='company-field'
        name='company'
        value={form.company}
        onChange={(event) => setForm((prev) => ({ ...prev, company: event.target.value }))}
        className='hidden'
        autoComplete='off'
        tabIndex={-1}
      />

      <div className='mt-5 flex flex-wrap items-center gap-3'>
        <button
          type='submit'
          disabled={status === 'submitting'}
          className='inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-70'
        >
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>
        {!endpointConfigured && (
          <p className='text-sm text-muted'>
            Form endpoint missing. Set <code>NEXT_PUBLIC_CONTACT_FORM_ENDPOINT</code> in your env.
          </p>
        )}
      </div>

      {feedback && (
        <p
          className={`mt-4 rounded-xl px-3 py-2 text-sm ${
            status === 'success' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
          }`}
          role='status'
        >
          {feedback}
        </p>
      )}
    </form>
  )
}
