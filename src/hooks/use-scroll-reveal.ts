import { useEffect } from "react"

export function useScrollReveal() {
  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>("[data-reveal]")
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (reducedMotion) {
      revealItems.forEach((item) => item.classList.add("is-visible"))
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible")
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.14, rootMargin: "0px 0px -8%" })

    revealItems.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])
}
