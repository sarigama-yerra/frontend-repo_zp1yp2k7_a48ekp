import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="py-20 sm:py-24 border-t border-black/5 dark:border-white/10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold">About</h2>
            <div className="mt-6 grid lg:grid-cols-2 gap-8">
              <p className="text-slate-600 dark:text-slate-300">I’m a software engineer focused on building functional, accessible and beautiful web apps. I enjoy working across the stack, from crafting micro‑interactions to designing resilient APIs.</p>
              <p className="text-slate-600 dark:text-slate-300">Outside of work I explore generative art, write about developer experience, and contribute to open source. I’m currently open to interesting opportunities and collaborations.</p>
            </div>
          </div>
        </section>
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-black/5 dark:border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-sm text-slate-600 dark:text-slate-400">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
