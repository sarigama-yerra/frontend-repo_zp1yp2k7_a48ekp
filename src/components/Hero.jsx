export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent dark:from-slate-800/50"></div>
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[72rem] h-[36rem] bg-gradient-to-tr from-sky-400/20 via-blue-500/10 to-violet-500/20 blur-3xl rounded-full"></div>
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 items-center gap-10">
          <div className="lg:col-span-7">
            <p className="text-sm font-medium text-sky-600 dark:text-sky-400">Software Engineer • Builder • Problem Solver</p>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
              I design and ship delightful, performant web experiences
            </h1>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
              Full‑stack developer specializing in modern web apps, design systems, and DX tooling. I care about craft, accessibility, and impact.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#projects" className="inline-flex items-center rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-5 py-2.5 text-sm font-semibold hover:opacity-90">View projects</a>
              <a href="#contact" className="inline-flex items-center rounded-full border border-slate-900/10 dark:border-white/20 px-5 py-2.5 text-sm font-semibold text-slate-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/10">Contact</a>
            </div>
            <div className="mt-8 flex items-center gap-4 text-slate-600 dark:text-slate-300">
              <a href="https://github.com" className="hover:underline">GitHub</a>
              <a href="https://linkedin.com" className="hover:underline">LinkedIn</a>
              <a href="mailto:you@example.com" className="hover:underline">Email</a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 bg-gradient-to-tr from-slate-200 to-white dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
              <span className="text-6xl">🔥</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
