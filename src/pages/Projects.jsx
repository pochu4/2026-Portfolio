import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { categories, projects } from '../data/projects'
import { EASE_OUT } from '../lib/motion'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const reduce = useReducedMotion()

  const visible =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.categories.includes(filter))

  return (
    <section className="shell pt-16 md:pt-24">
      <h1 className="text-[clamp(2.5rem,7vw,6rem)] leading-none tracking-tight lg:tracking-[-0.035em]">
        Projects
        <sup className="text-accent ml-2 align-top top-0 text-[0.3em]">
          ({projects.length})
        </sup>
      </h1>

      <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <p className="max-w-3xl text-[clamp(1.125rem,2vw,2rem)] leading-snug tracking-tight">
          A mix of client work and self-led projects — spanning brand
          identity, marketing, UX/UI, and front-end development.
        </p>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              className={`pill ${
                filter === category
                  ? 'border-accent text-accent hover:border-accent'
                  : ''
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={
                reduce ? { opacity: 0 } : { opacity: 0, transform: 'scale(0.97)' }
              }
              animate={{ opacity: 1, transform: 'scale(1)' }}
              exit={
                reduce ? { opacity: 0 } : { opacity: 0, transform: 'scale(0.97)' }
              }
              transition={{ duration: reduce ? 0.12 : 0.2, ease: EASE_OUT }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {visible.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: EASE_OUT }}
          className="text-muted mt-12"
        >
          No projects in this category yet.
        </motion.p>
      )}
    </section>
  )
}
