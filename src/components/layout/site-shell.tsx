import { useEffect, useRef, type MouseEvent, type ReactNode } from "react"

type SiteShellProps = {
  children: ReactNode
}

export function SiteShell({ children }: SiteShellProps) {
  const cursorGlowRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)
  const pointerTarget = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  const pointerPosition = useRef({ ...pointerTarget.current })

  useEffect(() => {
    let frame = 0
    const tick = () => {
      pointerPosition.current.x += (pointerTarget.current.x - pointerPosition.current.x) * 0.2
      pointerPosition.current.y += (pointerTarget.current.y - pointerPosition.current.y) * 0.2
      const { x, y } = pointerPosition.current
      const transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
      cursorDotRef.current?.style.setProperty("transform", transform)
      cursorGlowRef.current?.style.setProperty("transform", transform)
      frame = window.requestAnimationFrame(tick)
    }

    frame = window.requestAnimationFrame(tick)
    return () => window.cancelAnimationFrame(frame)
  }, [])

  const trackPointer = (event: MouseEvent<HTMLDivElement>) => {
    pointerTarget.current = { x: event.clientX, y: event.clientY }
  }

  return (
    <div className="site-shell" onMouseMove={trackPointer}>
      <div ref={cursorGlowRef} className="global-cursor-glow" aria-hidden="true" />
      <div ref={cursorDotRef} className="global-cursor-dot" aria-hidden="true" />
      {children}
    </div>
  )
}
