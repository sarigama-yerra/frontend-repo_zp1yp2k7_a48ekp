const experiences = [
  {
    company: 'Acme Inc.',
    role: 'Senior Frontend Engineer',
    period: '2022 — Present',
    points: [
      'Led the build of a design system used across 6 product teams',
      'Drove a 30% performance improvement through profiling and code-splitting',
      'Mentored 4 engineers and introduced accessibility checks to CI',
    ],
  },
  {
    company: 'Globex',
    role: 'Full‑stack Engineer',
    period: '2020 — 2022',
    points: [
      'Shipped a real‑time collaboration tool used by 50k+ users',
      'Designed scalable APIs and optimized MongoDB queries',
      'Built internal tooling that cut deployment time by 60%',
    ],
  },
  {
    company: 'Startup Co.',
    role: 'Frontend Engineer',
    period: '2018 — 2020',
    points: [
      'Created interactive data visualizations in React',
      'Improved Lighthouse scores from 68 to 96+',
      'Worked closely with designers to elevate the brand',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24 border-t border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Experience</h2>
        <div className="mt-10 grid gap-6">
          {experiences.map((exp) => (
            <div key={exp.company} className="rounded-2xl border border-black/5 dark:border-white/10 bg-white/60 dark:bg-slate-900/40 backdrop-blur p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{exp.role} · {exp.company}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{exp.period}</p>
                </div>
              </div>
              <ul className="mt-4 list-disc list-inside space-y-2 text-slate-700 dark:text-slate-200">
                {exp.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
