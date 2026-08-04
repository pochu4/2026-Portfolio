import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import Placeholder from './Placeholder'
import ProjectCard from './ProjectCard'

// Shared template for every project detail page. Each page in
// src/pages/projects/ passes in its own project object from
// data/projects.js — this component just handles the common layout,
// section-scroll tracking, and the related-projects grid.
export default function ProjectDetailLayout({ project }) {
  const [activeSection, setActiveSection] = useState(null)
  const sections = useMemo(() => project.sections ?? [], [project])

  useEffect(() => {
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) setActiveSection(visible[0].target.id)
      },
      { rootMargin: '-20% 0px -70% 0px' },
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sections])

  const more = projects.filter((p) => p.slug !== project.slug).slice(0, 2)

  return (
    <>
      <section className="shell pt-10 md:pt-14">
        <p className="text-accent text-sm">{project.title}</p>
        <h1 className="mt-3 max-w-4xl text-[clamp(1.75rem,4vw,3.5rem)] leading-tight tracking-tight">
          {project.summary}
        </h1>

        <dl
          className={`border-line mt-12 grid grid-cols-1 gap-6 border-t pt-6 text-sm ${
            project.team ? 'sm:grid-cols-4' : 'sm:grid-cols-3'
          }`}
        >
          <div>
            <dt className="text-muted">(scope)</dt>
            <dd className="mt-1">{project.scope}</dd>
          </div>
          <div>
            <dt className="text-muted">(software)</dt>
            <dd className="mt-1">{project.software}</dd>
          </div>
          {project.team && (
            <div>
              <dt className="text-muted">(team)</dt>
              <dd className="mt-1">{project.team}</dd>
            </div>
          )}
          <div>
            <dt className="text-muted">(year)</dt>
            <dd className="mt-1">{project.year}</dd>
          </div>
        </dl>

        {project.heroVideo ? (
          <video
            src={project.heroVideo}
            autoPlay
            loop
            muted
            playsInline
            className="mt-10 aspect-[16/9] w-full rounded-sm object-cover"
          />
        ) : (
          <Placeholder ratio="aspect-[16/9]" className="mt-10" />
        )}
      </section>

      <section className="shell mt-24 grid gap-12 lg:grid-cols-[180px_1fr]">
        <nav className="hidden self-start lg:sticky lg:top-28 lg:block">
          <ul className="space-y-2 text-sm">
            {sections.map(({ id, heading }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`flex items-center gap-2 transition-colors ${
                    activeSection === id ? 'text-accent' : 'text-muted'
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      activeSection === id ? 'bg-accent' : 'bg-transparent'
                    }`}
                  />
                  {heading}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-24">
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="scroll-mt-28">
              <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] tracking-tight">
                {section.heading}
              </h2>
              <div className="mt-5 max-w-2xl space-y-5 leading-relaxed">
                {section.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              {section.images > 0 && (
                <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {Array.from({ length: section.images }).map((_, i) => (
                    <Placeholder key={i} ratio="aspect-video" />
                  ))}
                </div>
              )}
            </div>
          ))}

          {sections.length === 0 && (
            <p className="text-muted">Case study content coming soon.</p>
          )}
        </div>
      </section>

      <section className="shell mt-32">
        <h2 className="text-[clamp(1.75rem,3.5vw,3.25rem)] tracking-tight">
          More Projects
          <sup className="text-accent ml-1 align-top top-0 text-base">
            ({more.length})
          </sup>
        </h2>
        <Link
          to="/projects"
          className="mt-2 inline-block underline underline-offset-4"
        >
          View All Projects
        </Link>

        <div className="mt-10 grid gap-x-8 gap-y-14 md:grid-cols-2">
          {more.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </>
  )
}
