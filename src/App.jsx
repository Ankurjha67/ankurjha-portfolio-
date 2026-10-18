import { useEffect, useRef, useState } from 'react'
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Asterisk,
  Check,
  Code2,
  Copy,
  ExternalLink,
  Eye,
  Globe2,
  Layers3,
  Lock,
  Mail,
  MapPin,
  MapPinned,
  Menu,
  MousePointer2,
  MoveUpRight,
  Sparkles,
  Terminal,
  X,
  Box as BoxIcon,
  Compass,
  Cpu,
  Zap,
  Home,
  User
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    id: '01',
    name: 'Garden Residency 3D Map',
    type: 'Interactive 3D Master Plan',
    category: '3D & Maps',
    description: 'A fully interactive 3D spatial layout map built for Meffier Garden Residency. Features real-time plot exploration, sector zoning, boundary visualization, and instant buyer inquiry points.',
    stack: ['Three.js', 'WebGL', 'React', 'Tailwind CSS'],
    year: '2025',
    image: '/3dmap/gardenresidency-3dmap.png',
    link: 'https://gardenresidency.com/3d-map',
    displayUrl: 'gardenresidency.com/3d-map',
    iframe: 'https://gardenresidency.com/3d-map',
    live: true,
  },
  {
    id: '02',
    name: 'Lamose Gratitude 84 — 3D Map',
    type: 'High-Rise 3D Spatial Visualizer',
    category: '3D & Maps',
    description: 'Photorealistic architectural 3D spatial map for Lamose Gratitude 84 luxury residential towers. Allows buyers to navigate tower elevations, view angles, and master layout in 60 FPS.',
    stack: ['Three.js', 'React', 'GSAP Motion', 'Spatial UI'],
    year: '2025',
    image: '/3dmap/lamose-3dmap.png',
    link: 'https://lamose.co.in/3d-map',
    displayUrl: 'lamose.co.in/3d-map',
    iframeBlocked: true,
    live: true,
  },
  {
    id: '03',
    name: 'Osiyan Habitat 3D Map — White Wolf Infra',
    type: 'Township 3D Geospatial Master Plan',
    category: '3D & Maps',
    description: 'Expansive geospatial 3D master plan for Osiyan Habitat township by White Wolf Infra. Incorporates aerial bird-eye navigation, phase sector zoning, road connectivity, and dynamic plot selection.',
    stack: ['Interactive 3D', 'WebGL', 'MapLibre GL', 'Tailwind CSS'],
    year: '2025',
    image: '/3dmap/whitewolfinfra-3dmap.png',
    link: 'https://whitewolfinfra.com/3d-map',
    displayUrl: 'whitewolfinfra.com/3d-map',
    iframe: 'https://whitewolfinfra.com/3d-map',
    live: true,
  },
  {
    id: '04',
    name: 'Lamose Gratitude 84',
    type: 'Luxury Real Estate Platform',
    category: 'Real Estate',
    description: 'Official luxury residential web experience for Lamose Gratitude 84. Features bespoke typography, high-resolution architectural galleries, interactive unit plans, and direct buyer enquiry channels.',
    stack: ['React', 'GSAP Motion', 'Tailwind CSS', 'Responsive UI'],
    year: '2025',
    image: '/website/lamose.png',
    link: 'https://lamose.co.in/',
    displayUrl: 'lamose.co.in',
    iframeBlocked: true,
    live: true,
  },
  {
    id: '05',
    name: 'White Wolf Infra',
    type: 'Corporate & Real Estate Platform',
    category: 'Real Estate',
    description: 'Corporate real estate and infrastructure portal for White Wolf Infra, showcasing residential townships including Osiyan Habitat, master planning milestones, and investor insights.',
    stack: ['Next.js', 'Tailwind CSS', 'Modern UI', 'Enterprise Web'],
    year: '2025',
    image: '/website/whitewolfinfra.png',
    link: 'https://whitewolfinfra.com/',
    displayUrl: 'whitewolfinfra.com',
    iframe: 'https://whitewolfinfra.com/',
    live: true,
  },
  {
    id: '06',
    name: 'Garden Residency Meffier',
    type: 'Residential Project Showcase',
    category: 'Real Estate',
    description: 'High-conversion marketing platform for Meffier Garden Residency. Features interactive project amenities, site master plans, location advantages, gallery, and instant client enquiry paths.',
    stack: ['React', 'Tailwind CSS', 'Conversion UI', 'Lead Capture'],
    year: '2025',
    image: '/website/gardenresidency.png',
    link: 'https://www.gardenresidency.com/',
    displayUrl: 'gardenresidency.com',
    iframe: 'https://www.gardenresidency.com/',
    live: true,
  },
  {
    id: '07',
    name: 'IREED Academy India',
    type: 'Real Estate Institute & EdTech Platform',
    category: 'Real Estate',
    description: 'Official web portal for Institute of Real Estate Education & Entrepreneurship Development (IREED). Features course catalogs, certification curriculum, student admissions, and career placement highlights.',
    stack: ['React', 'Bootstrap', 'Animation UI', 'EdTech'],
    year: '2025',
    image: '/website/ireedindia.png',
    link: 'https://www.ireedindia.com/',
    displayUrl: 'ireedindia.com',
    iframe: 'https://www.ireedindia.com/',
    live: true,
  },
  {
    id: '08',
    name: 'Pinnacle Architects',
    type: 'Architectural Studio Experience',
    category: 'Frontend',
    description: 'Avant-garde editorial portfolio for Pinnacle Architects featuring fluid horizontal GSAP scroll choreography, minimal monochromatic design, full-bleed project spreads, and smooth Lenis physics.',
    stack: ['Next.js', 'GSAP ScrollTrigger', 'Lenis Physics', 'Tailwind CSS'],
    year: '2026',
    image: '/website/pinnacle.png',
    link: 'https://boring-ashen.vercel.app/',
    displayUrl: 'boring-ashen.vercel.app',
    iframe: 'https://boring-ashen.vercel.app/',
    live: true,
  },
]

