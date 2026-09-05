import { useCallback, useEffect, useRef, useState } from "react"

const CLOSE_DURATION = 560

export function useDelayedModal() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [renderedIndex, setRenderedIndex] = useState<number | null>(null)
  const closeTimer = useRef<number | null>(null)

  const open = useCallback((index: number) => {
    if (closeTimer.current !== null) window.clearTimeout(closeTimer.current)
    closeTimer.current = null
    setRenderedIndex(index)
    setOpenIndex(index)
  }, [])

  const close = useCallback(() => {
    setOpenIndex(null)
    if (closeTimer.current !== null) window.clearTimeout(closeTimer.current)
    closeTimer.current = window.setTimeout(() => {
      setRenderedIndex(null)
      closeTimer.current = null
    }, CLOSE_DURATION)
  }, [])

  useEffect(() => () => {
    if (closeTimer.current !== null) window.clearTimeout(closeTimer.current)
  }, [])

  return { openIndex, renderedIndex, open, close }
}
