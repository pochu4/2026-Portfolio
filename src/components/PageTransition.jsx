import { animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Routes, useLocation } from 'react-router-dom'

// A black curtain slides up from the bottom to fully cover the screen, the
// route swaps underneath (hidden), then the curtain continues up and off
// while the new page slides up from the bottom in sync — so the new page
// appears to push the curtain away.
const EASE = [0.76, 0, 0.24, 1]
const STEP = 0.5

export default function PageTransition({ children }) {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  // Tracks the currently-shown route outside of state so the effect below
  // can depend only on real navigations, not on its own setDisplayLocation
  // call (which would otherwise re-trigger and cancel its own tail end).
  const displayLocationRef = useRef(location)
  const overlayRef = useRef(null)
  const pageRef = useRef(null)
  const isFirstRun = useRef(true)

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false
      return
    }
    if (location.pathname === displayLocationRef.current.pathname) return

    let cancelled = false

    async function run() {
      await animate(
        overlayRef.current,
        { y: '0%' },
        { duration: STEP, ease: EASE },
      )
      if (cancelled) return

      window.scrollTo(0, 0)
      displayLocationRef.current = location
      setDisplayLocation(location)
      animate(pageRef.current, { y: '100%' }, { duration: 0 })

      await Promise.all([
        animate(
          overlayRef.current,
          { y: '-100%' },
          { duration: STEP, ease: EASE },
        ),
        animate(pageRef.current, { y: '0%' }, { duration: STEP, ease: EASE }),
      ])
      if (cancelled) return

      animate(overlayRef.current, { y: '100%' }, { duration: 0 })
      pageRef.current.style.transform = ''
    }

    run()
    return () => {
      cancelled = true
    }
  }, [location])

  return (
    <>
      <div ref={pageRef}>
        <Routes location={displayLocation}>{children}</Routes>
      </div>
      <div
        ref={overlayRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[100] bg-black"
        style={{ transform: 'translateY(100%)' }}
      />
    </>
  )
}
