import Lenis from 'lenis'
import { useEffect } from 'react'
import { setLenis } from '../lib/lenis'

// Drives inertia-based smooth scrolling for the whole page. Skipped entirely
// under prefers-reduced-motion, letting the browser's native (instant)
// scroll take over — smooth/eased scrolling is pure feel, not something
// that aids comprehension, so it's one of the things reduced-motion should
// drop rather than just soften.
export default function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (reduce) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    })
    setLenis(lenis)

    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      setLenis(null)
    }
  }, [])

  return null
}
