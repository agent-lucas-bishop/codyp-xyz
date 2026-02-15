import { useState, useRef, useEffect } from 'react'

interface LabProject {
  name: string
  url: string
  category: string
  emoji: string
  desc: string
}

const PROJECTS: LabProject[] = [
  // Daily Games
  { name: 'Cinéphile Daily', url: 'https://cinephile.codyp.xyz', category: 'Daily Games', emoji: '🎬', desc: 'Movie trivia — credits, posters & years' },
  { name: 'Chromacle', url: 'https://chromacle.vercel.app', category: 'Daily Games', emoji: '🎨', desc: 'Guess the daily color with HSL sliders' },
  { name: 'Geodle', url: 'https://geodle-six.vercel.app', category: 'Daily Games', emoji: '🌍', desc: 'Country guessing with distance hints' },
  { name: 'Pokédle', url: 'https://pokedle-pi.vercel.app', category: 'Daily Games', emoji: '⚡', desc: 'Daily Pokémon from stat comparisons' },
  { name: 'Flaggle', url: 'https://flaggle-chi.vercel.app', category: 'Daily Games', emoji: '🏁', desc: 'Identify countries from revealed flags' },
  { name: 'Cosmole', url: 'https://cosmole.vercel.app', category: 'Daily Games', emoji: '🪐', desc: 'Celestial body guessing game' },
  { name: 'Elementle', url: 'https://elemle.vercel.app', category: 'Daily Games', emoji: '⚗️', desc: 'Periodic table element guessing' },
  { name: 'Capitadle', url: 'https://capitadle.vercel.app', category: 'Daily Games', emoji: '✈️', desc: 'World capitals, boarding pass style' },
  { name: 'Spectrle', url: 'https://spectrle.vercel.app', category: 'Daily Games', emoji: '🌈', desc: 'Electromagnetic spectrum guessing' },
  { name: 'Reciple', url: 'https://reciple-one.vercel.app', category: 'Daily Games', emoji: '🍳', desc: 'Guess the dish from ingredients' },
  { name: 'Stockle', url: 'https://stockle-rouge.vercel.app', category: 'Daily Games', emoji: '📈', desc: 'Guess stocks from charts & stats' },
  { name: 'Astrodle', url: 'https://astrodle.vercel.app', category: 'Daily Games', emoji: '🔭', desc: 'NASA APOD celestial guessing' },
  { name: 'Quotle', url: 'https://quotle-swart.vercel.app', category: 'Daily Games', emoji: '💬', desc: 'Guess who said the famous quote' },
  { name: 'Numbrle', url: 'https://numbrle.vercel.app', category: 'Daily Games', emoji: '🔢', desc: 'Number-based daily puzzle' },
  { name: 'Logodle', url: 'https://logodle.vercel.app', category: 'Daily Games', emoji: '🏷️', desc: 'Brand guessing from clues' },
  { name: 'Histodle', url: 'https://histodle.vercel.app', category: 'Daily Games', emoji: '📜', desc: 'Historical event guessing' },
  { name: 'Audiodle', url: 'https://audiodle.vercel.app', category: 'Daily Games', emoji: '🎵', desc: 'Identify sounds and audio clips' },
  { name: 'The Daily Hub', url: 'https://daily-hub-nine.vercel.app', category: 'Daily Games', emoji: '🕹️', desc: 'Play all daily challenges in one place' },

  // Games & Interactive
  { name: 'GREENLIGHT', url: 'https://greenlight-plum.vercel.app', category: 'Games', emoji: '🎥', desc: 'Movie studio roguelite card game' },
  { name: '21 Pixel Dojo', url: 'https://21pixel.codyp.xyz', category: 'Games', emoji: '🃏', desc: 'Blackjack training with belt ranks' },
  { name: 'Poker Pixel Dojo', url: 'https://pokerpixel.codyp.xyz', category: 'Games', emoji: '♠️', desc: 'Video poker trainer' },
  { name: '1st & Roll', url: 'https://1standroll.codyp.xyz', category: 'Games', emoji: '🏈', desc: 'Strategic football dice game' },
  { name: 'Odds Oracle', url: 'https://odds-oracle-three.vercel.app', category: 'Games', emoji: '🎲', desc: 'Probability guessing trainer' },
  { name: 'CSS Battle Solo', url: 'https://css-battle-solo.vercel.app', category: 'Games', emoji: '⚔️', desc: '32 CSS code golf challenges' },
  { name: 'Type Racer Solo', url: 'https://type-racer-solo.vercel.app', category: 'Games', emoji: '⌨️', desc: 'Solo typing speed test' },
  { name: 'Reaction Time', url: 'https://reaction-time-seven.vercel.app', category: 'Games', emoji: '⚡', desc: 'Test your reflexes' },
  { name: 'Geography Streak', url: 'https://geography-streak.vercel.app', category: 'Games', emoji: '🗺️', desc: 'How long can you streak?' },
  { name: 'Would You Rather', url: 'https://would-you-rather-cody-p.vercel.app', category: 'Games', emoji: '🤔', desc: 'Impossible choices' },
  { name: 'Déjà Vu', url: 'https://deja-vu-mu.vercel.app', category: 'Games', emoji: '👁️', desc: 'Memory and pattern recognition' },
  { name: 'Fake or Real', url: 'https://fake-or-real.vercel.app', category: 'Games', emoji: '🔍', desc: 'Spot the fake' },
  { name: 'Decision Roulette', url: 'https://decision-roulette-blush.vercel.app', category: 'Games', emoji: '🎰', desc: 'Spin wheel with gut check twist' },
  { name: 'One Word Story', url: 'https://one-word-story-mauve.vercel.app', category: 'Games', emoji: '📖', desc: 'Collaborative word-by-word stories' },

  // Visualizations
  { name: 'Scale of...', url: 'https://scale-of.vercel.app', category: 'Visualizations', emoji: '🔬', desc: 'Sand grain to observable universe' },
  { name: 'Scale of Money', url: 'https://scale-of-money.vercel.app', category: 'Visualizations', emoji: '💵', desc: 'Visualize wealth at every scale' },
  { name: 'Spend the Fortune', url: 'https://spend-the-fortune.vercel.app', category: 'Visualizations', emoji: '💰', desc: 'Try to spend $200 billion' },
  { name: 'The Money Printer', url: 'https://money-printer-two.vercel.app', category: 'Visualizations', emoji: '🖨️', desc: 'Watch money print at different speeds' },
  { name: 'Life in Weeks', url: 'https://life-in-weeks-orcin-xi.vercel.app', category: 'Visualizations', emoji: '📅', desc: 'Your entire life as a grid of dots' },
  { name: 'Life in Presidents', url: 'https://life-in-presidents.vercel.app', category: 'Visualizations', emoji: '🏛️', desc: 'Your life mapped to presidencies' },
  { name: 'Earth Right Now', url: 'https://earth-right-now.vercel.app', category: 'Visualizations', emoji: '🌎', desc: 'ISS, moon phase, population live' },
  { name: 'How Many Heartbeats', url: 'https://how-many-heartbeats.vercel.app', category: 'Visualizations', emoji: '💓', desc: 'Real-time heartbeat counter' },
  { name: 'How Fast Are You Aging', url: 'https://how-fast-aging.vercel.app', category: 'Visualizations', emoji: '⏳', desc: 'Your age in every unit' },
  { name: 'How Many [X] Tall', url: 'https://how-many-tall.vercel.app', category: 'Visualizations', emoji: '📏', desc: 'Height in bananas, giraffes, etc' },
  { name: 'Timezone Roulette', url: 'https://timezone-roulette.vercel.app', category: 'Visualizations', emoji: '🕐', desc: "What time is it somewhere random?" },
  { name: 'Forgetting Curve', url: 'https://forgetting-curve-two.vercel.app', category: 'Visualizations', emoji: '🧠', desc: 'Live memory decay experiment' },
  { name: 'Comfort Zone Map', url: 'https://comfort-zone-map.vercel.app', category: 'Visualizations', emoji: '🗾', desc: 'Map your boundaries visually' },
  { name: 'Color of Music', url: 'https://color-of-music.vercel.app', category: 'Visualizations', emoji: '🎶', desc: 'Synesthetic mood × genre profiles' },

  // Personality
  { name: 'Vibe Check', url: 'https://vibe-check-cody-p.vercel.app', category: 'Personality', emoji: '✨', desc: 'What energy are you giving off?' },
  { name: 'Mood Ring', url: 'https://mood-ring-sepia.vercel.app', category: 'Personality', emoji: '💍', desc: 'Digital mood ring experience' },
  { name: 'Superpower Test', url: 'https://superpower-test.vercel.app', category: 'Personality', emoji: '🦸', desc: 'Discover your superpower' },
  { name: 'Social Battery', url: 'https://social-battery-steel.vercel.app', category: 'Personality', emoji: '🔋', desc: 'How drained are you?' },
  { name: 'Attention Span Test', url: 'https://attention-span-test.vercel.app', category: 'Personality', emoji: '🧘', desc: 'Intentionally boring timer' },
  { name: 'Sound of Your Name', url: 'https://sound-of-your-name.vercel.app', category: 'Personality', emoji: '🎼', desc: 'Your name as a melody' },
  { name: 'Empathy Machine', url: 'https://empathy-machine.vercel.app', category: 'Personality', emoji: '🫂', desc: 'Walk through 8 different lives' },
  { name: 'Dream Journal', url: 'https://dream-journal-xi.vercel.app', category: 'Personality', emoji: '🌙', desc: 'Track dreams, find patterns' },

  // Creative
  { name: 'Stranger Compliments', url: 'https://stranger-compliments.vercel.app', category: 'Creative', emoji: '💛', desc: 'Give one to get one' },
  { name: 'Future Letter', url: 'https://future-letter-six.vercel.app', category: 'Creative', emoji: '✉️', desc: 'Write to your future self' },
  { name: 'The Last Photo', url: 'https://the-last-photo.vercel.app', category: 'Creative', emoji: '📸', desc: 'What would your last photo be?' },
  { name: 'Movie Pitch Generator', url: 'https://movie-pitch-generator-six.vercel.app', category: 'Creative', emoji: '🎞️', desc: 'Random movie pitch mashups' },
  { name: 'Emoji Translator', url: 'https://emoji-translator-brown.vercel.app', category: 'Creative', emoji: '😎', desc: 'Text to emoji translation' },
  { name: 'Pixel Art Yourself', url: 'https://pixel-art-yourself.vercel.app', category: 'Creative', emoji: '👾', desc: 'Create pixel art portraits' },
  { name: 'Infinite Fusion', url: 'https://infinite-fusion-two.vercel.app', category: 'Creative', emoji: '🧬', desc: 'Fuse anything with anything' },
  { name: 'The Password Game', url: 'https://password-game-smoky.vercel.app', category: 'Creative', emoji: '🔐', desc: 'Increasingly absurd password rules' },
  { name: 'Better Useless Web', url: 'https://better-useless-web.vercel.app', category: 'Creative', emoji: '🤪', desc: 'Random weird web experiences' },

  // Dev Tools
  { name: 'JSON Formatter', url: 'https://json-formatter-cody-p.vercel.app', category: 'Dev Tools', emoji: '{ }', desc: 'Pretty-print and validate JSON' },
  { name: 'Regex Playground', url: 'https://regex-playground-khaki.vercel.app', category: 'Dev Tools', emoji: '🔤', desc: 'Test regex patterns live' },
  { name: 'Markdown Previewer', url: 'https://markdown-previewer-cody-p.vercel.app', category: 'Dev Tools', emoji: '📝', desc: 'Live markdown preview' },
  { name: 'ASCII Art Generator', url: 'https://ascii-art-generator-one.vercel.app', category: 'Dev Tools', emoji: '▓░', desc: 'Text and image to ASCII' },
  { name: 'Gradient Generator', url: 'https://gradient-generator-red.vercel.app', category: 'Dev Tools', emoji: '🌅', desc: '52 curated gradients + custom' },
  { name: 'Font Pairing', url: 'https://font-pairing-woad.vercel.app', category: 'Dev Tools', emoji: '🔠', desc: '35 font pairings with previews' },
  { name: 'Color Palette Thief', url: 'https://color-palette-thief.vercel.app', category: 'Dev Tools', emoji: '🎨', desc: 'Extract palettes + WCAG checker' },

  // Engineering
  { name: 'Property Perfect', url: 'https://properties.codyp.xyz', category: 'Engineering', emoji: '⚙️', desc: 'SolidWorks properties.txt editor' },
  { name: 'CAD Benchmark', url: 'https://cad-benchmark.vercel.app', category: 'Engineering', emoji: '🖥️', desc: 'What PC for SolidWorks?' },
  { name: 'CAD PC Builder', url: 'https://cad-pc-builder.vercel.app', category: 'Engineering', emoji: '🔧', desc: 'Build a CAD workstation' },
  { name: 'SW Shortcut Trainer', url: 'https://sw-shortcut-trainer.vercel.app', category: 'Engineering', emoji: '⌨️', desc: 'Learn SolidWorks shortcuts' },
]

