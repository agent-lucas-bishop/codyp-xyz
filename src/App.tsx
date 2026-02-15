import { useState } from 'react'

type Tab = 'projects' | 'about' | 'blog' | 'contact'

const TABS: { id: Tab; label: string }[] = [
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
]

const today = new Date().toLocaleDateString('en-US', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
}).toUpperCase().replace(',', '')

interface Project {
  title: string
  subtitle: string
  zone: string
  badge: string
  link?: string
  ogImage?: string
  metrics?: { value: string; label: string }[]
  points: string[]
}

function CardPreview({ src }: { src?: string }) {
  const [failed, setFailed] = useState(false)
  if (!src || failed) return null
  return (
    <div className="card-preview">
      <img src={src} alt="" onError={() => setFailed(true)} />
    </div>
  )
}

function ProjectCard({ p }: { p: Project }) {
  const Tag = p.link ? 'a' : 'div'
  const linkProps = p.link
    ? { href: p.link, target: '_blank', rel: 'noopener noreferrer' }
    : {}
  return (
    <Tag
      key={p.title}
      className="content-card"
      data-zone={p.zone}
      {...linkProps}
      style={p.link ? { textDecoration: 'none', color: 'inherit' } : undefined}
    >
      <div className="card-zone-marker" />
      <CardPreview src={p.ogImage} />
      <div className="card-content">
        <div className="card-header">
          <div>
            <h3 className="card-title">{p.title}</h3>
            <p className="card-subtitle">{p.subtitle}</p>
          </div>
          <span className="card-badge">{p.badge}</span>
        </div>
        {p.metrics && (
          <div className="card-metrics">
            {p.metrics.map((m) => (
              <div className="metric" key={m.label}>
                <div className="metric-value">{m.value}</div>
                <div className="metric-label">{m.label}</div>
              </div>
            ))}
          </div>
        )}
        <h4 className="card-section-label">Key Points</h4>
        <ul className="card-list">
          {p.points.map((pt) => (
            <li key={pt}>{pt}</li>
          ))}
        </ul>
      </div>
    </Tag>
  )
}

