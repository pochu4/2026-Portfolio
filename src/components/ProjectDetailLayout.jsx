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
      <section className="shell pt-16 md:pt-24 2xl:pt-28">
        <p className="text-accent text-sm">{project.title}</p>
        <div className="mt-3 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h1 className="max-w-6xl text-[clamp(1.75rem,4.5vw,4rem)] leading-tight tracking-tight">
            {project.summary}
          </h1>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-accent ease-out inline-flex shrink-0 items-center justify-center rounded-full px-5 py-2.5 text-sm whitespace-nowrap text-white transition-[opacity,transform] duration-150 hover:opacity-85 active:scale-[0.97]"
            >
              View Live Website
            </a>
          )}
        </div>

        <dl className="border-line mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-t pt-6 text-sm sm:grid-cols-4 2xl:mt-16">
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
            className="mt-10 aspect-[16/9] w-full rounded-sm object-cover 2xl:mt-14"
          />
        ) : project.heroImage ? (
          <img
            src={project.heroImage}
            alt={project.title}
            className="mt-10 aspect-[16/9] w-full rounded-sm object-cover 2xl:mt-14"
          />
        ) : (
          <Placeholder ratio="aspect-[16/9]" className="mt-10 2xl:mt-14" />
        )}
      </section>

      <section className="shell mt-28 grid gap-12 md:mt-40 lg:grid-cols-[180px_1fr] 2xl:mt-48">
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

        <div className="space-y-24 2xl:space-y-32">
          {sections.map((section, i) => {
            const isLast = i === sections.length - 1
            const heading = (
              <h2 className="text-accent text-[clamp(1.25rem,3.5vw,2.5rem)] tracking-tight">
                {section.heading}
              </h2>
            )
            const blocks = section.blocks && (
              <div className="space-y-12 2xl:space-y-16">
                {section.blocks.map((block, i) => (
                  <SectionBlock key={i} block={block} isFirst={i === 0} />
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
                    <div className="mt-10 2xl:mt-14">{blocks}</div>
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

      <section className="shell mt-28 md:mt-40 2xl:mt-48">
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
function SectionBlock({ block, isFirst }) {
  if (block.type === 'images') {
    return (
      <SectionImages items={block.items} count={block.count} full={block.full} />
    )
  }

  if (block.type === 'stats') {
    return <SectionStats items={block.items} />
  }

  return (
    <div className="space-y-8">
      <SectionText block={block} isFirst={isFirst} />
      {block.type === 'imageText' && <SectionImage img={block.image} />}
    </div>
  )
}

// A bordered row of headline numbers (e.g. campaign results) — each stat
// pairs a large accent-colored value with a short label underneath.
function SectionStats({ items }) {
  return (
    <div className="border-line grid grid-cols-2 gap-x-6 gap-y-8 rounded-sm border p-8 sm:grid-cols-4">
      {items.map((stat, i) => (
        <div key={i}>
          <p className="text-accent text-[clamp(2rem,4.5vw,3.5rem)] leading-none tracking-tight">
            {stat.value}
          </p>
          <p className="mt-3 text-sm leading-snug">{stat.label}</p>
        </div>
      ))}
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

// Renders real images (`items`, each `{ src, alt, caption? }`) or, when a
// section's imagery isn't ready yet, `count` gray placeholder boxes in the
// same grid. An item's `caption` (e.g. "(Before)") renders muted and
// centered directly above its image. `full` stretches a lone image to the
// full content width (matching a 2-up row) instead of the usual contained
// single-image treatment — for wide composite screenshots that read as
// undersized when capped at max-w-2xl.
function SectionImages({ items, count, full }) {
  if (items) {
    if (items.length === 1) {
      if (full) {
        return (
          <img
            src={items[0].src}
            alt={items[0].alt}
            loading="lazy"
            className={`w-full rounded-sm object-cover ${items[0].ratio ?? 'aspect-video'}`}
          />
        )
      }
      return <SectionImage img={items[0]} />
    }

    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map((img, i) => (
          <div key={i}>
            {img.caption && (
              <p className="text-muted mb-2 text-center text-sm">
                {img.caption}
              </p>
            )}
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className={`w-full rounded-sm object-cover ${img.ratio ?? 'aspect-video'}`}
            />
          </div>
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
// (right column, filling the rest of the row). The label column is
// reserved even when a block has no heading, so a continuation paragraph
// (following a headed block within the same subsection) stays aligned
// under the body copy above it instead of collapsing back to the left
// margin. The one exception is a no-heading block that opens a section —
// with no subheading above it to align under, reserving that empty column
// just reads as a stray indent, so it renders flush with the section
// heading instead.
function SectionText({ block, isFirst }) {
  const isIntroduction = block.heading === 'Introduction'
  const flush = isFirst && !block.heading

  const content = (
    <div className="space-y-4 leading-relaxed">
      {isIntroduction ? (
        <p className="line-clamp-4">{block.body.join(' ')}</p>
      ) : (
        block.body.map((paragraph, i) => <p key={i}>{paragraph}</p>)
      )}
      {block.list && <SectionList list={block.list} style={block.listStyle} />}
      {block.afterList &&
        block.afterList.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
      {block.cta && (
        <div className="pt-2">
          <a
            href={block.cta.url}
            target="_blank"
            rel="noreferrer"
            className="bg-accent ease-out inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm whitespace-nowrap text-white transition-[opacity,transform] duration-150 hover:opacity-85 active:scale-[0.97]"
          >
            {block.cta.label}
          </a>
        </div>
      )}
    </div>
  )

  if (flush) return content

  return (
    <div className="grid gap-3 sm:grid-cols-[200px_1fr] sm:gap-14">
      <div>
        {block.heading && (
          <h3 className="font-medium tracking-tight md:text-xl">
            {block.heading}
          </h3>
        )}
      </div>
      {content}
    </div>
  )
}

// Renders a block's `list`. Default (no `listStyle`) keeps the original
// treatment — every item bold, no marker — for sections written that way.
// `listStyle: 'bullet'` draws a real bullet marker per item, and bolds only
// an item's `label` (when items are `{ label, text }` objects) rather than
// the whole line. `listStyle: 'plain'` renders items as-is with no marker
// and no bold, for lists that already carry their own marker (e.g. "1. ...").
function SectionList({ list, style }) {
  if (style === 'bullet') {
    return (
      <ul className="list-disc space-y-2 pl-5 marker:text-muted">
        {list.map((item, i) => (
          <li key={i}>
            {typeof item === 'string' ? (
              item
            ) : (
              <>
                <span className="font-medium">{item.label}</span>
                {item.text}
              </>
            )}
          </li>
        ))}
      </ul>
    )
  }

  if (style === 'plain') {
    return (
      <ul className="space-y-1">
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    )
  }

  return (
    <ul className="space-y-1">
      {list.map((item, i) => (
        <li key={i} className="font-medium">
          {item}
        </li>
      ))}
    </ul>
  )
}
