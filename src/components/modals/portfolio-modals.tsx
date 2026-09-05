import { createPortal } from "react-dom"
import { ArrowUpRight, X } from "lucide-react"
import siteContent from "@/data/content.json"

const { about, work } = siteContent

type PortfolioModalsProps = {
  openProject: number | null
  renderedProject: number | null
  closeProject: () => void
  openDiscipline: number | null
  renderedDiscipline: number | null
  closeDiscipline: () => void
}

export function PortfolioModals({
  openProject,
  renderedProject,
  closeProject,
  openDiscipline,
  renderedDiscipline,
  closeDiscipline,
}: PortfolioModalsProps) {
  const closeOpenModal = () => {
    if (openProject !== null) closeProject()
    if (openDiscipline !== null) closeDiscipline()
  }

  return createPortal(
    <>
      {(openProject !== null || openDiscipline !== null) && <button className="project-modal-backdrop" onClick={closeOpenModal} aria-label="Close details" />}
      <aside className={openProject !== null ? "project-modal is-open" : "project-modal"} aria-live="polite">
        {renderedProject !== null && <><button className="modal-close" onClick={closeProject} aria-label="Close project details"><X /></button><span className="eyebrow">{work.caseStudyLabel} · 0{renderedProject + 1}</span><h3>{work.projects[renderedProject].title}</h3><p>{work.projects[renderedProject].detail}</p><dl><div><dt>{work.contributionLabel}</dt><dd>{work.projects[renderedProject].role}</dd></div><div><dt>{work.toolkitLabel}</dt><dd>{work.projects[renderedProject].stack}</dd></div></dl><a href="#contact">{work.requestLabel} <ArrowUpRight size={16} /></a></>}
      </aside>
      <aside className={openDiscipline !== null ? "project-modal discipline-modal is-open" : "project-modal discipline-modal"} aria-live="polite">
        {renderedDiscipline !== null && <><button className="modal-close" onClick={closeDiscipline} aria-label="Close capability details"><X /></button><span className="eyebrow">{about.eyebrow} · 0{renderedDiscipline + 1}</span><h3>{about.disciplines[renderedDiscipline].title}</h3><p>{about.disciplines[renderedDiscipline].text}</p><a href="#contact">Start a conversation <ArrowUpRight size={16} /></a></>}
      </aside>
    </>,
    document.body,
  )
}
