import { ArrowUpRight, Code2 } from 'lucide-react'
import type { Project } from '../data/portfolio'

type ProjectCardProps = {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className={`project-card project-card--${project.accent} reveal`}>
      <div className="project-card__visual" aria-hidden="true">
        <div className="project-window">
          <div className="project-window__bar">
            <span />
            <span />
            <span />
          </div>
          <div className="project-window__content">
            <span className="project-index">0{index + 1}</span>
            <Code2 size={34} />
            <div className="code-lines">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
      <div className="project-card__body">
        <div className="project-card__meta">
          <span>{project.category}</span>
          <span>{project.period}</span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="impact-box">
          <ArrowUpRight size={18} />
          <span>{project.impact}</span>
        </div>
        <div className="tag-list" aria-label={`Tecnologías de ${project.name}`}>
          {project.technologies.map((technology) => (
            <span className="tag" key={technology}>
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