function Projects() {
  const publicProjects: Project[] = [
    {
      title: 'Cinéphile Daily',
      subtitle: 'Daily movie trivia game',
      zone: 'orange',
      badge: 'LIVE',
      link: 'https://cinephile.codyp.xyz',
      ogImage: 'https://cinephile.codyp.xyz/og-image.png',
      metrics: [
        { value: '3', label: 'Mini-Games' },
        { value: 'Daily', label: 'Refresh' },
      ],
      points: ['The Credits, The Poster, The Year', 'Art deco cinema aesthetic', 'TMDB-powered'],
    },
    {
      title: 'The Money Printer',
      subtitle: 'Watch money print at different speeds',
      zone: 'green',
      badge: 'LIVE',
      link: 'https://money-printer-two.vercel.app',
      points: ['23 tiers from minimum wage to global GDP', 'Bills evolve from singles to vault pallets', 'Real-time counters show earnings since page load'],
    },
    {
      title: 'Property Perfect',
      subtitle: 'SOLIDWORKS properties.txt editor',
      zone: 'cyan',
      badge: 'LIVE',
      link: 'https://properties.codyp.xyz',
      points: ['Create & manage custom property lists', '8 industry templates + blank/default', 'Import existing files, hundreds of preloaded properties'],
    },
    {
      title: 'CAD Benchmark',
      subtitle: 'What PC do you need for SolidWorks?',
      zone: 'cyan',
      badge: 'LIVE',
      link: 'https://cad-benchmark.vercel.app',
      points: ['4-question quiz recommends a full PC build', 'Amazon affiliate links on every component', 'SolidWorks-specific hardware explanations'],
    },
    {
      title: 'Odds Oracle',
      subtitle: 'Quick-fire probability trainer',
      zone: 'purple',
      badge: 'LIVE',
      link: 'https://odds-oracle-three.vercel.app',
      points: ['Guess real-world probabilities across 5 categories', 'Log-scale scoring rewards precision', '60 curated questions from casino to absurd'],
    },
    {
      title: '21 Pixel Dojo',
      subtitle: 'Blackjack training app',
      zone: 'red',
      badge: 'PUBLIC BETA',
      link: 'https://21pixel.codyp.xyz',
      points: ["Play mode (Vinnie's Table) + 4 training modes", "Mastery modes: Sensei's Dojo & Pat's Proving Ground", 'Belt ranking system & bankroll tracking'],
    },
    {
      title: 'Poker Pixel Dojo',
      subtitle: 'Video poker (Jacks or Better) trainer',
      zone: 'purple',
      badge: 'PUBLIC BETA',
      link: 'https://pokerpixel.codyp.xyz',
      points: ['Free Play, Training & Challenge modes', 'Expected value analysis', 'Optimal hold strategy guidance'],
    },
    {
      title: '1st & Roll',
      subtitle: 'Strategic football dice game',
      zone: 'green',
      badge: 'PUBLIC BETA',
      link: 'https://1standroll.codyp.xyz',
      points: ['VS Human or VS AI', 'Draft plays, roll dice, offense vs defense', '60-play games'],
    },
    {
      title: 'Chromacle',
      subtitle: 'Daily color guessing game',
      zone: 'purple',
      badge: 'LIVE',
      link: 'https://chromacle.vercel.app',
      points: ['Guess the daily color using HSL sliders', 'Visual feedback with proximity scoring', 'New color every day'],
    },
    {
      title: 'Geodle',
      subtitle: 'Daily geography challenge',
      zone: 'green',
      badge: 'LIVE',
      link: 'https://geodle-six.vercel.app',
      points: ['Guess the country from progressive clues', 'Distance and direction hints', 'Test your world knowledge daily'],
    },
    {
      title: 'Pokédle',
      subtitle: 'Daily Pokémon challenge',
      zone: 'red',
      badge: 'LIVE',
      link: 'https://pokedle-pi.vercel.app',
      points: ['Guess the daily Pokémon from stat comparisons', 'Type, generation & stat clues', 'New Pokémon every day'],
    },
    {
      title: 'Flaggle',
      subtitle: 'Daily flag challenge',
      zone: 'orange',
      badge: 'LIVE',
      link: 'https://flaggle-chi.vercel.app',
      points: ['Identify countries from progressively revealed flags', 'Multiple difficulty levels', 'Learn world flags daily'],
    },
    {
      title: 'Scale of...',
      subtitle: 'Interactive powers of 10 explorer',
      zone: 'gray',
      badge: 'LIVE',
      link: 'https://scale-of.vercel.app',
      points: ['Scroll from a grain of sand to the observable universe', '18 objects with SVG silhouettes and fun facts', 'Logarithmic scale with smooth transitions'],
    },
    {
      title: 'GREENLIGHT',
      subtitle: 'Movie studio roguelite',
      zone: 'gray',
      badge: 'PUBLIC BETA',
      link: 'https://greenlight-plum.vercel.app',
      points: ['Build a Hollywood empire through push-your-luck productions', 'Hire talent, pick genres, manage your studio', 'Roguelite progression with unlockables'],
    },
    {
      title: 'Spend the Fortune',
      subtitle: 'Try to spend $200 billion',
      zone: 'cyan',
      badge: 'LIVE',
      link: 'https://spend-the-fortune.vercel.app',
      points: ['Interactive wealth visualization', 'See how far $200 billion really goes', 'Fun perspective on extreme wealth'],
    },
    {
      title: 'Cosmole',
      subtitle: 'Daily celestial body guessing game',
      zone: 'purple',
      badge: 'LIVE',
      link: 'https://cosmole.vercel.app',
      points: ['Guess planets, moons, and more from progressive clues', 'Deep space visual theme', '38 celestial bodies with handcrafted clues'],
    },
    {
      title: 'Life in Weeks',
      subtitle: 'Visualize your entire life as a grid of dots',
      zone: 'gray',
      badge: 'LIVE',
      link: 'https://life-in-weeks-orcin-xi.vercel.app',
      points: ['Each dot represents one week of your life', 'Powerful perspective on time', 'Inspired by the Wait But Why visualization'],
    },
    {
      title: 'The Daily Hub',
      subtitle: 'Play all your daily challenges in one place',
      zone: 'red',
      badge: 'LIVE',
      link: 'https://daily-hub-nine.vercel.app',
      points: ['Unified portal for all daily games', 'Completion tracker resets daily', 'Retro arcade aesthetic'],
    },
    {
      title: 'Earth Right Now',
      subtitle: 'Real-time dashboard of our planet',
      zone: 'cyan',
      badge: 'LIVE',
      link: 'https://earth-right-now.vercel.app',
      points: ['ISS location, moon phase, population counter', 'Real-time data from public APIs', 'Contemplative pale blue dot aesthetic'],
    },
  ]

  const privateProjects: Project[] = [
    {
      title: 'CrittrHavens',
      subtitle: 'Reptile management app',
      zone: 'green',
      badge: 'IN DEV',
      metrics: [
        { value: '7', label: 'Months Dev' },
        { value: 'iOS', label: 'Platform' },
      ],
      points: ['Feeding schedules, shed tracking & habitat management', 'Gets complicated fast with 15+ tanks', 'React + Capacitor for iOS'],
    },
    {
      title: 'Price Navigator',
      subtitle: 'Pricing lookup & quote builder for sales teams',
      zone: 'cyan',
      badge: 'BETA',
      points: ['Instant pricing search', 'Auto-generated quote request emails', 'Eliminates 0.5–2 day turnaround delays'],
    },
    {
      title: 'Tech Support RAG',
      subtitle: 'AI-powered SolidWorks knowledge base',
      zone: 'purple',
      badge: 'PLANNED',
      points: ['RAG over hundreds of thousands of KB articles', 'AI chat interface'],
    },
  ]

  return (
    <section className="section active">
      <div className="section-header">
        <span className="section-number">01</span>
        <h2 className="section-title">Projects</h2>
      </div>

      <p className="section-subtitle">Public — try them out</p>
      <div className="card-grid">
        {publicProjects.map((p) => <ProjectCard key={p.title} p={p} />)}
      </div>

      <div className="section-header" style={{ marginTop: 'var(--space-4)' }}>
        <span className="section-number">02</span>
        <h2 className="section-title">Projects</h2>
      </div>

      <p className="section-subtitle">Private — professional & internal tools</p>
      <div className="card-grid">
        {privateProjects.map((p) => <ProjectCard key={p.title} p={p} />)}
      </div>
    </section>
  )
}

