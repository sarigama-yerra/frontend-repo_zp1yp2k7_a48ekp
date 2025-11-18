import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setStatus('')

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }),
      })
      if (!res.ok) throw new Error('Failed to send')
      setStatus('Thanks! I will get back to you soon.')
      e.target.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-24 border-t border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Contact</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Have a project in mind or just want to say hi? Drop a message.</p>
        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input required name="name" placeholder="Your name" className="w-full rounded-xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-slate-900/40 backdrop-blur px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500" />
            <input required name="email" type="email" placeholder="Your email" className="w-full rounded-xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-slate-900/40 backdrop-blur px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500" />
          </div>
          <textarea required name="message" rows="5" placeholder="Your message" className="w-full rounded-xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-slate-900/40 backdrop-blur px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500" />
          <div className="flex items-center gap-3">
            <button disabled={loading} className="inline-flex items-center rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-5 py-2.5 text-sm font-semibold disabled:opacity-60">
              {loading ? 'Sending...' : 'Send message'}
            </button>
            {status && <p className="text-sm text-slate-600 dark:text-slate-300">{status}</p>}
          </div>
        </form>
      </div>
    </section>
  )
}
