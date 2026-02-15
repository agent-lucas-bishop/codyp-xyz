import { useState, useEffect } from 'react'

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

interface LabProject {
  name: string
  url: string
  category: string
}

const LAB_PROJECTS: LabProject[] = [
  // Daily Games
  { name: 'Cinéphile Daily', url: 'https://cinephile.codyp.xyz', category: 'Daily Games' },
  { name: 'Chromacle', url: 'https://chromacle.vercel.app', category: 'Daily Games' },
  { name: 'Geodle', url: 'https://geodle-six.vercel.app', category: 'Daily Games' },
  { name: 'Pokédle', url: 'https://pokedle-pi.vercel.app', category: 'Daily Games' },
  { name: 'Flaggle', url: 'https://flaggle-chi.vercel.app', category: 'Daily Games' },
  { name: 'Cosmole', url: 'https://cosmole.vercel.app', category: 'Daily Games' },
  { name: 'Elementle', url: 'https://elemle.vercel.app', category: 'Daily Games' },
  { name: 'Capitadle', url: 'https://capitadle.vercel.app', category: 'Daily Games' },
  { name: 'Spectrle', url: 'https://spectrle.vercel.app', category: 'Daily Games' },
  { name: 'Reciple', url: 'https://reciple-one.vercel.app', category: 'Daily Games' },
  { name: 'Stockle', url: 'https://stockle-rouge.vercel.app', category: 'Daily Games' },
  { name: 'Astrodle', url: 'https://astrodle.vercel.app', category: 'Daily Games' },
  { name: 'Quotle', url: 'https://quotle-swart.vercel.app', category: 'Daily Games' },
  { name: 'Numbrle', url: 'https://numbrle.vercel.app', category: 'Daily Games' },
  { name: 'Logodle', url: 'https://logodle.vercel.app', category: 'Daily Games' },
  { name: 'Histodle', url: 'https://histodle.vercel.app', category: 'Daily Games' },
  { name: 'Audiodle', url: 'https://audiodle.vercel.app', category: 'Daily Games' },
  { name: 'The Daily Hub', url: 'https://daily-hub-nine.vercel.app', category: 'Daily Games' },

  // Games & Interactive
  { name: 'GREENLIGHT', url: 'https://greenlight-plum.vercel.app', category: 'Games & Interactive' },
  { name: '21 Pixel Dojo', url: 'https://21pixel.codyp.xyz', category: 'Games & Interactive' },
  { name: 'Poker Pixel Dojo', url: 'https://pokerpixel.codyp.xyz', category: 'Games & Interactive' },
  { name: '1st & Roll', url: 'https://1standroll.codyp.xyz', category: 'Games & Interactive' },
  { name: 'Odds Oracle', url: 'https://odds-oracle-three.vercel.app', category: 'Games & Interactive' },
  { name: 'CSS Battle Solo', url: 'https://css-battle-solo.vercel.app', category: 'Games & Interactive' },
  { name: 'Type Racer Solo', url: 'https://type-racer-solo.vercel.app', category: 'Games & Interactive' },
  { name: 'Reaction Time', url: 'https://reaction-time-seven.vercel.app', category: 'Games & Interactive' },
  { name: 'Geography Streak', url: 'https://geography-streak.vercel.app', category: 'Games & Interactive' },
  { name: 'Would You Rather', url: 'https://would-you-rather-cody-p.vercel.app', category: 'Games & Interactive' },
  { name: 'Déjà Vu', url: 'https://deja-vu-mu.vercel.app', category: 'Games & Interactive' },
  { name: 'Fake or Real', url: 'https://fake-or-real.vercel.app', category: 'Games & Interactive' },
  { name: 'Decision Roulette', url: 'https://decision-roulette-blush.vercel.app', category: 'Games & Interactive' },
  { name: 'One Word Story', url: 'https://one-word-story-mauve.vercel.app', category: 'Games & Interactive' },

  // Visualizations & Experiences
  { name: 'Scale of...', url: 'https://scale-of.vercel.app', category: 'Visualizations' },
  { name: 'Scale of Money', url: 'https://scale-of-money.vercel.app', category: 'Visualizations' },
  { name: 'Spend the Fortune', url: 'https://spend-the-fortune.vercel.app', category: 'Visualizations' },
  { name: 'The Money Printer', url: 'https://money-printer-two.vercel.app', category: 'Visualizations' },
  { name: 'Life in Weeks', url: 'https://life-in-weeks-orcin-xi.vercel.app', category: 'Visualizations' },
  { name: 'Life in Presidents', url: 'https://life-in-presidents.vercel.app', category: 'Visualizations' },
  { name: 'Earth Right Now', url: 'https://earth-right-now.vercel.app', category: 'Visualizations' },
  { name: 'How Many Heartbeats', url: 'https://how-many-heartbeats.vercel.app', category: 'Visualizations' },
  { name: 'How Fast Are You Aging', url: 'https://how-fast-aging.vercel.app', category: 'Visualizations' },
  { name: 'How Many [X] Tall', url: 'https://how-many-tall.vercel.app', category: 'Visualizations' },
  { name: 'Timezone Roulette', url: 'https://timezone-roulette.vercel.app', category: 'Visualizations' },
  { name: 'Forgetting Curve', url: 'https://forgetting-curve-two.vercel.app', category: 'Visualizations' },
  { name: 'Comfort Zone Map', url: 'https://comfort-zone-map.vercel.app', category: 'Visualizations' },
  { name: 'Color of Music', url: 'https://color-of-music.vercel.app', category: 'Visualizations' },

  // Personality & Self-Discovery
  { name: 'Vibe Check', url: 'https://vibe-check-cody-p.vercel.app', category: 'Personality' },
  { name: 'Mood Ring', url: 'https://mood-ring-sepia.vercel.app', category: 'Personality' },
  { name: 'Superpower Test', url: 'https://superpower-test.vercel.app', category: 'Personality' },
  { name: 'Social Battery', url: 'https://social-battery-steel.vercel.app', category: 'Personality' },
  { name: 'Attention Span Test', url: 'https://attention-span-test.vercel.app', category: 'Personality' },
  { name: 'Sound of Your Name', url: 'https://sound-of-your-name.vercel.app', category: 'Personality' },
  { name: 'Empathy Machine', url: 'https://empathy-machine.vercel.app', category: 'Personality' },
  { name: 'Dream Journal', url: 'https://dream-journal-xi.vercel.app', category: 'Personality' },

  // Creative & Social
  { name: 'Stranger Compliments', url: 'https://stranger-compliments.vercel.app', category: 'Creative' },
  { name: 'Future Letter', url: 'https://future-letter-six.vercel.app', category: 'Creative' },
  { name: 'The Last Photo', url: 'https://the-last-photo.vercel.app', category: 'Creative' },
  { name: 'Movie Pitch Generator', url: 'https://movie-pitch-generator-six.vercel.app', category: 'Creative' },
  { name: 'Emoji Translator', url: 'https://emoji-translator-brown.vercel.app', category: 'Creative' },
  { name: 'Pixel Art Yourself', url: 'https://pixel-art-yourself.vercel.app', category: 'Creative' },
  { name: 'Infinite Fusion', url: 'https://infinite-fusion-two.vercel.app', category: 'Creative' },
  { name: 'The Password Game', url: 'https://password-game-smoky.vercel.app', category: 'Creative' },
  { name: 'Better Useless Web', url: 'https://better-useless-web.vercel.app', category: 'Creative' },

  // Dev Tools
  { name: 'JSON Formatter', url: 'https://json-formatter-cody-p.vercel.app', category: 'Dev Tools' },
  { name: 'Regex Playground', url: 'https://regex-playground-khaki.vercel.app', category: 'Dev Tools' },
  { name: 'Markdown Previewer', url: 'https://markdown-previewer-cody-p.vercel.app', category: 'Dev Tools' },
  { name: 'ASCII Art Generator', url: 'https://ascii-art-generator-one.vercel.app', category: 'Dev Tools' },
  { name: 'Gradient Generator', url: 'https://gradient-generator-red.vercel.app', category: 'Dev Tools' },
  { name: 'Font Pairing', url: 'https://font-pairing-woad.vercel.app', category: 'Dev Tools' },
  { name: 'Color Palette Thief', url: 'https://color-palette-thief.vercel.app', category: 'Dev Tools' },

  // SolidWorks & Engineering
  { name: 'Property Perfect', url: 'https://properties.codyp.xyz', category: 'Engineering' },
  { name: 'CAD Benchmark', url: 'https://cad-benchmark.vercel.app', category: 'Engineering' },
  { name: 'CAD PC Builder', url: 'https://cad-pc-builder.vercel.app', category: 'Engineering' },
  { name: 'SW Shortcut Trainer', url: 'https://sw-shortcut-trainer.vercel.app', category: 'Engineering' },
]

