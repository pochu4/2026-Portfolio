import { motion } from 'framer-motion'

// Staggered spring entrance, modeled on motion.dev's hero-stagger example:
// https://examples.motion.dev/react/hero-stagger — each item springs up from
// a blurred, faded, slightly-lower position, offset by a short per-item
// stagger. RevealGroup can trigger on mount (hero, first paint) or on
// scroll-into-view (everything below the fold).
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', duration: 0.6, bounce: 0.2 },
  },
}

export function RevealGroup({
  as = 'div',
  children,
  className = '',
  trigger = 'scroll',
  once = true,
  amount = 0.25,
}) {
  const Comp = motion[as]
  const triggerProps =
    trigger === 'mount'
      ? { animate: 'visible' }
      : { whileInView: 'visible', viewport: { once, amount } }

  return (
    <Comp className={className} variants={container} initial="hidden" {...triggerProps}>
      {children}
    </Comp>
  )
}

export function RevealItem({ as = 'div', children, className = '' }) {
  const Comp = motion[as]
  return (
    <Comp className={className} variants={item}>
      {children}
    </Comp>
  )
}