function About() {
  const skills = [
    { name: 'SolidWorks', desc: 'CAD modeling, simulation, PDM administration' },
    { name: '3DEXPERIENCE', desc: 'Platform administration, ENOVIA, cloud deployment' },
    { name: 'React / TypeScript', desc: 'Full-stack web apps, Vite, Next.js' },
    { name: 'Supabase', desc: 'PostgreSQL, auth, real-time, edge functions' },
    { name: 'AI / ML', desc: 'RAG pipelines, embeddings, prompt engineering' },
    { name: 'Claude / OpenAI', desc: 'API integration, tool use, agent workflows' },
  ]

  return (
    <section className="section active">
      <div className="section-header">
        <span className="section-number">02</span>
        <h2 className="section-title">About</h2>
      </div>

      <div className="callout info">
        <span className="callout-label">Who I Am</span>
        <p>
          I'm an Applications Engineer at GSC, where I work with SolidWorks and the
          3DEXPERIENCE platform. I've been in the industry since 2010 — started as a
          pattern making apprentice, worked at a fast-growing tech startup, and eventually
          landed in the CAD world where I've been ever since.
        </p>
        <p style={{ marginTop: '12px' }}>
          These days I'm on our company's AI steering committee, and outside of work I
          build apps, games, and tools — mostly with React, TypeScript, and whatever AI
          I can get my hands on. My wife and I keep reptiles, which is how CrittrHavens
          was born (tracking feeding schedules, sheds, and habitat conditions gets
          complicated fast when you have over 15 tanks).
        </p>
      </div>

      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: '0.9rem',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        color: 'var(--blueprint-dark)',
        margin: '32px 0 16px',
      }}>
        Skills & Tools
      </h3>

      <div className="feature-grid">
        {skills.map((s) => (
          <div className="feature-card" key={s.name}>
            <h4>{s.name}</h4>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="timeline-container">
        <h3 className="timeline-title">Journey</h3>
        <div className="timeline">
          <div className="timeline-item" style={{ '--delay': '0.1s' } as React.CSSProperties}>
            <span className="timeline-date">2010</span>
            <h4 className="timeline-item-title">Pattern Making Apprentice</h4>
            <p className="timeline-desc">Started in manufacturing, learning the craft from the ground up.</p>
          </div>
          <div className="timeline-item" style={{ '--delay': '0.15s' } as React.CSSProperties}>
            <span className="timeline-date">2018</span>
            <h4 className="timeline-item-title">Training 2.0 at GSC</h4>
            <p className="timeline-desc">Co-led an initiative to transform GSC's training department — built out remote classroom infrastructure, evaluated LMS platforms, designed new KPI tracking, and helped shift training from classroom-only to a flexible virtual + in-person model.</p>
          </div>
          <div className="timeline-item" style={{ '--delay': '0.2s' } as React.CSSProperties}>
            <span className="timeline-date">2019–2020</span>
            <h4 className="timeline-item-title">Tech Canary</h4>
            <p className="timeline-desc">Worked at one of Wisconsin's fastest-growing tech startups, later acquired by Applied Systems.</p>
          </div>
          <div className="timeline-item" style={{ '--delay': '0.3s' } as React.CSSProperties}>
            <span className="timeline-date">2021</span>
            <h4 className="timeline-item-title">3DEXPERIENCE Specialist</h4>
            <p className="timeline-desc">Expanded into cloud platform administration and deployment at GSC.</p>
          </div>
          <div className="timeline-item highlight" style={{ '--delay': '0.4s' } as React.CSSProperties}>
            <span className="timeline-date">2024</span>
            <h4 className="timeline-item-title">Started Exploring Generative AI</h4>
            <p className="timeline-desc">Dove into generative AI, agent workflows, and building with LLMs.</p>
          </div>
          <div className="timeline-item" style={{ '--delay': '0.45s' } as React.CSSProperties}>
            <span className="timeline-date">2025</span>
            <h4 className="timeline-item-title">Started Building Apps</h4>
            <p className="timeline-desc">Launched Cinéphile Daily, began CrittrHavens, and started shipping side projects.</p>
          </div>
          <div className="timeline-item" style={{ '--delay': '0.5s' } as React.CSSProperties}>
            <span className="timeline-date">2026</span>
            <h4 className="timeline-item-title">AI Steering Committee + Internal Tools</h4>
            <p className="timeline-desc">Joined the company AI steering committee. Building RAG systems, Price Navigator, and internal AI tooling.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Blog() {
  return (
    <section className="section active">
      <div className="section-header">
        <span className="section-number">03</span>
        <h2 className="section-title">Blog</h2>
      </div>
      <div className="callout info">
        <span className="callout-label">Coming Soon</span>
        <h4>Blog posts coming soon</h4>
        <p>
          Topics will include AI, development, SolidWorks tips, and building things.
        </p>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section active">
      <div className="section-header">
        <span className="section-number">04</span>
        <h2 className="section-title">Contact</h2>
      </div>
      <div className="callout info">
        <span className="callout-label">Get In Touch</span>
        <h4>Links</h4>
        <ul className="card-list" style={{ marginTop: '12px' }}>
          <li>
            <a href="https://github.com/Shoot2Skoot" target="_blank" rel="noopener noreferrer">
              GitHub — Shoot2Skoot
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/codypendzich/" target="_blank" rel="noopener noreferrer">
              LinkedIn — Cody Pendzich
            </a>
          </li>
          <li>
            <a href="mailto:cody@codyp.xyz">
              Email — cody@codyp.xyz
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('projects')

  return (
    <>
      <div className="grid-paper" />
      <div className="container">
        <header className="title-block">
          <div className="title-block-inner">
            <div className="title-main">
              <h1>Cody P.</h1>
              <p className="subtitle">Applications Engineer · SolidWorks · 3DEXPERIENCE</p>
            </div>
            <div className="title-meta">
              <div className="meta-row">
                <span className="meta-label">Fuel</span>
                <span className="meta-value">RED BULL & CURIOSITY</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Status</span>
                <span className="meta-value">BUILDING</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Updated</span>
                <span className="meta-value">{today}</span>
              </div>
            </div>
          </div>
        </header>

        <nav className="nav-tabs">
          {TABS.map((t) => (
            <button
              key={t.id}
              className={`nav-tab${activeTab === t.id ? ' active' : ''}`}
              onClick={() => setActiveTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </nav>

        {activeTab === 'projects' && <Projects />}
        {activeTab === 'about' && <About />}
        {activeTab === 'blog' && <Blog />}
        {activeTab === 'contact' && <Contact />}

        <footer className="footer">
          <p className="footer-note">Built by Cody P.</p>
          <div className="footer-stamp">CODYP.XYZ</div>
        </footer>
      </div>
    </>
  )
}
