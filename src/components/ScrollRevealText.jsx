import { motion, useReducedMotion } from 'framer-motion'
import { EASE_OUT } from '../lib/motion'

// Word-by-word split-text reveal, modeled on motion.dev's split-text example:
// https://motion.dev/examples/vue-split-text — each word springs in
// (opacity + upward y) with a short per-word stagger, fading from muted gray
// to full ink color. Triggered once the text scrolls into view. transform is
// a full string (not the `y` shorthand) so it stays GPU-composited.
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.045 },
  },
}

function getWordVariants(reduce) {
  if (reduce) {
    return {
      hidden: { opacity: 0, color: '#6b6b6b' },
      visible: {
        opacity: 1,
        color: '#0a0a0a',
        transition: { duration: 0.3, ease: EASE_OUT },
      },
    }
  }
  return {
    hidden: { opacity: 0, transform: 'translateY(12px)', color: '#6b6b6b' },
    visible: {
      opacity: 1,
      transform: 'translateY(0px)',
      color: '#0a0a0a',
      transition: { type: 'spring', duration: 0.9, bounce: 0 },
    },
  }
}

export default function ScrollRevealText({ text, className = '' }) {
  const reduce = useReducedMotion()
  const word = getWordVariants(reduce)
  const words = text.split(' ')

  return (
    <motion.p
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
    >
      {words
        .map((w, i) => (
          <motion.span key={i} variants={word} className="inline-block">
            {w}
          </motion.span>
        ))
        .reduce((acc, el, i) => (i === 0 ? [el] : [...acc, ' ', el]), [])}
    </motion.p>
  )
}
