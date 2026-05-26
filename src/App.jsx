const featuredWorks = [
  {
    title: 'Night Garden Parade',
    subtitle: 'Picture Book Illustration • 2026',
    image:
      'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&w=1200&q=80',
    tone: 'from-[#F8DAC5]/80 to-[#E7C7E8]/40',
  },
  {
    title: 'Cloud Theater Club',
    subtitle: 'Editorial Cover Series • 2025',
    image:
      'https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&w=1200&q=80',
    tone: 'from-[#CBE4DD]/70 to-[#F9EEDC]/60',
  },
  {
    title: 'Little Atlas of Whales',
    subtitle: 'Character & World Design • 2026',
    image:
      'https://images.unsplash.com/photo-1460654156040-73f8655fdf0f?auto=format&fit=crop&w=1200&q=80',
    tone: 'from-[#BFD9E8]/70 to-[#EBD8F4]/45',
  },
]

const designProjects = [
  {
    name: 'Poppy & Pine',
    role: 'Brand Identity + Packaging System',
    blurb: 'Boutique toy brand crafted with tactile typography and hand-painted motifs.',
  },
  {
    name: 'Sunday Story Journal',
    role: 'Editorial Direction + Layout',
    blurb: 'Magazine-inspired spreads balancing playful illustration with refined grids.',
  },
  {
    name: 'Tiny Cinema Fest',
    role: 'Campaign Visual System',
    blurb: 'Poster family, social visuals, and title cards for children’s animation screenings.',
  },
]

