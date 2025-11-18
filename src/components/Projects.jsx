const projects = [
  {
    title: 'Design System Starter',
    description: 'A headless, accessible component kit with tokens, theming and docs.',
    tags: ['React', 'Tailwind', 'Radix UI'],
    link: '#',
  },
  {
    title: 'Realtime Canvas',
    description: 'Collaborative whiteboard with CRDT syncing and multiplayer cursors.',
    tags: ['React', 'FastAPI', 'WebSockets'],
    link: '#',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Beautiful charts, filters, and exports powered by a clean API.',
    tags: ['Vite', 'MongoDB', 'ECharts'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24 border-t border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Projects</h2>
          <a href="#" className="text-sm text-sky-600 dark:text-sky-400 hover:underline">View all</a>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-2xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-slate-900/40 backdrop-blur p-6 hover:shadow-lg transition-shadow">
              <div className="h-40 rounded-lg bg-gradient-to-tr from-slate-200 to-white dark:from-slate-800 dark:to-slate-900 ring-1 ring-black/5 flex items-center justify-center">
                <span className="text-4xl">✨</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full border border-black/5 dark:border-white/10 text-slate-700 dark:text-slate-200">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
