const featuredWorks = [
  {
    title: 'Moonlight Forest Friends',
    type: 'Children’s Book Spread',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Whale of Wonder',
    type: 'Editorial Illustration',
    image: 'https://images.unsplash.com/photo-1460654156040-73f8655fdf0f?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Tiny Explorers Atlas',
    type: 'Character Design Set',
    image: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&w=900&q=80',
  },
]

const designProjects = [
  { name: 'Bloom Toy Co.', role: 'Brand Identity + Packaging', accent: 'from-peach to-lilac' },
  { name: 'Paper Kite Fest', role: 'Campaign Art Direction', accent: 'from-mint to-cream' },
  { name: 'Sunny Little Press', role: 'Magazine Layout System', accent: 'from-lilac to-peach' },
]

const motionProjects = [
  'Animated title sequences for kids series',
  'Looping social motion postcards',
  '2D hand-drawn explainer snippets',
]

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-ink font-body selection:bg-mint/60">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[10%] top-24 h-44 w-44 rounded-full bg-peach/50 blur-3xl animate-pulseSoft" />
        <div className="absolute right-[15%] top-44 h-56 w-56 rounded-full bg-mint/50 blur-3xl animate-float" />
        <div className="absolute bottom-16 left-1/3 h-40 w-40 rounded-full bg-lilac/50 blur-3xl animate-drift" />
      </div>

      <header className="mx-auto max-w-6xl px-6 py-6 md:px-10">
        <nav className="flex items-center justify-between rounded-full border border-teal/20 bg-white/70 px-5 py-3 backdrop-blur">
          <p className="font-heading text-xl font-semibold">Lumi Story Studio</p>
          <div className="hidden gap-6 text-sm md:flex">
            {['Work', 'Design', 'Motion', 'About', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-teal">
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl space-y-24 px-6 pb-20 md:px-10">
        <section className="grid items-center gap-12 md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6 animate-rise">
            <p className="inline-flex rounded-full border border-teal/30 bg-white/70 px-4 py-1 text-xs uppercase tracking-[0.2em]">Illustrator • Designer • Motion Artist</p>
            <h1 className="font-heading text-5xl leading-tight md:text-7xl">Playful stories, cinematic visuals, and joyful design for young imaginations.</h1>
            <p className="max-w-xl text-base text-ink/75 md:text-lg">A warm, editorial-style portfolio blending children’s illustration, graphic design systems, and gentle motion graphics to craft delightful visual worlds.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-ink">Start a Project</a>
              <a href="#work" className="rounded-full border border-ink/20 bg-white/70 px-6 py-3 text-sm font-semibold transition hover:border-teal hover:text-teal">View Gallery</a>
            </div>
          </div>
          <div className="relative h-[420px] overflow-hidden rounded-[2rem] border border-white/50 bg-white/70 shadow-glow">
            <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&w=1000&q=80" alt="Illustration mood board" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
          </div>
        </section>

        <section id="work" className="space-y-8">
          <h2 className="font-heading text-4xl md:text-5xl">Featured Illustration Works</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredWorks.map((work) => (
              <article key={work.title} className="group overflow-hidden rounded-3xl border border-white/60 bg-white shadow-card transition duration-500 hover:-translate-y-2 hover:shadow-glow">
                <div className="h-64 overflow-hidden">
                  <img src={work.image} alt={work.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                </div>
                <div className="space-y-2 p-5">
                  <h3 className="font-heading text-2xl">{work.title}</h3>
                  <p className="text-sm text-ink/70">{work.type}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="design" className="space-y-8">
          <h2 className="font-heading text-4xl md:text-5xl">Graphic Design Projects</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {designProjects.map((project) => (
              <article key={project.name} className={`rounded-3xl border border-teal/20 bg-gradient-to-br ${project.accent} p-6 shadow-card transition hover:-translate-y-1`}>
                <p className="text-xs uppercase tracking-widest text-ink/60">Mock Client</p>
                <h3 className="mt-3 font-heading text-3xl">{project.name}</h3>
                <p className="mt-2 text-sm text-ink/80">{project.role}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="motion" className="grid gap-8 rounded-[2rem] border border-teal/20 bg-white/80 p-8 shadow-card md:grid-cols-2">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl">Motion Design & Animation</h2>
            <p className="mt-4 text-ink/75">Subtle kinetic typography, character loops, and playful transitions inspired by independent animation studios.</p>
            <ul className="mt-6 space-y-3 text-sm">
              {motionProjects.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-teal" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-ink p-6 text-cream">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-teal/40 blur-2xl" />
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-peach/40 blur-2xl" />
            <div className="relative space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-cream/70">Now showing</p>
              <div className="rounded-2xl border border-cream/25 bg-cream/10 p-4 backdrop-blur animate-float">
                <p className="text-lg font-semibold">Storybook Reel — 00:28</p>
                <p className="text-sm text-cream/70">Placeholder player card with animated accents.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <img className="h-80 w-full rounded-3xl object-cover shadow-card" src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80" alt="Artist portrait placeholder" />
          <div>
            <h2 className="font-heading text-4xl md:text-5xl">About Me</h2>
            <p className="mt-5 leading-relaxed text-ink/80">I’m a multidisciplinary visual artist crafting whimsical illustration worlds, polished design systems, and emotive motion pieces. My practice is rooted in storytelling, tactile textures, and cinematic pacing—designed for brands, books, and playful campaigns.</p>
          </div>
        </section>

        <section id="contact" className="rounded-[2rem] border border-ink/10 bg-white/80 p-8 shadow-card">
          <h2 className="font-heading text-4xl md:text-5xl">Let’s create something magical.</h2>
          <p className="mt-3 text-ink/75">Available for children’s publishing, design collaborations, and motion commissions.</p>
          <form className="mt-7 grid gap-4 md:grid-cols-2">
            <input className="rounded-2xl border border-ink/15 bg-white px-4 py-3 outline-none transition focus:border-teal" placeholder="Name" />
            <input className="rounded-2xl border border-ink/15 bg-white px-4 py-3 outline-none transition focus:border-teal" placeholder="Email" type="email" />
            <textarea className="min-h-36 rounded-2xl border border-ink/15 bg-white px-4 py-3 outline-none transition focus:border-teal md:col-span-2" placeholder="Tell me about your project" />
            <button className="rounded-full bg-ink px-7 py-3 text-sm font-semibold text-cream transition hover:bg-teal md:col-span-2 md:w-fit">Send Message</button>
          </form>
        </section>
      </main>

      <footer className="border-t border-ink/10 bg-white/70 px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-ink/75 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Lumi Story Studio</p>
          <div className="flex gap-5">
            {['Instagram', 'Behance', 'Dribbble', 'Vimeo'].map((social) => (
              <a key={social} href="#" className="transition hover:text-teal">
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
