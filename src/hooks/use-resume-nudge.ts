import { useEffect, useRef, useState } from "react"

export function useResumeNudge() {
  const heroRef = useRef<HTMLElement>(null)
  const [isNudging, setIsNudging] = useState(false)

  useEffect(() => {
    const target = heroRef.current
    if (!target || typeof IntersectionObserver === "undefined") return

    const observer = new IntersectionObserver(
      ([entry]) => setIsNudging(!entry.isIntersecting),
      { threshold: 0.15 },
    )

    observer.observe(target)
    return () => observer.disconnect()
  }, [])

  return { heroRef, isNudging }
}