const skills = [
  ['Frontend', 'HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'TypeScript'],
  ['Styling & UI', 'Tailwind CSS', 'Bootstrap', 'Material UI', 'Ant Design', 'Responsive UI'],
  ['Motion', 'GSAP', 'ScrollTrigger', 'Lenis', 'Swiper', 'Micro-interactions'],
  ['3D & Maps', 'Three.js', 'React Three Fiber', 'MapLibre GL', 'Cesium', 'GLB / GLTF'],
  ['Workflow', 'Git', 'GitHub', 'Figma', 'Performance', 'SEO basics'],
]

function ProjectCardMedia({ project }) {
  const [iframeLoaded, setIframeLoaded] = useState(false)
  const [iframeFailed, setIframeFailed] = useState(false)
  const is3DMap = project.category === '3D & Maps'
  const canUseIframe = Boolean(project.iframe && !project.iframeBlocked && !iframeFailed)

  return (
    <div className="visual visual-image relative overflow-hidden bg-zinc-950">
      {/* High-res actual screenshot (always visible immediately as instant preview & fallback) */}
      {project.image && (
        <img
          src={project.image}
          alt={project.name}
          className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105 ${
            canUseIframe && iframeLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
          loading="lazy"
        />
      )}

      {/* Live interactive iframe viewport */}
      {canUseIframe && (
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-zinc-900">
          <div className="w-[200%] h-[200%] origin-top-left transform scale-50 pointer-events-none select-none">
            <iframe
              src={project.iframe}
              title={project.name}
              className="w-full h-full border-0 bg-white"
              loading="lazy"
              tabIndex={-1}
              onLoad={() => setIframeLoaded(true)}
              onError={() => setIframeFailed(true)}
            />
          </div>
        </div>
      )}

      {/* Subtle bottom gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-black/20 pointer-events-none" />

      {/* Live Badge with domain */}
      <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 bg-zinc-900/90 backdrop-blur-md text-emerald-400 text-[10px] font-mono px-3 py-1 rounded-full border border-emerald-500/30 shadow-md pointer-events-none max-w-[calc(100%-60px)] truncate">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
        <span className="font-semibold tracking-wider uppercase shrink-0">
          {is3DMap ? 'LIVE 3D MAP' : 'LIVE WEBSITE'}
        </span>
        {project.displayUrl && (
          <>
            <span className="text-zinc-600 hidden sm:inline">|</span>
            <span className="text-zinc-300 font-normal hidden sm:inline truncate">
              {project.displayUrl}
            </span>
          </>
        )}
      </div>
    </div>
  )
}


function App() {
  const root = useRef(null)
  const [filter, setFilter] = useState('All')
  const [sent, setSent] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', project: 'Real estate website', message: '' })

  const categories = ['All', '3D & Maps', 'Real Estate', 'Frontend']
  const visibleProjects = projects.filter(p => filter === 'All' || p.category === filter)

  const copyEmail = () => {
    navigator.clipboard.writeText('jhaankur6000@gmail.com')
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2400)
  }

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true, wheelMultiplier: 0.9 })
    let rafId
    const raf = (time) => { lenis.raf(time); rafId = requestAnimationFrame(raf) }
    rafId = requestAnimationFrame(raf)
    lenis.on('scroll', ScrollTrigger.update)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [filter])

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Project enquiry — ${form.project}`)
    const body = encodeURIComponent(`Hi Ankur,\n\nMy name: ${form.name}\nEmail: ${form.email}\nProject type: ${form.project}\n\nProject details:\n${form.message}`)
    window.location.href = `mailto:jhaankur6000@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <div ref={root} className="min-h-screen bg-[#fafafa] text-[#09090b] font-sans antialiased selection:bg-zinc-900 selection:text-white">
            {/* Centered Floating Island Nav Bar (matching reference) */}
      <div className="fixed top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <header className="bg-[#121214]/90 backdrop-blur-xl border border-white/10 rounded-full pl-3 pr-1.5 py-1.5 flex items-center gap-2 shadow-[0_12px_36px_rgba(0,0,0,0.5)] pointer-events-auto">
          <a
            href="#home"
            className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition"
            title="Home"
          >
            <Home size={15} />
          </a>
          <a
            href="#work"
            className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition"
            title="Selected Work"
          >
            <Layers3 size={15} />
          </a>
          <a
            href="#about"
            className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition"
            title="About Me"
          >
            <User size={15} />
          </a>

          <span className="w-px h-4 bg-white/15 mx-1" />

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 bg-white text-zinc-950 text-[12px] font-semibold px-4 py-1.5 rounded-full hover:bg-zinc-200 transition shadow-sm"
          >
            <span>Get in touch</span>
          </a>
        </header>
      </div>

      {/* Main Hero Section (Dukes / Minimal Editorial Style matching reference) */}
      <main>
        <section
          id="home"
          className="relative min-h-[92vh] sm:min-h-screen bg-[#070709] text-white flex flex-col justify-between items-center px-4 sm:px-6 pt-24 pb-8 overflow-hidden select-none"
        >
          {/* Subtle ambient lighting */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_35%,rgba(249,115,22,0.06),transparent_70%)] pointer-events-none" />

          {/* Top Row: Pebble on Left + Kicker Badge on Right */}
          <div className="relative z-10 w-full max-w-4xl flex items-center justify-between px-2 sm:px-6 mb-2">
            {/* Orange Pebble shape on top-left */}
            <span
              className="w-9 h-7 sm:w-11 sm:h-8 rounded-[48%_52%_64%_36%/48%_42%_58%_52%] bg-[#ea580c] shadow-[0_0_25px_rgba(234,88,12,0.55)] inline-block transform -rotate-12 hover:scale-110 transition-transform duration-300"
              aria-hidden="true"
            />

            {/* Badge on top-right */}
            <div className="inline-flex items-center gap-2 bg-zinc-900/90 border border-zinc-800 text-[10px] sm:text-[11px] font-mono tracking-wider text-zinc-300 px-4 py-1.5 rounded-full uppercase shadow-inner">
              FRONTEND SYSTEMS WITH PRODUCT TASTE
            </div>
          </div>

          {/* Center Main Headline & CTA */}
          <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center max-w-5xl px-2 my-auto">
            <h1 className="text-[clamp(36px,5.8vw,80px)] font-bold tracking-tight text-white leading-[1.18] sm:leading-[1.14] select-none">
              {/* Line 1: Hi. I'm [avatar with glowing orange rim] Ankur. */}
              <span className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
                <span>Hi. I'm</span>
                <span className="relative inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-orange-600 via-amber-500 to-orange-400 p-[2.5px] shadow-[0_0_28px_rgba(249,115,22,0.5)] transform hover:scale-105 transition-transform duration-300 align-middle mx-1">
                  <span className="w-full h-full rounded-full overflow-hidden bg-zinc-950 flex items-center justify-center">
                    <img
                      src="/hero.jpg"
                      alt="Ankur"
                      className="w-full h-full object-cover object-top"
                    />
                  </span>
                </span>
                <span>Ankur.</span>
              </span>

              <br />

              {/* Line 2: I design [orange glowing capsule] interfaces */}
              <span className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
                <span>I design</span>
                <span
                  className="inline-block w-12 h-7 sm:w-16 sm:h-9 rounded-full bg-[#f97316] shadow-[0_0_28px_rgba(249,115,22,0.7)] transform hover:scale-110 transition-transform duration-300 align-middle mx-1"
                  aria-hidden="true"
                />
                <span>interfaces</span>
              </span>

              <br />

              {/* Line 3: that help products [badges] grow. */}
              <span className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
                <span>that help</span>
                <span className="border-b-2 border-dotted border-zinc-500 pb-0.5">products</span>
                <span className="inline-flex items-center gap-1.5 align-middle mx-1.5">
                  {/* Badge 1: Dark icon badge */}
                  <span className="w-9 h-7 sm:w-11 sm:h-8 rounded-lg bg-zinc-900 border border-zinc-700/80 inline-flex items-center justify-center text-orange-400 shadow-md">
                    <MoveUpRight size={15} />
                  </span>
                  {/* Badge 2: Real estate thumbnail badge */}
                  <span className="w-10 h-7 sm:w-12 sm:h-8 rounded-lg overflow-hidden border border-white/20 inline-block shadow-md">
                    <img
                      src="/3dmap/gardenresidency-3dmap.png"
                      alt="3D Project Preview"
                      className="w-full h-full object-cover"
                    />
                  </span>
                </span>
                <span>grow.</span>
              </span>
            </h1>

            {/* Connect Button */}
            <div className="pt-6 sm:pt-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-white text-zinc-950 text-sm font-semibold px-8 py-2.5 rounded-full hover:bg-zinc-200 hover:scale-105 transition-all duration-200 shadow-[0_8px_30px_rgba(255,255,255,0.18)]"
              >
                Connect
              </a>
            </div>
          </div>

          {/* Bottom Row: Mouse Scroll Indicator + Text */}
          <div className="relative z-10 w-full flex flex-col items-center justify-center pt-8">
            <a
              href="#work"
              className="flex flex-col items-center gap-2 text-zinc-500 hover:text-zinc-300 transition group"
            >
              <div className="w-4 h-6 rounded-full border border-zinc-600/90 flex items-start justify-center p-1 group-hover:border-zinc-400 transition">
                <span className="w-1 h-1.5 rounded-full bg-zinc-400 group-hover:bg-white animate-bounce" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-zinc-500 group-hover:text-zinc-300 transition uppercase">
                SCROLL TO ENTER SELECTED WORK
              </span>
            </a>
          </div>
        </section>

        {/* Marquee Tape */}
        <section className="marquee-band" aria-label="Specialities">
          <div className="marquee-track">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="marquee-content">
                <span>FRONTEND DEVELOPMENT</span><Asterisk/>
                <span>REAL ESTATE DIGITAL</span><Asterisk/>
                <span>INTERACTIVE 3D</span><Asterisk/>
                <span>CREATIVE MOTION</span><Asterisk/>
              </div>
            ))}
          </div>
        </section>

        {/* 01 / SELECTED WORK */}
        <section id="work" className="work section-wrap section-space">
          <div className="section-heading reveal">
            <div>
              <span className="section-kicker">01 / SELECTED WORK</span>
              <h2>Ideas made <em>tangible.</em></h2>
            </div>
            <p>
              A selection of digital experiences, interface explorations and real-estate projects. Each one engineered for clarity, performance and conversion.
            </p>
          </div>

          <div className="work-toolbar reveal">
            <span className="project-count">
              PROJECT INDEX <b>({String(visibleProjects.length).padStart(2, '0')})</b>
            </span>
            <div className="filters" role="group" aria-label="Filter projects">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setFilter(c)}
                  className={filter === c ? 'filter active' : 'filter'}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className={`project-grid ${filter === '3D & Maps' || filter === 'All' ? 'grid-three-col' : ''}`}>
            {visibleProjects.map((p, i) => (
              <article className="project-card reveal" key={p.id}>
                <a
                  href={p.link || '#contact'}
                  target={p.link ? '_blank' : undefined}
                  rel={p.link ? 'noopener noreferrer' : undefined}
                  className="project-visual-link group block"
                  aria-label={p.link ? `Open live ${p.name} in new tab` : `Discuss ${p.name}`}
                >
                  <ProjectCardMedia project={p} />
                  <span className="project-open">
                    <ArrowUpRight size={18} />
                  </span>
                </a>
                <div className="project-info">
                  <div className="project-info-top">
                    <span className="project-type font-mono font-medium">{p.type}</span>
                    <span className="project-year font-mono">{p.year} / {p.id}</span>
                  </div>
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <div className="flex items-center justify-between gap-3 pt-1 flex-wrap">
                    <div className="project-tags">
                      {p.stack.map((s) => (
                        <span key={s}>{s}</span>
                      ))}
                    </div>
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-zinc-900 hover:text-emerald-600 transition underline underline-offset-4 decoration-zinc-300 hover:decoration-emerald-500"
                      >
                        <span>{p.category === '3D & Maps' ? 'Open Live 3D Map' : 'Open Live Website'}</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="work-note reveal">
            <span className="note-icon">
              <Asterisk size={18} />
            </span>
            <p>
              Have a custom property website or geospatial 3D platform in mind? Let's discuss your project scope, timeline, and conversion goals.
            </p>
            <a href="#contact">
              Discuss a project <ArrowRight size={15} />
            </a>
          </div>
        </section>

        {/* 02 / WHAT I DO (SERVICES) */}
        <section id="services" className="services section-space">
          <div className="section-wrap">
            <div className="section-heading reveal">
              <div>
                <span className="section-kicker">02 / WHAT I DO</span>
                <h2>Built with purpose.<br /><em>Designed to perform.</em></h2>
              </div>
              <p>
                From initial wireframe and art direction to full-stack frontend integration, I build web experiences that captivate visitors and deliver results.
              </p>
            </div>

            <div className="service-list">
              <article className="service-row reveal">
                <span className="service-number font-mono">01</span>
                <div className="service-icon"><Globe2 /></div>
                <div className="service-content">
                  <h3>Websites that win attention</h3>
                  <p>High-end marketing websites and landing pages that communicate brand value clearly and drive buyer action.</p>
                  <div className="service-tags"><span>Business websites</span><span>Landing pages</span><span>Responsive UI</span></div>
                </div>
                <ArrowUpRight className="service-arrow" />
              </article>

              <article className="service-row reveal">
                <span className="service-number font-mono">02</span>
                <div className="service-icon"><Layers3 /></div>
                <div className="service-content">
                  <h3>Real-estate digital platforms</h3>
                  <p>Comprehensive property showcases that blend interactive floor plans, neighborhood intelligence, and seamless lead capture.</p>
                  <div className="service-tags"><span>Property showcases</span><span>Project microsites</span><span>Lead-focused UI</span></div>
                </div>
                <ArrowUpRight className="service-arrow" />
              </article>

              <article className="service-row reveal">
                <span className="service-number font-mono">03</span>
                <div className="service-icon"><BoxIcon /></div>
                <div className="service-content">
                  <h3>Interactive 3D & maps</h3>
                  <p>Immersive 3D architectural models and geospatial maps that give prospective buyers an intuitive sense of place.</p>
                  <div className="service-tags"><span>Three.js</span><span>3D models</span><span>MapLibre GL</span></div>
                </div>
                <ArrowUpRight className="service-arrow" />
              </article>

              <article className="service-row reveal">
                <span className="service-number font-mono">04</span>
                <div className="service-icon"><MousePointer2 /></div>
                <div className="service-content">
                  <h3>Motion-led frontend engineering</h3>
                  <p>Subtle, timed scroll choreography and fluid transitions that elevate design without adding friction or lag.</p>
                  <div className="service-tags"><span>GSAP 3</span><span>ScrollTrigger</span><span>Lenis</span></div>
                </div>
                <ArrowUpRight className="service-arrow" />
              </article>
            </div>
          </div>
        </section>

        {/* 03 / ABOUT */}
        <section id="about" className="about section-wrap section-space">
          <div className="about-left reveal">
            <span className="section-kicker absolute top-6 left-6 font-mono">03 / ABOUT ME</span>
            <div className="about-monogram">A<span>J</span><i>✳</i></div>
            <span className="about-caption font-mono">PRECISION ENGINEERING.<br />THOUGHTFUL CRAFT.</span>
          </div>

          <div className="about-right reveal">
            <h2>Good websites do more than <em>look good.</em></h2>
            <p className="about-lead">
              They make complex offerings easier to navigate, easier to comprehend, and effortless to trust.
            </p>
            <p>
              I'm Ankur Jha, a frontend engineer specializing in luxury digital experiences and real-estate technology. I combine responsive design systems, fluid motion, and 3D visualization to help ambitious projects stand out online.
            </p>
            <p>
              Every detail matters: the rhythm of typography, performance on mobile networks, smooth camera transitions, and the psychological journey from first look to enquiry.
            </p>
            <a className="text-link" href="mailto:jhaankur6000@gmail.com">
              Let's build something extraordinary <ArrowUpRight size={16} />
            </a>
          </div>
        </section>

        {/* 04 / SKILLS & TOOLKIT */}
        <section id="skills" className="skills-section section-space">
          <div className="section-wrap">
            <div className="section-heading reveal">
              <div>
                <span className="section-kicker">04 / MY TOOLKIT</span>
                <h2>The right stack.<br /><em>Proven execution.</em></h2>
              </div>
              <p>
                Tools carefully chosen for performance, maintainability, and expressive capability.
              </p>
            </div>

            <div className="skills-grid">
              {skills.map(([title, ...items], i) => (
                <div className="skill-card reveal" key={title}>
                  <span className="skill-index font-mono">0{i + 1}</span>
                  <h3>{title}</h3>
                  <div className="skill-pills">
                    {items.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 05 / PROCESS */}
        <section className="process section-wrap section-space">
          <div className="section-heading reveal">
            <div>
              <span className="section-kicker">05 / PROCESS</span>
              <h2>Clear workflow.<br /><em>Predictable outcomes.</em></h2>
            </div>
            <p>
              A structured, collaborative approach that ensures speed, clarity, and uncompromising quality.
            </p>
          </div>

          <div className="process-grid">
            {[
              ['01', 'Discover', 'Align on business objectives, user audience, brand positioning, and the core experience strategy.'],
              ['02', 'Architect', 'Define component hierarchy, design tokens, responsive breakpoints, and interaction guidelines.'],
              ['03', 'Develop', 'Build clean, accessible, type-safe code with fluid GSAP animation and optimized assets.'],
              ['04', 'Deliver', 'Rigorous testing across mobile, tablet, and desktop devices for sub-second load times.']
            ].map(([n, t, d]) => (
              <article className="process-card reveal" key={n}>
                <span className="font-mono">{n} <ArrowUpRight size={15} /></span>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 06 / CONTACT */}
        <section id="contact" className="contact-section">
          <div className="section-wrap contact-inner">
            <div className="contact-copy reveal">
              <span className="section-kicker font-mono">06 / GET IN TOUCH</span>
              <h2>Let's build<br />something <em>great.</em></h2>
              <p>
                Have an upcoming real-estate website, 3D interactive application, or creative digital concept? Let's connect and turn it into reality.
              </p>
              <a className="contact-email" href="mailto:jhaankur6000@gmail.com">
                jhaankur6000@gmail.com <ArrowUpRight size={18} />
              </a>
            </div>

            <form className="contact-form reveal" onSubmit={submit}>
              <div className="form-heading font-mono text-xs font-semibold">
                <span>PROJECT INQUIRY</span>
                <span className="form-dot"></span>
              </div>
              <label>
                Your Name
                <input required name="name" value={form.name} onChange={update} placeholder="John Doe" />
              </label>
              <label>
                Email Address
                <input required type="email" name="email" value={form.email} onChange={update} placeholder="john@company.com" />
              </label>
              <label>
                Project Focus
                <select name="project" value={form.project} onChange={update}>
                  <option>Real estate website</option>
                  <option>3D or interactive geospatial map</option>
                  <option>High-performance frontend app</option>
                  <option>Other creative collaboration</option>
                </select>
              </label>
              <label>
                Project Details
                <textarea required name="message" value={form.message} onChange={update} rows="3" placeholder="Tell me about your goals, timeline, and vision…" />
              </label>
              <button className="button button-lime form-submit" type="submit">
                <span>{sent ? 'Sent! Open Email Client' : 'Send Project Inquiry'}</span>
                <ArrowUpRight size={16} />
              </button>
              <p className="form-footnote font-mono">
                <Mail size={12} /> Directly launches your default mail client with formatted details.
              </p>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <a href="#" className="footer-brand font-bold">
          AJ<span>.</span>
        </a>
        <span className="font-mono">CRAFTED WITH PRECISION · ANKUR JHA</span>
        <span className="font-mono">© {new Date().getFullYear()} ALL RIGHTS RESERVED</span>
        <a href="#" className="back-top font-mono">BACK TO TOP ↑</a>
      </footer>
    </div>
  )
}

export default App
