import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { EASE_OUT } from '../lib/motion'
import { site } from '../data/site'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Resume', to: site.links.resume, external: true },
]

export default function MobileNav({ open, onClose }) {
  const reduce = useReducedMotion()

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: EASE_OUT }}
          className="fixed inset-0 z-40 bg-white/80 backdrop-blur-md md:hidden"
        >
          <div className="shell flex h-full flex-col pt-24 pb-10">
            <p className="eyebrow">(Currently)</p>
            <p className="mt-2 text-lg leading-snug">{site.currently}</p>

            <p className="eyebrow mt-12">(Navigation)</p>
            <nav className="mt-2 flex flex-col">
              {links.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={
                    reduce
                      ? { opacity: 0 }
                      : { opacity: 0, transform: 'translateY(12px)' }
                  }
                  animate={{ opacity: 1, transform: 'translateY(0px)' }}
                  transition={{
                    delay: reduce ? 0 : 0.08 + i * 0.05,
                    duration: reduce ? 0.15 : 0.3,
                    ease: EASE_OUT,
                  }}
                >
                  {link.external ? (
                    <a
                      href={link.to}
                      onClick={onClose}
                      target="_blank"
                      rel="noreferrer"
                      className="block py-1 text-5xl tracking-tight"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.to}
                      onClick={onClose}
                      className="block py-1 text-5xl tracking-tight"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto">
              <p className="eyebrow">(Contact)</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-1 block underline underline-offset-4"
              >
                {site.email}
              </a>
              <p className="text-muted mt-3 text-sm">
                Let&apos;s Work Together!
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
