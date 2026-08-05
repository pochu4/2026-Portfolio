// A single shared Lenis instance, set by SmoothScroll on mount. Other
// modules (PageTransition, anchor nav) read it through this getter instead
// of importing Lenis directly, so they degrade gracefully to native scroll
// when Lenis is off (prefers-reduced-motion).
let instance = null

export function setLenis(lenis) {
  instance = lenis
}

export function getLenis() {
  return instance
}
