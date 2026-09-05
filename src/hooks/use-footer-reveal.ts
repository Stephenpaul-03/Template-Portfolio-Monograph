import { useEffect, useState } from "react"

export function useFooterReveal() {
  const [isRevealed, setIsRevealed] = useState(false)

  useEffect(() => {
    const checkFooter = () => {
      const distanceToBottom = document.documentElement.scrollHeight - (window.scrollY + window.innerHeight)
      setIsRevealed(distanceToBottom < window.innerHeight * 0.72)
    }

    checkFooter()
    window.addEventListener("scroll", checkFooter, { passive: true })
    window.addEventListener("resize", checkFooter)
    return () => {
      window.removeEventListener("scroll", checkFooter)
      window.removeEventListener("resize", checkFooter)
    }
  }, [])

  return isRevealed
}
