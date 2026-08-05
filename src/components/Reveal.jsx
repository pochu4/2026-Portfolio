import { motion, useReducedMotion } from 'framer-motion'
import { EASE_OUT } from '../lib/motion'

// Staggered spring entrance, modeled on motion.dev's hero-stagger example:
// https://examples.motion.dev/react/hero-stagger — each item springs up from
// a blurred, faded, slightly-lower position, offset by a short per-item
// stagger. RevealGroup can trigger on mount (hero, first paint) or on
// scroll-into-view (everything below the fold). transform is set as a full
// string (not the `y` shorthand) so the animation stays GPU-composited.
function getContainerVariants(reduce) {
  return {
    hidden: {},
    visible: {
      transition: reduce
        ? { staggerChildren: 0.03 }
        : { staggerChildren: 0.07, delayChildren: 0.05 },
    },
  }
}

function getItemVariants(reduce) {
  if (reduce) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.2, ease: EASE_OUT } },
    }
  }
  return {
    hidden: { opacity: 0, transform: 'translateY(20px)', filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      transform: 'translateY(0px)',
      filter: 'blur(0px)',
      transition: { type: 'spring', duration: 0.6, bounce: 0.2 },
    },
  }
}

export function RevealGroup({
  as = 'div',
  children,
  className = '',
  trigger = 'scroll',
  once = true,
  amount = 0.25,
}) {
  const reduce = useReducedMotion()
  const Comp = motion[as]
  const triggerProps =
    trigger === 'mount'
      ? { animate: 'visible' }
      : { whileInView: 'visible', viewport: { once, amount } }

  return (
    <Comp
      className={className}
      variants={getContainerVariants(reduce)}
      initial="hidden"
      {...triggerProps}
    >
      {children}
    </Comp>
  )
}

export function RevealItem({ as = 'div', children, className = '' }) {
  const reduce = useReducedMotion()
  const Comp = motion[as]
  return (
    <Comp className={className} variants={getItemVariants(reduce)}>
      {children}
    </Comp>
  )
}
