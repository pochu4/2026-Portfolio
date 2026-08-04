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
        ) : project.heroImage ? (
          <img
            src={project.heroImage}
            alt={project.title}
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

              {section.blocks ? (
                <div className="mt-8 space-y-10">
                  {section.blocks.map((block, i) => (
                    <SectionBlock key={i} block={block} />
                  ))}
                </div>
              ) : (
                <>
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
                </>
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

// Renders one entry of a section's `blocks` array. Every block stacks
// top-to-bottom — text and images never share a row. Three shapes:
// text (a subheading + paragraphs), images (a full-width 2-up grid, or a
// single contained image when there's only one — see SectionImage), and
// imageText (a subheading + paragraphs with one supporting image directly
// below or above it, used for callouts like Persona/Matrix).
function SectionBlock({ block }) {
  if (block.type === 'images') {
    return <SectionImages items={block.items} />
  }

  if (block.type === 'imageText') {
    return (
      <div className="space-y-6">
        {block.reverse ? (
          <>
            <SectionImage img={block.image} />
            <SectionText block={block} />
          </>
        ) : (
          <>
            <SectionText block={block} />
            <SectionImage img={block.image} />
          </>
        )}
      </div>
    )
  }

  return <SectionText block={block} />
}

// A single supporting image is deliberately contained rather than
// stretched edge-to-edge — at full column width a lone screenshot reads
// as oversized and unbalanced next to the text column beside it. Paired
// images keep the full-width grid since two half-width images together
// already read as an intentional gallery.
function SectionImage({ img }) {
  return (
    <img
      src={img.src}
      alt={img.alt}
      loading="lazy"
      className={`w-full max-w-2xl rounded-sm object-cover ${img.ratio ?? 'aspect-video'}`}
    />
  )
}

function SectionImages({ items }) {
  if (items.length === 1) {
    return <SectionImage img={items[0]} />
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {items.map((img, i) => (
        <img
          key={i}
          src={img.src}
          alt={img.alt}
          loading="lazy"
          className={`w-full rounded-sm object-cover ${img.ratio ?? 'aspect-video'}`}
        />
      ))}
    </div>
  )
}

function SectionText({ block }) {
  return (
    <div className="max-w-2xl space-y-4 leading-relaxed">
      {block.heading && (
        <h3 className="text-lg font-medium tracking-tight md:text-xl">
          {block.heading}
        </h3>
      )}
      <div className="space-y-4">
        {block.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
      {block.list && (
        <ul className="space-y-1">
          {block.list.map((item, i) => (
            <li key={i} className="font-medium">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
