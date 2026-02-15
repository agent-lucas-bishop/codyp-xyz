import './App.css'

interface Project {
  name: string
  subtitle: string
  href: string
  emoji: string
  style: React.CSSProperties
  labelStyle?: React.CSSProperties
  comingSoon?: boolean
}

const projects: Project[] = [
  {
    name: 'Cinéphile Daily',
    subtitle: 'Daily movie trivia',
    href: 'https://cinephile.codyp.xyz',
    emoji: '🎬',
    style: {
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      color: '#d4af37',
    },
    labelStyle: {
      color: '#d4af37',
    },
  },
  {
    name: '???',
    subtitle: 'Coming Soon',
    href: '#',
    emoji: '🧩',
    style: {
      background: 'linear-gradient(135deg, #e8e8e8 0%, #d4d4d4 100%)',
      color: '#999',
    },
    comingSoon: true,
  },
  {
    name: '???',
    subtitle: 'Coming Soon',
    href: '#',
    emoji: '🎲',
    style: {
      background: 'linear-gradient(135deg, #e8e8e8 0%, #d4d4d4 100%)',
      color: '#999',
    },
    comingSoon: true,
  },
  {
    name: '???',
    subtitle: 'Coming Soon',
    href: '#',
    emoji: '🚀',
    style: {
      background: 'linear-gradient(135deg, #e8e8e8 0%, #d4d4d4 100%)',
      color: '#999',
    },
    comingSoon: true,
  },
]

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="logo">CODY.P</h1>
        <p className="tagline">games and stuff</p>
      </header>

      <main className="grid">
        {projects.map((project, i) => (
          <a
            key={i}
            href={project.comingSoon ? undefined : project.href}
            className={`card${project.comingSoon ? ' card--soon' : ''}`}
            style={project.style}
            target={project.comingSoon ? undefined : '_blank'}
            rel={project.comingSoon ? undefined : 'noopener noreferrer'}
          >
            <span className="card__emoji">{project.emoji}</span>
            <h2 className="card__name" style={project.labelStyle}>
              {project.name}
            </h2>
            <p className="card__subtitle">{project.subtitle}</p>
            {project.comingSoon && (
              <span className="card__badge">Coming Soon</span>
            )}
          </a>
        ))}
      </main>

      <footer className="footer">
        made by Cody
      </footer>
    </div>
  )
}

export default App
