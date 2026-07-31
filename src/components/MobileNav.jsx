import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { site } from '../data/site'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Resume', to: site.links.resume, external: true },
]

export default function MobileNav({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
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
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.05, duration: 0.3 }}
                >
                  {link.external ? (
                    <a
                      href={link.to}
                      onClick={onClose}
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
