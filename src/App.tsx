import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Quote,
  Sparkles,
} from 'lucide-react'
import { MobileNavigation } from './components/MobileNavigation'
import { ProjectCard } from './components/ProjectCard'
import { SectionHeading } from './components/SectionHeading'
import { Sidebar } from './components/Sidebar'
import {
  certifications,
  education,
  experiences,
  highlights,
  navigation,
  profile,
  projects,
  skillGroups,
} from './data/portfolio'
import { useActiveSection } from './hooks/useActiveSection'

function App() {
  const sectionIds = navigation.map((item) => item.id)
  const activeSection = useActiveSection(sectionIds)

  return (
    <div className="app-shell">
      <Sidebar activeSection={activeSection} />
      <MobileNavigation activeSection={activeSection} />

      <main className="main-content">
        <section className="hero section" id="inicio">
          <div className="hero__stars" aria-hidden="true" />
          <div className="hero__glow hero__glow--one" aria-hidden="true" />
          <div className="hero__glow hero__glow--two" aria-hidden="true" />
          <div className="hero__content">
            <div className="availability-pill">
              <span className="availability-dot" />
              Disponible para nuevas oportunidades
            </div>
            <span className="hero__kicker">Hola, soy</span>
            <h1>
              Bruno <span>Toro Elgueta</span>
            </h1>
            <p className="hero__role">{profile.role}</p>
            <p className="hero__headline">{profile.headline}</p>
            <p className="hero__description">{profile.description}</p>
            <div className="hero__actions">
              <a className="button button--primary" href="#proyectos">
                Ver proyectos <ArrowDown size={18} />
              </a>
              <a className="button button--secondary" href={profile.cvPath} download>
                <Download size={18} /> Descargar CV
              </a>
            </div>
            <div className="hero__socials" aria-label="Perfiles profesionales">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={20} /> LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Github size={20} /> GitHub
              </a>
              <a href={`mailto:${profile.email}`}>
                <Mail size={20} /> Correo
              </a>
            </div>
          </div>
          <a className="scroll-indicator" href="#perfil" aria-label="Ir a perfil">
            <span>Explorar</span>
            <ArrowDown size={18} />
          </a>
        </section>

        <section className="section section--padded" id="perfil">
          <SectionHeading
            eyebrow="Perfil profesional"
            title="Ingeniería, producto e IA con foco en resultados."
            description="Combino pensamiento analítico, comunicación y ejecución técnica para transformar necesidades reales en software útil, mantenible y preparado para crecer."
          />

          <div className="profile-grid">
            <article className="profile-card reveal">
              <Quote className="profile-card__quote" size={38} />
              <p>
                Perseverante, respetuoso y auténtico. Convierto cada desafío en una oportunidad para
                aprender, crecer y aportar valor, construyendo relaciones de confianza y trabajando en
                equipo.
              </p>
              <div className="profile-card__footer">
                <Sparkles size={20} />
                <span>Curiosidad técnica · Colaboración · Mejora continua</span>
              </div>
            </article>

            <div className="highlight-grid">
              {highlights.map((highlight) => (
                <article className="highlight-card reveal" key={highlight.label}>
                  <strong>{highlight.value}</strong>
                  <span>{highlight.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--padded section--alternate" id="experiencia">
          <SectionHeading
            eyebrow="Experiencia"
            title="Experiencia construyendo soluciones de principio a fin."
            description="Trabajo con una mirada integral: requisitos, arquitectura, desarrollo, pruebas, despliegue y acompañamiento a usuarios."
          />

          <div className="timeline">
            {experiences.map((experience) => (
              <article className="timeline-item reveal" key={`${experience.company}-${experience.role}`}>
                <div className="timeline-item__marker">
                  <BriefcaseBusiness size={20} />
                </div>
                <div className="timeline-item__content">
                  <div className="timeline-item__header">
                    <div>
                      <span className="timeline-item__company">{experience.company}</span>
                      <h3>{experience.role}</h3>
                    </div>
                    <div className="timeline-item__date">
                      <span>{experience.period}</span>
                      <span><MapPin size={14} /> {experience.location}</span>
                    </div>
                  </div>
                  <p className="timeline-item__summary">{experience.summary}</p>
                  <ul className="achievement-list">
                    {experience.achievements.map((achievement) => (
                      <li key={achievement}>
                        <CheckCircle2 size={18} />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="tag-list">
                    {experience.technologies.map((technology) => (
                      <span className="tag" key={technology}>{technology}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--padded" id="proyectos">
          <SectionHeading
            eyebrow="Proyectos destacados"
            title="Productos que conectan tecnología con problemas reales."
            description="Una selección de proyectos profesionales y académicos que muestran experiencia en backend, frontend, datos, nube e inteligencia artificial."
          />

          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard project={project} index={index} key={project.name} />
            ))}
          </div>
        </section>

        <section className="section section--padded section--alternate" id="habilidades">
          <SectionHeading
            eyebrow="Stack técnico"
            title="Tecnologías para crear, integrar y desplegar."
            description="Una base fullstack complementada con arquitectura backend, bases de datos, infraestructura e IA aplicada."
          />

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card reveal" key={group.title}>
                <h3>{group.title}</h3>
                <div className="skill-card__list">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--padded" id="formacion">
          <SectionHeading
            eyebrow="Formación"
            title="Base académica y desarrollo de liderazgo."
            description="Formación técnica universitaria complementada con habilidades para colaborar, comunicar y liderar equipos."
          />

          <div className="education-grid">
            <article className="education-card reveal">
              <div className="education-card__icon"><GraduationCap size={28} /></div>
              <span className="eyebrow">Educación superior</span>
              <h3>{education.degree}</h3>
              <p className="education-card__institution">{education.institution}</p>
              <div className="education-card__meta">
                <span>{education.period}</span>
                <span>{education.status}</span>
                <span>{education.location}</span>
              </div>
            </article>

            {certifications.map((certificate) => (
              <article className="education-card reveal" key={certificate.title}>
                <div className="education-card__icon"><Award size={28} /></div>
                <span className="eyebrow">Curso y certificación</span>
                <h3>{certificate.title}</h3>
                <p className="education-card__institution">{certificate.issuer}</p>
                <p>{certificate.description}</p>
                <div className="education-card__meta">
                  <span>{certificate.period}</span>
                  <span>{certificate.distinction}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--padded contact-section" id="contacto">
          <div className="contact-card reveal">
            <div className="contact-card__copy">
              <span className="eyebrow">Contacto</span>
              <h2>Construyamos la próxima solución.</h2>
              <p>
                Estoy interesado en oportunidades donde pueda aportar en desarrollo de software,
                backend, fullstack, automatización o inteligencia artificial aplicada.
              </p>
              <a className="button button--primary" href={`mailto:${profile.email}`}>
                Conversemos <ArrowUpRight size={18} />
              </a>
            </div>
            <div className="contact-card__details">
              <a href={`mailto:${profile.email}`}>
                <span className="contact-icon"><Mail size={20} /></span>
                <span><small>Correo</small>{profile.email}</span>
              </a>
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>
                <span className="contact-icon"><Phone size={20} /></span>
                <span><small>Teléfono</small>{profile.phone}</span>
              </a>
              <div>
                <span className="contact-icon"><MapPin size={20} /></span>
                <span><small>Ubicación</small>{profile.location}</span>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <span>© 2026 {profile.name}</span>
          <span>Diseñado y desarrollado con React + TypeScript + Vite</span>
        </footer>
      </main>
    </div>
  )
}

export default App
