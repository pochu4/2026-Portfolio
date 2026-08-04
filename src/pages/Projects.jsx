import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { categories, projects } from '../data/projects'

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const visible =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.categories.includes(filter))

  return (
    <section className="shell pt-16 md:pt-24">
      <h1 className="text-[clamp(2.5rem,7vw,6rem)] leading-none tracking-tight">
        Projects
        <sup className="text-accent ml-2 align-top top-0 text-[0.3em]">
          ({projects.length})
        </sup>
      </h1>

      <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <p className="max-w-2xl text-[clamp(1.125rem,2vw,2rem)] leading-snug tracking-tight">
          A curated collection of self-led passion projects and client-facing
          work, showcasing my curiosity-fueled, creative, problem solving
          mindset.
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
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {visible.length === 0 && (
        <p className="text-muted mt-12">No projects in this category yet.</p>
      )}
    </section>
  )
}