function Lab() {
  const categories = [...new Set(LAB_PROJECTS.map(p => p.category))]

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--bg, #0a0a0f)',
      color: 'var(--text, #e0ddd8)',
      padding: '40px 24px',
      fontFamily: 'var(--font-body, system-ui)',
    }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ marginBottom: 40 }}>
          <h1 style={{
            fontFamily: 'var(--font-display, system-ui)',
            fontSize: '2rem',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            marginBottom: 4,
          }}>
            🧪 The Lab
          </h1>
          <p style={{ opacity: 0.5, fontSize: '0.85rem' }}>
            {LAB_PROJECTS.length} projects · All deployed on Vercel
          </p>
        </div>

        {categories.map(cat => {
          const projects = LAB_PROJECTS.filter(p => p.category === cat)
          return (
            <div key={cat} style={{ marginBottom: 32 }}>
              <h2 style={{
                fontFamily: 'var(--font-display, system-ui)',
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--blueprint-dark, #6a8caf)',
                marginBottom: 12,
                paddingBottom: 6,
                borderBottom: '1px solid rgba(255,255,255,0.08)',
              }}>
                {cat} <span style={{ opacity: 0.4 }}>({projects.length})</span>
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: 8,
              }}>
                {projects.map(p => (
                  <a
                    key={p.name}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 14px',
                      background: 'rgba(255,255,255,0.03)',
                      borderRadius: 6,
                      textDecoration: 'none',
                      color: 'inherit',
                      fontSize: '0.9rem',
                      transition: 'background 0.15s',
                      border: '1px solid rgba(255,255,255,0.05)',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.03)')}
                  >
                    <span>{p.name}</span>
                    <span style={{ opacity: 0.3, fontSize: '0.75rem' }}>↗</span>
                  </a>
                ))}
              </div>
            </div>
          )
        })}

        <div style={{ marginTop: 48, textAlign: 'center', opacity: 0.3, fontSize: '0.75rem' }}>
          codyp.xyz
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('projects')
  const [showLab, setShowLab] = useState(false)

  useEffect(() => {
    const checkHash = () => setShowLab(window.location.hash === '#lab')
    checkHash()
    window.addEventListener('hashchange', checkHash)
    return () => window.removeEventListener('hashchange', checkHash)
  }, [])

  if (showLab) return <Lab />

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
