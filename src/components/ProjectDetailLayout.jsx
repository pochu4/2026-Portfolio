import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { getLenis } from '../lib/lenis'
import Placeholder from './Placeholder'
import ProjectCard from './ProjectCard'

// Matches the scroll-mt-28 (7rem) on each section below, so a smooth-scroll
// jump lands a section the same distance under the sticky header that the
// native anchor/scroll-margin fallback already does.
const SECTION_SCROLL_OFFSET = -112

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
      <section className="shell pt-16 md:pt-24">
        <p className="text-accent text-sm">{project.title}</p>
        <h1 className="mt-3 max-w-6xl text-[clamp(1.75rem,4.5vw,4rem)] leading-tight tracking-tight">
          {project.summary}
        </h1>

        <dl className="border-line mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-t pt-6 text-sm sm:grid-cols-4">
          <div>
            <dt className="text-muted">(Scope)</dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {project.scope.split(',').map((item) => (
                <span key={item.trim()} className="pill">
                  {item.trim()}
                </span>
              ))}
            </dd>
          </div>
          <div>
            <dt className="text-muted">(Software)</dt>
            <dd className="mt-1">{project.software}</dd>
          </div>
          {project.team && (
            <div>
              <dt className="text-muted">(Team)</dt>
              <dd className="mt-1">{project.team}</dd>
            </div>
          )}
          <div className="sm:col-start-4">
            <dt className="text-muted">(Year)</dt>
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

      <section className="shell mt-28 grid gap-12 md:mt-40 lg:grid-cols-[180px_1fr]">
        <nav className="hidden self-start lg:sticky lg:top-28 lg:block">
          <ul className="space-y-3 text-sm">
            {sections.map(({ id, heading }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => {
                    const lenis = getLenis()
                    if (!lenis) return
                    e.preventDefault()
                    lenis.scrollTo(`#${id}`, { offset: SECTION_SCROLL_OFFSET })
                  }}
                  className={`flex items-center gap-2.5 transition-colors ${
                    activeSection === id ? 'text-accent' : 'text-muted'
                  }`}
                >
                  <span
                    className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-colors ${
                      activeSection === id ? 'border-accent' : 'border-transparent'
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full transition-colors ${
                        activeSection === id ? 'bg-accent' : 'bg-transparent'
                      }`}
                    />
                  </span>
                  {heading}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-24">
          {sections.map((section, i) => {
            const isLast = i === sections.length - 1
            const heading = (
              <h2 className="text-accent text-[clamp(1.25rem,3.5vw,2.5rem)] tracking-tight">
                {section.heading}
              </h2>
            )
            const blocks = section.blocks && (
              <div className="space-y-12">
                {section.blocks.map((block, i) => (
                  <SectionBlock key={i} block={block} />
                ))}
              </div>
            )

            return (
              <div
                key={section.id}
                id={section.id}
                className={
                  isLast
                    ? 'border-line scroll-mt-28 border-t pt-16'
                    : 'scroll-mt-28'
                }
              >
                {isLast ? (
                  <div className="grid gap-4 sm:grid-cols-[200px_1fr] sm:gap-14">
                    {heading}
                    {blocks}
                  </div>
                ) : (
                  <>
                    {heading}
                    <div className="mt-10">{blocks}</div>
                  </>
                )}
              </div>
            )
          })}

          {sections.length === 0 && (
            <p className="text-muted">Case study content coming soon.</p>
          )}
        </div>
      </section>

      <section className="shell mt-28 md:mt-40">
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
// top-to-bottom. Two shapes: text (a left-column label + right-column
// paragraphs, matching the site's case-study editorial layout) and images
// (a full-width 2-up grid, or a single contained image when there's only
// one). imageText is a text row that also carries one supporting image,
// rendered below the text.
function SectionBlock({ block }) {
  if (block.type === 'images') {
    return <SectionImages items={block.items} count={block.count} />
  }

  return (
    <div className="space-y-8">
      <SectionText block={block} />
      {block.type === 'imageText' && <SectionImage img={block.image} />}
    </div>
  )
}

// A single supporting image is deliberately contained rather than
// stretched edge-to-edge — at full column width a lone screenshot reads
// as oversized and unbalanced next to the text column beside it.
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

// Renders real images (`items`, each `{ src, alt }`) or, when a section's
// imagery isn't ready yet, `count` gray placeholder boxes in the same grid.
function SectionImages({ items, count }) {
  if (items) {
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

  if (!count) return null

  if (count === 1) {
    return <Placeholder ratio="aspect-video" className="w-full max-w-2xl" />
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {Array.from({ length: count }).map((_, i) => (
        <Placeholder key={i} ratio="aspect-video" />
      ))}
    </div>
  )
}

// A subsection label (left column, ~200px) paired with its paragraphs
// (right column, filling the rest of the row). The label column is always
// reserved, even when a block has no heading (a continuation paragraph
// within the same subsection) — otherwise that paragraph would collapse
// back to the left margin instead of staying aligned under the body copy
// above it.
function SectionText({ block }) {
  const isIntroduction = block.heading === 'Introduction'

  return (
    <div className="grid gap-3 sm:grid-cols-[200px_1fr] sm:gap-14">
      <div>
        {block.heading && (
          <h3 className="font-medium tracking-tight md:text-xl">
            {block.heading}
          </h3>
        )}
      </div>
      <div className="space-y-4 leading-relaxed">
        {isIntroduction ? (
          <p className="line-clamp-4">{block.body.join(' ')}</p>
        ) : (
          block.body.map((paragraph, i) => <p key={i}>{paragraph}</p>)
        )}
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
    </div>
  )
}