const motionProjects = [
  { title: 'Storybook opener sequences', length: '00:18—00:32 loops' },
  { title: 'Character micro-interactions for web', length: 'SVG + 2D hybrid' },
  { title: 'Social motion postcards', length: 'Vertical + square edits' },
]

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink font-body">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-16 top-20 h-72 w-72 rounded-full bg-coral/45 blur-3xl animate-breathe" />
        <div className="absolute right-[-5%] top-[18%] h-80 w-80 rounded-full bg-seafoam/45 blur-3xl animate-floatSlow" />
        <div className="absolute bottom-[-6%] left-[25%] h-72 w-72 rounded-full bg-lilac/45 blur-3xl animate-drift" />
      </div>

      <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-10">
          <a href="#top" className="font-heading text-2xl tracking-tight">Lumi Atelier</a>
          <div className="hidden items-center gap-7 text-sm md:flex">
            {['Work', 'Design', 'Motion', 'About', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="relative transition hover:text-teal after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-teal after:transition-all hover:after:w-full">
                {item}
              </a>
            ))}
          </div>
          <a href="#contact" className="rounded-full border border-ink/15 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition hover:-translate-y-0.5 hover:border-teal hover:text-teal">
            Let’s Talk
          </a>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-5 pb-20 pt-8 md:px-10 md:pt-14">
        <section className="grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7 md:pt-8">
            <p className="inline-flex rounded-full border border-teal/25 bg-white/70 px-4 py-1 text-[11px] uppercase tracking-[0.26em] text-ink/70">
              Children’s Illustrator • Graphic Designer • Motion Artist
            </p>
            <h1 className="mt-5 max-w-3xl font-heading text-5xl leading-[0.95] text-ink md:text-8xl">
              Whimsical worlds,
              <span className="block text-teal">editorial clarity,</span>
              and cinematic motion.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/75 md:text-lg">
              I craft playful, polished visual narratives for books, brands, and studios—blending hand-drawn warmth with modern design systems and gentle movement.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition duration-300 hover:-translate-y-1 hover:bg-teal">
                Explore Portfolio
              </a>
              <a href="#motion" className="rounded-full border border-ink/20 bg-white/70 px-6 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-1 hover:border-teal hover:text-teal">
                View Motion Reel
              </a>
            </div>
          </div>

          <div className="relative md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-[2.2rem] border border-white/60 bg-white shadow-soft">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80"
                alt="Featured illustration collage"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-44 rounded-3xl border border-white/50 bg-white/80 p-4 shadow-soft backdrop-blur md:w-52">
              <p className="text-[10px] uppercase tracking-[0.24em] text-ink/55">Latest</p>
              <p className="mt-2 font-heading text-xl leading-tight">Spring Picture Book Series</p>
            </div>
          </div>
        </section>

        <section id="work" className="mt-24">
          <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
            <h2 className="font-heading text-4xl leading-tight md:text-6xl">Featured Illustration</h2>
            <p className="max-w-sm text-sm text-ink/65">A curated collection of narrative illustrations, character explorations, and exhibition-ready artworks.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-12">
            {featuredWorks.map((work, idx) => (
              <article
                key={work.title}
                className={`group relative overflow-hidden rounded-[2rem] border border-white/60 bg-white shadow-card transition duration-500 hover:-translate-y-1 ${
                  idx === 0 ? 'md:col-span-7' : 'md:col-span-5'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${work.tone} opacity-0 transition duration-500 group-hover:opacity-100`} />
                <div className="relative h-64 overflow-hidden md:h-80">
                  <img src={work.image} alt={work.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                </div>
                <div className="relative space-y-1 p-5 md:p-6">
                  <h3 className="font-heading text-2xl md:text-3xl">{work.title}</h3>
                  <p className="text-xs uppercase tracking-[0.16em] text-ink/60">{work.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="design" className="mt-24 grid gap-8 md:grid-cols-12 md:items-start">
          <div className="md:col-span-4">
            <h2 className="font-heading text-4xl leading-tight md:text-6xl">Graphic Design</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/70">Brand worlds and editorial systems built with playful texture, thoughtful hierarchy, and a studio-grade finish.</p>
          </div>
          <div className="grid gap-4 md:col-span-8">
            {designProjects.map((project) => (
              <article key={project.name} className="group rounded-[1.7rem] border border-ink/10 bg-white/85 p-6 shadow-soft transition duration-300 hover:border-teal/25 hover:bg-white hover:-translate-y-1">
                <p className="text-[10px] uppercase tracking-[0.2em] text-ink/55">Selected Project</p>
                <div className="mt-3 flex flex-col justify-between gap-3 md:flex-row md:items-end">
                  <div>
                    <h3 className="font-heading text-3xl">{project.name}</h3>
                    <p className="text-sm text-ink/70">{project.role}</p>
                  </div>
                  <span className="text-xs text-teal transition group-hover:translate-x-1">View Case →</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink/75">{project.blurb}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="motion" className="mt-24 grid gap-6 rounded-[2.3rem] border border-teal/20 bg-ink p-6 text-paper shadow-card md:grid-cols-12 md:p-10">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.25em] text-paper/65">Motion Design</p>
            <h2 className="mt-3 font-heading text-4xl leading-tight md:text-6xl">Subtle movement, strong storytelling rhythm.</h2>
            <p className="mt-4 text-paper/75">From title sequences to looping social assets, my motion work combines tactile illustration with elegant transitions and timing.</p>
          </div>
          <div className="md:col-span-7 md:pl-5">
            <div className="rounded-3xl border border-paper/15 bg-paper/10 p-5 backdrop-blur">
              <div className="mb-4 flex items-center justify-between border-b border-paper/15 pb-3">
                <p className="font-semibold">Reel Highlights</p>
                <span className="rounded-full border border-paper/20 px-3 py-1 text-xs">Now Playing</span>
              </div>
              <div className="space-y-3">
                {motionProjects.map((item) => (
                  <div key={item.title} className="group flex items-center justify-between rounded-2xl border border-paper/10 bg-paper/5 px-4 py-3 transition hover:bg-paper/15">
                    <p>{item.title}</p>
                    <span className="text-xs text-paper/70 group-hover:text-paper">{item.length}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mt-24 grid gap-8 md:grid-cols-12 md:items-center">
          <div className="order-2 md:order-1 md:col-span-5">
            <h2 className="font-heading text-4xl md:text-6xl">About</h2>
            <p className="mt-4 leading-relaxed text-ink/80">I’m a multidisciplinary visual storyteller partnering with publishers, lifestyle brands, and creative teams to craft charming, emotionally rich visual experiences. My process balances intuitive drawing, editorial precision, and motion-minded composition.</p>
          </div>
          <div className="order-1 md:order-2 md:col-span-7">
            <img
              className="h-[420px] w-full rounded-[2rem] object-cover shadow-card"
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1300&q=80"
              alt="Artist portrait placeholder"
            />
          </div>
        </section>

        <section id="contact" className="mt-24 rounded-[2rem] border border-ink/10 bg-white/80 p-6 shadow-soft md:p-10">
          <h2 className="font-heading text-4xl leading-tight md:text-6xl">Let’s make something unforgettable.</h2>
          <p className="mt-3 max-w-xl text-ink/70">Open for picture book projects, visual identity work, and motion collaborations.</p>
          <form className="mt-8 grid gap-4 md:grid-cols-2">
            <input className="rounded-2xl border border-ink/15 bg-white px-4 py-3 outline-none transition focus:border-teal" placeholder="Name" />
            <input className="rounded-2xl border border-ink/15 bg-white px-4 py-3 outline-none transition focus:border-teal" placeholder="Email" type="email" />
            <textarea className="min-h-36 rounded-2xl border border-ink/15 bg-white px-4 py-3 outline-none transition focus:border-teal md:col-span-2" placeholder="Tell me about your project" />
            <button className="rounded-full bg-teal px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-ink md:col-span-2 md:w-fit">Send Inquiry</button>
          </form>
        </section>
      </main>

      <footer className="border-t border-ink/10 bg-white/70 px-5 py-8 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-ink/75 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Lumi Atelier</p>
          <div className="flex flex-wrap gap-5">
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
