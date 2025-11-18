import { useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/70 dark:bg-slate-900/50 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-slate-900 dark:text-white">Your Name</a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">{l.label}</a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-4 py-2 text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Get in touch
          </a>
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-slate-700 dark:text-slate-200 hover:bg-black/5 dark:hover:bg-white/10"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-black/5 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 backdrop-blur">
          <div className="px-4 py-4 flex flex-col gap-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-2 py-2 rounded-md text-slate-700 dark:text-slate-200 hover:bg-black/5 dark:hover:bg-white/10">{l.label}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex justify-center rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-4 py-2 text-sm font-semibold hover:opacity-90">Get in touch</a>
          </div>
        </div>
      )}
    </header>
  )
}
