import { ArrowUpRight } from "lucide-react"
import siteContent from "@/data/content.json"

const { work } = siteContent

type WorkSectionProps = {
  onOpenProject: (index: number) => void
}

export function WorkSection({ onOpenProject }: WorkSectionProps) {
  return (
    <section className="work projects-grid-section scroll-reveal" id="work" data-reveal>
      <div className="section-heading"><span>{work.eyebrow}</span><span>{work.countLabel}</span></div>
      <div className="projects-grid">
        {work.projects.map((project, index) => (
          <article className="grid-project scroll-reveal" data-reveal key={project.title}>
            <button className={`grid-project-visual ${project.className}`} onClick={() => onOpenProject(index)} aria-label={`Open ${project.title}`}>
              {project.image ? <img src={project.image} alt={project.imageAlt} loading="lazy" /> : <div className="visual-shape" />}
              <span className="grid-project-arrow"><ArrowUpRight /></span>
            </button>
            <div className="grid-project-meta"><span>0{index + 1}</span><span>{project.year}</span><h2>{project.title}</h2><span>{project.type}</span><button className="grid-project-link" onClick={() => onOpenProject(index)}>{work.viewLabel} <ArrowUpRight size={15} /></button></div>
          </article>
        ))}
      </div>
    </section>
  )
}