const CATEGORY_META: Record<string, { icon: string; color: string }> = {
  'Daily Games': { icon: '🎯', color: '#f59e0b' },
  'Games': { icon: '🎮', color: '#8b5cf6' },
  'Visualizations': { icon: '🌌', color: '#06b6d4' },
  'Personality': { icon: '🔮', color: '#ec4899' },
  'Creative': { icon: '🎨', color: '#f97316' },
  'Dev Tools': { icon: '🛠', color: '#10b981' },
  'Engineering': { icon: '⚙️', color: '#6366f1' },
}

function ProjectCard({ project }: { project: LabProject }) {
  const [imgLoaded, setImgLoaded] = useState(false)
  const [imgError, setImgError] = useState(false)
  const [timedOut, setTimedOut] = useState(false)
  const catMeta = CATEGORY_META[project.category]
  const thumbUrl = `https://image.thum.io/get/wait/5/width/600/crop/400/noanimate/https://${project.url.replace('https://', '')}`

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!imgLoaded) setTimedOut(true)
    }, 8000)
    return () => clearTimeout(timer)
  }, [imgLoaded])

  const showPlaceholder = !imgLoaded || imgError || timedOut

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="lab-card"
      style={{ '--cat-color': catMeta?.color || '#666' } as React.CSSProperties}
    >
      <div className="lab-card-thumb">
        {!imgError && !timedOut && (
          <img
            src={thumbUrl}
            alt=""
            loading="lazy"
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            style={{ opacity: imgLoaded ? 1 : 0 }}
          />
        )}
        {showPlaceholder && (
          <div className="lab-card-thumb-placeholder">
            <span className="lab-card-thumb-emoji">{project.emoji}</span>
          </div>
        )}
        <div className="lab-card-badge">{project.category}</div>
      </div>
      <div className="lab-card-body">
        <div className="lab-card-title-row">
          <span className="lab-card-emoji">{project.emoji}</span>
          <h3 className="lab-card-title">{project.name}</h3>
        </div>
        <p className="lab-card-desc">{project.desc}</p>
        <span className="lab-card-url">{project.url.replace('https://', '')}</span>
      </div>
    </a>
  )
}

