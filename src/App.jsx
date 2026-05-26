const heroTags = ['Children’s Illustration', 'Graphic Design', 'Motion Direction']

const featuredProjects = [
  {
    title: 'Moonlight Library Parade',
    discipline: 'Picture Book Spread Series',
    year: '2026',
    palette: 'Peach / Plum / Sky',
    image:
      'https://images.unsplash.com/photo-1461975670840-9d6aefdea91e?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Little Makers Club',
    discipline: 'Identity + Poster Family',
    year: '2025',
    palette: 'Moss / Butter / Ink',
    image:
      'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Cloud Train Chronicles',
    discipline: 'Animated Story Teasers',
    year: '2026',
    palette: 'Teal / Coral / Smoke',
    image:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1400&q=80',
  },
]

const projectCards = [
  {
    name: 'Tiny Giants Annual',
    category: 'Editorial Illustration',
    summary: 'A bright, page-turning visual language for a kids culture annual with rich pacing and playful type locks.',
  },
  {
    name: 'Willow Toyhouse',
    category: 'Packaging + Illustration',
    summary: 'Shelf-ready packaging system combining hand-drawn characters, bold labels, and motion-ready iconography.',
  },
  {
    name: 'Story Hour Studio',
    category: 'Brand + Motion Toolkit',
    summary: 'Brand refresh with flexible compositional rules, social templates, and short animated idents.',
  },
]

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f0e8] text-[#1f2b2a] font-body">
      <header className="sticky top-0 z-50 border-b border-[#1f2b2a]/10 bg-[#f5f0e8]/85 backdrop-blur-lg">
        <nav className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-5 py-4 md:px-10">
          <a href="#top" className="font-heading text-[1.55rem] leading-none tracking-tight">Mira Finch Studio</a>
          <div className="hidden items-center gap-7 text-sm md:flex">
            {['Work', 'Projects', 'Motion', 'About', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-[#a64c3a]">
                {item}
              </a>
            ))}
          </div>
          <a href="#contact" className="rounded-full bg-[#1f2b2a] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#f5f0e8] transition hover:bg-[#a64c3a]">
            Book a Project
          </a>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-[1200px] px-5 pb-20 pt-10 md:px-10 md:pt-16">
        <section className="grid items-start gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.22em] text-[#1f2b2a]/60">Illustrator • Designer • Motion Artist</p>
            <h1 className="mt-4 max-w-3xl font-heading text-[3rem] leading-[0.95] md:text-[6.2rem]">
              Story-driven visuals
              <span className="block text-[#a64c3a]">for curious young minds.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#1f2b2a]/75 md:text-lg">
              I build imaginative picture-book worlds, personality-rich brand systems, and gentle motion moments that make stories feel alive.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {heroTags.map((tag) => (
                <span key={tag} className="rounded-full border border-[#1f2b2a]/20 px-4 py-2 text-xs uppercase tracking-[0.14em]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-5 md:pt-4">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#1f2b2a]/10 bg-white p-3 shadow-[0_20px_60px_-35px_rgba(0,0,0,0.35)]">
              <img
                src="https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1300&q=80"
                alt="Illustrated desk and sketchbook"
                className="h-[410px] w-full rounded-[1.5rem] object-cover"
              />
              <div className="absolute bottom-8 left-8 rounded-2xl bg-[#f5f0e8]/90 px-4 py-3 backdrop-blur">
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#1f2b2a]/60">Currently</p>
                <p className="font-semibold">Authoring a whimsical forest chapter book</p>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="mt-24">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="font-heading text-4xl md:text-6xl">Selected Work</h2>
            <p className="max-w-sm text-sm text-[#1f2b2a]/65">A portfolio built with wide spacing, clear rhythm, and tactile image-first storytelling.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-12">
            {featuredProjects.map((project, index) => (
              <article key={project.title} className={`group overflow-hidden rounded-[1.8rem] border border-[#1f2b2a]/10 bg-white ${index === 0 ? 'md:col-span-7' : 'md:col-span-5'}`}>
                <div className="overflow-hidden">
                  <img src={project.image} alt={project.title} className="h-64 w-full object-cover transition duration-700 group-hover:scale-105 md:h-80" />
                </div>
                <div className="space-y-1 p-5">
                  <h3 className="font-heading text-2xl md:text-3xl">{project.title}</h3>
                  <p className="text-xs uppercase tracking-[0.16em] text-[#1f2b2a]/60">{project.discipline} • {project.year}</p>
                  <p className="text-sm text-[#a64c3a]">{project.palette}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="mt-24 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="font-heading text-4xl md:text-6xl">Design Projects</h2>
          </div>
          <div className="grid gap-4 md:col-span-8">
            {projectCards.map((item) => (
              <article key={item.name} className="rounded-[1.5rem] border border-[#1f2b2a]/10 bg-[#fffdf9] p-6 transition hover:-translate-y-1 hover:border-[#a64c3a]/30">
                <p className="text-xs uppercase tracking-[0.16em] text-[#1f2b2a]/55">{item.category}</p>
                <h3 className="mt-2 font-heading text-3xl">{item.name}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#1f2b2a]/75">{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="motion" className="mt-24 rounded-[2rem] bg-[#1f2b2a] p-8 text-[#f5f0e8] md:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-[#f5f0e8]/65">Motion Reel</p>
          <div className="mt-4 grid gap-8 md:grid-cols-12">
            <h2 className="font-heading text-4xl leading-tight md:col-span-6 md:text-6xl">Gentle pacing, expressive transitions.</h2>
            <ul className="space-y-3 md:col-span-6">
              <li className="rounded-xl border border-[#f5f0e8]/20 px-4 py-3">Opening title loops for educational series</li>
              <li className="rounded-xl border border-[#f5f0e8]/20 px-4 py-3">Character-led explainer sequences</li>
              <li className="rounded-xl border border-[#f5f0e8]/20 px-4 py-3">Short-form motion stickers and social snippets</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}
