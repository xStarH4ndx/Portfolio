import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { navigation, profile } from '../data/portfolio'

type MobileNavigationProps = {
  activeSection: string
}

export function MobileNavigation({ activeSection }: MobileNavigationProps) {
  const [open, setOpen] = useState(false)

  const handleNavigation = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <header className="mobile-nav">
      <button className="mobile-nav__brand" onClick={() => handleNavigation('inicio')}>
        <span className="brand-mark">BT</span>
        <span>{profile.shortName}</span>
      </button>
      <button
        className="icon-button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-label={open ? 'Cerrar navegación' : 'Abrir navegación'}
      >
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <nav className="mobile-nav__panel">
          {navigation.map((item) => (
            <button
              key={item.id}
              className={activeSection === item.id ? 'mobile-link mobile-link--active' : 'mobile-link'}
              onClick={() => handleNavigation(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  )
}
