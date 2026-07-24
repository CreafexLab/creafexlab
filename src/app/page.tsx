import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const socials = [
  { label: "Vladimir Haltakov on X", href: "https://x.com/haltakov", icon: faXTwitter },
  {
    label: "Vladimir Haltakov on LinkedIn",
    href: "https://www.linkedin.com/in/haltakov",
    icon: faLinkedinIn,
  },
  { label: "Vladimir Haltakov on GitHub", href: "https://github.com/haltakov", icon: faGithub },
] as const;

const projects = [
  {
    name: "Simple Photo Gallery",
    label: "Photo stories",
    description:
      "Turn a folder of photos into a thoughtful story you can share with anyone.",
    href: "https://simple.photo",
    accent: "blue",
    icon: "/products/simple-photo-gallery-icon.png",
    screenshot: "/products/simple-photo-gallery.jpg",
    imageAlt: "The Simple Photo Gallery landing page",
  },
  {
    name: "Simple Post",
    label: "Social publishing",
    description:
      "Plan, write, and publish social posts without turning it into a noisy workflow.",
    href: "https://simplepost.social",
    accent: "violet",
    icon: "/products/simple-post-icon.png",
    screenshot: "/products/simple-post.jpg",
    imageAlt: "The Simple Post landing page",
  },
  {
    name: "Simple Muscle",
    label: "AI-native fitness",
    description:
      "A focused workout tracker your AI assistant can understand and update.",
    href: "https://simplemuscle.ai",
    accent: "indigo",
    icon: "/products/simple-muscle-icon.png",
    screenshot: "/products/simple-muscle.jpg",
    imageAlt: "The Simple Muscle landing page",
  },
] as const;

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      className={diagonal ? "arrow arrow--diagonal" : "arrow"}
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <div className="page-shell">
        <header className="site-header">
          <a className="brand" href="#" aria-label="Creafex Lab, home">
            <Image
              className="brand-logo"
              src="/logo-mark.png"
              alt=""
              aria-hidden="true"
              width={256}
              height={256}
              priority
            />
            <span>Creafex Lab</span>
          </a>

          <a
            className="founder-link"
            href="https://haltakov.com"
            target="_blank"
            rel="noreferrer"
          >
            <span className="founder-link__quiet">A company by</span>
            Vladimir Haltakov
            <Arrow diagonal />
          </a>
        </header>

        <section className="hero" aria-labelledby="hero-title">
          <Image
            className="hero-art"
            src="/logo-hero.png"
            alt=""
            aria-hidden="true"
            width={1000}
            height={1187}
            priority
          />
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" />
              Independent product studio
            </p>
            <h1 id="hero-title">
              Creafex <span>Lab</span>
            </h1>
            <a className="text-link" href="#projects">
              See what we&apos;re building
              <Arrow />
            </a>
          </div>

          <div className="signal" aria-hidden="true">
            <span className="signal__start" />
            <svg viewBox="0 0 1200 146" preserveAspectRatio="none">
              <path d="M8 70C190 70 178 22 350 52S535 126 690 84s222-78 502-18" />
            </svg>
            <span className="signal__end" />
          </div>
        </section>

        <section className="projects" id="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <p className="eyebrow">Selected projects</p>
            <h2 id="projects-title">
              Apps that make life <span>simpler</span> with AI.
            </h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <a
                className={`project-card project-card--${project.accent}`}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                key={project.name}
              >
                <div className="project-preview">
                  <Image
                    className="project-screenshot"
                    src={project.screenshot}
                    alt={project.imageAlt}
                    width={1440}
                    height={900}
                  />
                  <span className="project-arrow">
                    <Arrow diagonal />
                  </span>
                </div>
                <div className="project-card__body">
                  <div className="project-label">
                    <Image
                      src={project.icon}
                      alt=""
                      aria-hidden="true"
                      width={24}
                      height={24}
                    />
                    <span>{project.label}</span>
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
                <span className="project-url">
                  {project.href.replace("https://", "")}
                </span>
              </a>
            ))}
          </div>
        </section>

        <section
          className="contact-strip"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="contact-strip__mark" aria-hidden="true">
            VH
          </div>
          <div>
            <h2 id="contact-title">Get in touch</h2>
            <p>
              Got a question, an idea, or some feedback? Message me in the chat
              on haltakov.com.
            </p>
          </div>
          <a
            className="contact-strip__link"
            href="https://haltakov.com"
            target="_blank"
            rel="noreferrer"
          >
            haltakov.com
            <Arrow diagonal />
          </a>
        </section>

        <footer>
          <a className="brand brand--footer" href="#">
            <Image
              className="brand-logo brand-logo--small"
              src="/logo-mark.png"
              alt=""
              aria-hidden="true"
              width={256}
              height={256}
            />
            <span>Creafex Lab</span>
          </a>
          <ul className="social">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              </li>
            ))}
          </ul>
          <span>© {new Date().getFullYear()}</span>
        </footer>
      </div>
    </main>
  );
}
