import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Code2, Palette, Menu, X } from 'lucide-react';
import './styles.css';

const A = '/assets/';
const BEHANCE_URL = 'https://www.https://www.behance.net/joanari';
const GITHUB_URL = 'https://github.com/anna11452';

const brands = [
  { name: 'GloMD+', file: 'GloMD+.jpg' },
  { name: 'StudyVantage', file: 'Copy of The Study Vantage Graphics (3).jpg' },
  { name: 'PelzHub Group', file: 'Pelz June (3).jpg' },
  { name: 'BuyAnythingDubai', file: 'JuneJuly BuyAnythingDubai Posts (2).jpg' },
  { name: 'TLS Logistics', file: 'Copy of Untitled.jpg' },
  { name: 'Storhet', file: 'Empowering Businesses Through Secure, Innovative IT Solutions.jpg' },
  { name: 'Tutora', text: true },
  { name: 'Bybittt Cryptogency', text: true },
  { name: 'LaundroMart', text: true },
  { name: 'BuckleUp Ride', file: 'ChatGPT Image Sep 12, 2026, 07_05_37 PM.png' },

];

const designProjects = [
  {
    brand: 'GloMD+',
    type: 'Marketing / Brand',
    title: 'Healthcare content that feels human',
    image: 'GloMD+ (2).jpg',
    desc: 'Social-first creative direction and promotional graphics for a modern healthcare brand.'
  },
  {
    brand: 'StudyVantage',
    type: 'B2B / Education',
    title: 'International education, made approachable',
    image: 'Copy of The Study Vantage Graphics (2).jpg',
    desc: 'Campaign graphics designed to communicate education services with clarity and warmth.'
  },
  {
    brand: 'TLS Logistics',
    type: 'B2B / Logistics',
    title: 'Global logistics, made simple',
    image: 'TLogistics (2).jpg',
    desc: 'Bold social media campaigns built around logistics, shipping and business visibility.'
  },
  {
    brand: 'BuyAnythingDubai',
    type: 'E-commerce / Marketing',
    title: 'Scroll-stopping product campaigns',
    image: 'JuneJuly BuyAnythingDubai Posts (1).jpg',
    desc: 'Product-led social creatives for promotions, launches and seasonal campaigns.'
  },
  {
    brand: 'PelzHub Group',
    type: 'Corporate / Marketing',
    title: 'Everyday moments, professionally branded',
    image: 'Pelz June (1).jpg',
    desc: 'A flexible visual system for service-led communication and social campaigns.'
  },
  {
    brand: 'Cybersecurity',
    type: 'SaaS / B2B',
    title: 'Smart Malware Detection',
    image: 'AI-powered phishing attacks (2).jpg',
    desc: 'B2B SaaS marketing creative translating technical security concepts into clear visual stories.'
  },
];

