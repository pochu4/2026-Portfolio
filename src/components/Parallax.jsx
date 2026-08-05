import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

// Wraps a media element (img/video) in a slightly oversized, overflow-hidden
// frame and drifts it vertically as the frame crosses the viewport, giving
// a sense of depth instead of the image scrolling in lockstep with the
// page. The child is scaled up so the drift never reveals an edge — `scale`
// must leave at least `range` px of margin on each side at the element's
// smallest realistic rendered height, i.e. scale >= 1 + 2*range/heightPx.
// Disabled under prefers-reduced-motion, since it's purely decorative
// movement with no comprehension purpose.
export default function Parallax({
  children,
  range = 28,
  scale = 1.2,
  className = '',
}) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [range, -range],
  )

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y, scale }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  )
}
