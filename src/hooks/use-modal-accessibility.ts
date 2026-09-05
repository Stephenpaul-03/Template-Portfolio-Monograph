import { useEffect } from "react"

export function useModalAccessibility(
  projectIsOpen: boolean,
  closeProject: () => void,
  disciplineIsOpen: boolean,
  closeDiscipline: () => void,
) {
  const hasOpenModal = projectIsOpen || disciplineIsOpen

  useEffect(() => {
    if (!hasOpenModal) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return
      if (projectIsOpen) closeProject()
      if (disciplineIsOpen) closeDiscipline()
    }

    window.addEventListener("keydown", closeOnEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", closeOnEscape)
    }
  }, [closeDiscipline, closeProject, disciplineIsOpen, hasOpenModal, projectIsOpen])
}