const devProjects = [
  {
    title: 'Shopora E-commerce',
    tag: 'E-commerce',
    image: 'Screenshot (301).png',
    desc: 'A modern marketplace interface focused on discovery, product browsing and conversion.',
    github: 'https://github.com/anna11452/Shopora-Ecommerce-Site.git'
  },
  {
    title: 'Bank Monitor AI',
    tag: 'SaaS / Brand Monitoring',
    image: 'ChatGPT Image Sep 4, 2026, 01_10_01 PM.png',
    desc: 'AI-powered brand monitoring experience for mentions, sentiment, cases, insights and response workflows.',
    github: 'https://github.com/anna11452/Brand-Monitor-'
  },
  {
    title: 'Buckle Up Ride',
    tag: 'Mobility',
    image: 'ChatGPT Image Sep 12, 2026, 07_05_37 PM.png',
    desc: 'Ride-booking product concept with a strong consumer experience and clean visual system.',
    github: 'https://github.com/anna11452/Buckle-Up-Ride-App'
  },
  {
    title: 'Laundry Service Website',
    tag: 'Service business',
    image: '',
    desc: 'Responsive service-business website concept designed around trust, convenience and clear calls to action.',
    github: GITHUB_URL
  },
];

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="site">

      <header className="nav">
        <a className="wordmark" href="#top">
          Ari<span>Joan</span>
        </a>

        <button
          className="menu"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>

        <nav className={open ? 'open' : ''}>
          {['Work', 'About', 'Skills', 'Contact'].map((x) => (
            <a
              key={x}
              href={'#' + x.toLowerCase()}
              onClick={() => setOpen(false)}
            >
              {x}
            </a>
          ))}

          <a className="nav-cta" href="#contact">
            Let’s work <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main id="top">

        {/* HERO */}
        <section className="hero">

          <div className="hero-kicker">
            <span className="dot" />
            Graphic Designer <i>+</i> Developer
          </div>

          <h1>
            I design <em>brands</em>
            <br />
            and build <em>digital products.</em>
          </h1>

          <p className="hero-copy">
            Visual designer and frontend developer creating identities,
            marketing experiences and responsive products that look sharp
            and work beautifully.
          </p>

          <div className="hero-actions">
            <a className="btn primary" href="#work">
              Explore my work <ArrowUpRight size={18} />
            </a>

            <a className="btn ghost" href="#contact">
              Start a project
            </a>
          </div>

          <div className="hero-meta">
            <span>Based in Nigeria</span>
            <span>Available for selected projects</span>
            <span>Design × Development</span>
          </div>

        </section>

        {/* MOVING BRAND LOGOS */}
        <section
          className="marquee-wrap"
          aria-label="Brands worked with"
        >
          <div className="marquee-label">
            Selected brands
          </div>

          <div className="marquee">
            <div className="track">
              {[...brands, ...brands].map((b, i) => (
                <div className="brand-pill" key={i}>

                  {b.file ? (
                    <img
                      src={A + b.file}
                      alt={b.name}
                    />
                  ) : (
                    <span className="text-logo">
                      {b.name}
                    </span>
                  )}

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DESIGN WORK */}
        <section className="section" id="work">

          <div className="section-head">

            <div>
              <span className="eyebrow">
                01 / DESIGN
              </span>

              <h2>
                Visual work with
                <br />
                <span>something to say.</span>
              </h2>
            </div>

            <a
              className="text-link"
              href={BEHANCE_URL}
              target="_blank"
              rel="noreferrer"
            >
              More on Behance <ArrowUpRight size={17} />
            </a>

          </div>

          <div className="design-grid">

            {designProjects.map((p, i) => (
              <article
                className={'design-card c' + i}
                key={p.title}
              >

                <div className="image-frame">

                  <img
                    src={A + p.image}
                    alt={p.title}
                  />

                  <div className="number">
                    0{i + 1}
                  </div>

                </div>

                <div className="card-info">

                  <div>
                    <span>{p.brand}</span>
                    <small>{p.type}</small>
                  </div>

                  <h3>{p.title}</h3>

                  <p>{p.desc}</p>

                </div>

              </article>
            ))}

          </div>

          <div className="center-link">
            <a
              className="btn ghost"
              href={BEHANCE_URL}
              target="_blank"
              rel="noreferrer"
            >
              View more design work <ArrowUpRight size={17} />
            </a>
          </div>

        </section>

        {/* DEVELOPMENT */}
        <section
          className="dev-section"
          id="development"
        >

          <div className="section dev-head">

            <div>
              <span className="eyebrow">
                02 / DEVELOPMENT
              </span>

              <h2>
                Ideas, turned into
                <br />
                <span>working products.</span>
              </h2>
            </div>

            <a
              className="text-link"
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
            >
              GitHub <Code2 size={17} />
            </a>

          </div>

          <div className="dev-grid">

            {devProjects.map((p) => (
              <article
                className="dev-card"
                key={p.title}
              >

                <div className="dev-image">

                  <img
                    src={A + p.image}
                    alt={p.title}
                  />

                  <span>{p.tag}</span>

                </div>

                <div className="dev-content">

                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                  </div>

                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={
                      'Open ' +
                      p.title +
                      ' on GitHub'
                    }
                  >
                    <Code2 size={19} />
                  </a>

                </div>

              </article>
            ))}

          </div>

        </section>

        {/* ABOUT */}
        <section
          className="split section"
          id="about"
        >

          <div>
            <span className="eyebrow">
              03 / ABOUT
            </span>

            <h2>
              Two disciplines.
              <br />
              <span>One creative mind.</span>
            </h2>
          </div>

          <div className="about-copy">

            <p>
              I work across graphic design and frontend development,
              bringing visual thinking into the build process and
              technical thinking into the design process.
            </p>

            <p>
              From B2B campaigns and SaaS marketing to e-commerce
              experiences and service websites, I enjoy turning a
              rough idea into something people can actually see,
              use and remember.
            </p>

            <div className="mini-stats">

              <div>
                <strong>Design</strong>
                <span>
                  Brand · Marketing · Social · UI
                </span>
              </div>

              <div>
                <strong>Build</strong>
                <span>
                  React · JavaScript · CSS · APIs
                </span>
              </div>

            </div>

          </div>

        </section>

        {/* SKILLS */}
        <section
          className="skills section"
          id="skills"
        >

          <span className="eyebrow">
            04 / CAPABILITIES
          </span>

          <div className="skill-row">

            <div className="skill-icon">
              <Palette />
            </div>

            <div>
              <h3>
                Graphic & Visual Design
              </h3>

              <p>
                B2B · SaaS · Marketing · Brand identity ·
                Social campaigns · Art direction · UI visuals
              </p>
            </div>

          </div>

          <div className="skill-row">

            <div className="skill-icon">
              <Code2 />
            </div>

            <div>
              <h3>
                Frontend Development
              </h3>

              <p>
                React · JavaScript · HTML · CSS ·
                Responsive interfaces · GitHub · API integrations
              </p>
            </div>

          </div>

        </section>

        {/* CONTACT */}
        <section
          className="contact"
          id="contact"
        >

          <div className="contact-inner">

            <span className="eyebrow">
              05 / CONTACT
            </span>

            <h2>
              Have an idea?
              <br />
              <em>Let’s make it real.</em>
            </h2>

            <p>
              For design projects, websites, product interfaces
              or creative collaborations.
            </p>

            <a
              className="contact-email"
              href="mailto:hello@example.com"
            >
              jhoharnah@gmail.com
              <ArrowUpRight />
            </a>

            <div className="socials">

              <a
                href={BEHANCE_URL}
                target="_blank"
                rel="noreferrer"
              >
                Behance
              </a>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a href="mailto:jhoharnah@gmail.com">
                Email
              </a>

            </div>

          </div>

        </section>

      </main>

      <footer>
        <span>© 2026 ARI JOAN</span>
        <span>Designed + built with intention.</span>
      </footer>

    </div>
  );
}

createRoot(
  document.getElementById('root')
).render(<App />);