export default function Lab() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const categories = [...new Set(PROJECTS.map(p => p.category))]
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement !== inputRef.current) {
        e.preventDefault()
        inputRef.current?.focus()
      }
      if (e.key === 'Escape') {
        setSearch('')
        setActiveCategory(null)
        inputRef.current?.blur()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const filtered = PROJECTS.filter(p => {
    const matchesSearch = !search || 
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.desc.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
    const matchesCat = !activeCategory || p.category === activeCategory
    return matchesSearch && matchesCat
  })

  const groupedByCategory = categories
    .filter(cat => filtered.some(p => p.category === cat))
    .map(cat => ({
      name: cat,
      projects: filtered.filter(p => p.category === cat),
    }))

  return (
    <div className="lab-root">
      <div className="lab-bg" />
      
      <header className="lab-header">
        <div className="lab-header-inner">
          <div className="lab-title-block">
            <h1 className="lab-title">
              <span className="lab-title-icon">🧪</span>
              The Lab
            </h1>
            <p className="lab-subtitle">
              {PROJECTS.length} experiments · Built with ☕ and AI
            </p>
          </div>
          
          <div className="lab-search-wrap">
            <span className="lab-search-icon">⌕</span>
            <input
              ref={inputRef}
              type="text"
              placeholder='Search projects... (press "/")'
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="lab-search"
            />
            {search && (
              <button className="lab-search-clear" onClick={() => setSearch('')}>✕</button>
            )}
          </div>
        </div>

        <div className="lab-filters">
          <button
            className={`lab-filter-btn ${!activeCategory ? 'active' : ''}`}
            onClick={() => setActiveCategory(null)}
          >
            All
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              className={`lab-filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
              style={{ '--cat-color': CATEGORY_META[cat]?.color || '#666' } as React.CSSProperties}
            >
              {CATEGORY_META[cat]?.icon} {cat}
            </button>
          ))}
        </div>
      </header>

      <main className="lab-main">
        {groupedByCategory.map(group => (
          <section key={group.name} className="lab-section">
            <div className="lab-section-header">
              <span className="lab-section-icon">{CATEGORY_META[group.name]?.icon}</span>
              <h2 className="lab-section-title">{group.name}</h2>
              <span className="lab-section-count">{group.projects.length}</span>
              <div className="lab-section-line" style={{ background: CATEGORY_META[group.name]?.color || '#666' }} />
            </div>
            <div className="lab-grid">
              {group.projects.map(p => (
                <ProjectCard key={p.name} project={p} />
              ))}
            </div>
          </section>
        ))}

        {filtered.length === 0 && (
          <div className="lab-empty">
            <span style={{ fontSize: '3rem' }}>🔍</span>
            <p>No projects match "{search}"</p>
          </div>
        )}
      </main>

      <footer className="lab-footer">
        <span>codyp.xyz</span>
        <span className="lab-footer-dot">·</span>
        <a href="#" onClick={e => { e.preventDefault(); window.location.hash = '' }}>← Back to main site</a>
      </footer>
    </div>
  )
}
