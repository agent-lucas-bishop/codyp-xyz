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

function Projects() {
  const projects = [
    {
      title: 'Cinéphile Daily',
      subtitle: 'Daily movie trivia game',
      zone: 'orange',
      badge: 'LIVE',
      link: 'https://cinephile.codyp.xyz',
      metrics: [
        { value: '3', label: 'Games' },
        { value: 'Daily', label: 'Refresh' },
      ],
      points: ['Three daily movie puzzles', 'Art deco cinema aesthetic', 'TMDB-powered'],
    },
    {
      title: 'Crittr Havens',
      subtitle: 'Reptile management app',
      zone: 'green',
      badge: 'IN DEV',
      metrics: [
        { value: '7', label: 'Months Dev' },
        { value: 'iOS', label: 'Platform' },
      ],
      points: ['Feeding schedules & shed tracking', 'Habitat management', 'React + Capacitor'],
    },
    {
      title: 'Price List Search',
      subtitle: 'Quote builder for sales teams',
      zone: 'cyan',
      badge: 'BETA',
      points: ['Instant pricing lookup', 'Auto-generated quote requests', 'Eliminates 0.5-2 day delays'],
    },
    {
      title: 'Tech Support RAG',
      subtitle: 'AI-powered SolidWorks knowledge base',
      zone: 'purple',
      badge: 'PLANNED',
      points: ['RAG over hundreds of thousands of KB articles', 'AI chat interface', 'Approved by Dassault'],
    },
    {
      title: 'Blackjack Trainer',
      subtitle: 'Learn optimal blackjack strategy',
      zone: 'red',
      badge: 'READY',
      points: ['React web app', 'Ready for mobile deployment'],
    },
    {
      title: 'Football Dice',
      subtitle: 'Dice-based football game',
      zone: 'gray',
      badge: 'READY',
      points: ['React web app', 'Ready for mobile deployment'],
    },
  ]

  return (
    <section className="section active">
      <div className="section-header">
        <span className="section-number">01</span>
        <h2 className="section-title">Projects</h2>
      </div>
      <div className="card-grid">
        {projects.map((p) => {
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
        })}
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
        <h4>Applications Engineer by day, builder by night</h4>
        <p>
          I'm an Applications Engineer for SolidWorks and the 3DEXPERIENCE platform,
          based in Milwaukee, WI. Outside of work I build apps, games, and tools —
          mostly with React, TypeScript, and whatever AI tools I can get my hands on.
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
            <span className="timeline-date">2020</span>
            <h4 className="timeline-item-title">Started at SolidWorks VAR</h4>
            <p className="timeline-desc">Joined as an Applications Engineer supporting CAD/PDM customers.</p>
          </div>
          <div className="timeline-item" style={{ '--delay': '0.2s' } as React.CSSProperties}>
            <span className="timeline-date">2023</span>
            <h4 className="timeline-item-title">3DEXPERIENCE Specialist</h4>
            <p className="timeline-desc">Expanded into cloud platform administration and deployment.</p>
          </div>
          <div className="timeline-item highlight" style={{ '--delay': '0.3s' } as React.CSSProperties}>
            <span className="timeline-date">2024</span>
            <h4 className="timeline-item-title">Started Building Apps</h4>
            <p className="timeline-desc">Launched Cinéphile Daily, began Crittr Havens, and dove into AI tooling.</p>
          </div>
          <div className="timeline-item" style={{ '--delay': '0.4s' } as React.CSSProperties}>
            <span className="timeline-date">2025</span>
            <h4 className="timeline-item-title">AI + Internal Tools</h4>
            <p className="timeline-desc">Building RAG systems, price list tools, and exploring agent workflows.</p>
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
            <a href="mailto:cody@codyp.xyz">
              Email — cody@codyp.xyz
            </a>
          </li>
          <li>LinkedIn — Coming soon</li>
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
              <p className="subtitle">Applications Engineer · Builder · Tinkerer</p>
            </div>
            <div className="title-meta">
              <div className="meta-row">
                <span className="meta-label">Location</span>
                <span className="meta-value">MILWAUKEE, WI</span>
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
