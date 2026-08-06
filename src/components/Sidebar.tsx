import { Github, Linkedin, Mail } from 'lucide-react'
import avatar from '../assets/avatar-pixel.jpg'
import { navigation, profile } from '../data/portfolio'

type SidebarProps = {
  activeSection: string
}

export function Sidebar({ activeSection }: SidebarProps) {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <aside className="sidebar" aria-label="Navegación principal">
      <button className="sidebar__identity" onClick={() => scrollToSection('inicio')}>
        <span className="avatar-shell">
          <img src={avatar} alt="Avatar ilustrado de Bruno Toro" />
        </span>
        <span className="sidebar__name">{profile.shortName}</span>
        <span className="sidebar__role">{profile.role}</span>
      </button>

      <nav className="sidebar__nav">
        {navigation.map((item) => (
          <button
            key={item.id}
            className={activeSection === item.id ? 'nav-link nav-link--active' : 'nav-link'}
            onClick={() => scrollToSection(item.id)}
          >
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar__socials">
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <Linkedin size={18} />
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <Github size={18} />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Correo electrónico">
          <Mail size={18} />
        </a>
      </div>
    </aside>
  )
}
