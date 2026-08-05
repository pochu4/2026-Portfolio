import { animate } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Routes, useLocation } from 'react-router-dom'
import { getLenis } from '../lib/lenis'
import { EASE_IN_OUT, EASE_OUT } from '../lib/motion'

// Resets scroll to the top instantly — bypassing both Lenis's eased scroll
// and the browser's own smooth-scroll behavior — since this only ever runs
// while the curtain fully covers the viewport. Routed through Lenis when
// it's active so the two don't fight over scroll position afterward.
function resetScroll() {
  const lenis = getLenis()
  if (lenis) {
    lenis.scrollTo(0, { immediate: true })
  } else {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }
}

// A black curtain slides up from the bottom to fully cover the screen, the
// route swaps underneath (hidden, scroll reset while covered), then the
// curtain continues up and off while the new page slides up from the
// bottom in sync — so the new page appears to push the curtain away. The
// incoming page also resolves from a soft blur/fade as it settles instead
// of a hard-edged slide, so the arrival reads as one continuous motion
// rather than a mechanical wipe. Under prefers-reduced-motion, the slide is
// replaced with a short opacity crossfade through the same curtain.
const STEP = 0.4
const SETTLE_STEP = 0.55
const REDUCED_STEP = 0.15

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

    const reduce = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    let cancelled = false

    async function run() {
      if (reduce) {
        overlayRef.current.style.transform = 'translateY(0%)'
        overlayRef.current.style.opacity = '0'
        await animate(
          overlayRef.current,
          { opacity: 1 },
          { duration: REDUCED_STEP, ease: EASE_OUT },
        )
        if (cancelled) return

        resetScroll()
        displayLocationRef.current = location
        setDisplayLocation(location)

        await animate(
          overlayRef.current,
          { opacity: 0 },
          { duration: REDUCED_STEP, ease: EASE_OUT },
        )
        if (cancelled) return
        overlayRef.current.style.transform = 'translateY(100%)'
        return
      }

      await animate(
        overlayRef.current,
        { transform: 'translateY(0%)' },
        { duration: STEP, ease: EASE_IN_OUT },
      )
      if (cancelled) return

      resetScroll()
      displayLocationRef.current = location
      setDisplayLocation(location)
      animate(
        pageRef.current,
        { transform: 'translateY(100%)', opacity: 0, filter: 'blur(8px)' },
        { duration: 0 },
      )

      await Promise.all([
        animate(
          overlayRef.current,
          { transform: 'translateY(-100%)' },
          { duration: STEP, ease: EASE_IN_OUT },
        ),
        animate(
          pageRef.current,
          { transform: 'translateY(0%)', opacity: 1, filter: 'blur(0px)' },
          { duration: SETTLE_STEP, ease: EASE_OUT },
        ),
      ])
      if (cancelled) return

      animate(overlayRef.current, { transform: 'translateY(100%)' }, { duration: 0 })
      pageRef.current.style.transform = ''
      pageRef.current.style.opacity = ''
      pageRef.current.style.filter = ''
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
