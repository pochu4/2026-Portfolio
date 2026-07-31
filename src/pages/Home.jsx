import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LocalTime from '../components/LocalTime'
import Placeholder from '../components/Placeholder'
import ProjectCard from '../components/ProjectCard'
import { RevealGroup, RevealItem } from '../components/Reveal'
import ScrollRevealText from '../components/ScrollRevealText'
import { projects } from '../data/projects'
import { site, testimonials } from '../data/site'

// Reading-speed based dwell time: ~300wpm (200ms/word) plus a settle-in
// buffer, clamped so a one-liner isn't instant and an essay doesn't stall.
const READING_MS_PER_WORD = 200
const READING_BASE_MS = 1500
const READING_MIN_MS = 5000
const READING_MAX_MS = 16000

function estimateReadingDuration(text) {
  const words = text.trim().split(/\s+/).filter(Boolean).length
  const ms = READING_BASE_MS + words * READING_MS_PER_WORD
  return Math.min(READING_MAX_MS, Math.max(READING_MIN_MS, ms))
}

const TESTIMONIAL_DURATIONS = testimonials.map((t) =>
  estimateReadingDuration(t.quote),
)
const TESTIMONIAL_OFFSETS = TESTIMONIAL_DURATIONS.reduce((offsets, d, i) => {
  offsets.push(i === 0 ? 0 : offsets[i - 1] + TESTIMONIAL_DURATIONS[i - 1])
  return offsets
}, [])
const TESTIMONIAL_TOTAL = TESTIMONIAL_DURATIONS.reduce((a, b) => a + b, 0)

function splitTitle(title) {
  const at = title.indexOf('@')
  if (at === -1) return [title, '']
  return [title.slice(0, at + 1).trim(), title.slice(at + 1).trim()]
}

export default function Home() {
  const [active, setActive] = useState(0)
  const [cycle, setCycle] = useState({ id: 0, offset: 0 })
  const featured = projects.filter((p) => p.featured)

  useEffect(() => {
    const n = testimonials.length
    const elapsedAtOffset = TESTIMONIAL_OFFSETS[cycle.offset]
    const timers = []
    for (let i = cycle.offset + 1; i < n; i++) {
      timers.push(
        setTimeout(
          () => setActive(i),
          TESTIMONIAL_OFFSETS[i] - elapsedAtOffset,
        ),
      )
    }
    timers.push(
      setTimeout(
        () => {
          setActive(0)
          setCycle((c) => ({ id: c.id + 1, offset: 0 }))
        },
        TESTIMONIAL_TOTAL - elapsedAtOffset,
      ),
    )
    return () => timers.forEach(clearTimeout)
  }, [cycle])

  const selectTestimonial = (i) => {
    setActive(i)
    setCycle((c) => ({ id: c.id + 1, offset: i }))
  }

  const activeIndex = Math.min(active, testimonials.length - 1)

  return (
    <>
      <RevealGroup
        as="section"
        trigger="mount"
        className="shell flex min-h-[calc(100dvh_-_var(--header-h,0px))] flex-col justify-between gap-16 pt-10 pb-14 md:gap-24 md:pt-16 md:pb-20"
      >
        <RevealItem
          as="h1"
          className="max-w-6xl text-[clamp(2rem,5.5vw,4.75rem)] leading-[1.08] tracking-tight"
        >
          Hello, I&apos;m Johann, a{' '}
          <span className="text-accent">Marketing &amp; Brand Designer</span>{' '}
          with a background in UX, and Web Development.
        </RevealItem>

        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <RevealItem className="max-w-sm">
            <p className="text-muted flex items-center gap-3 text-sm">
              {site.location}
              <LocalTime />
            </p>
            <p className="text-muted mt-3 text-sm leading-relaxed">
              Enthusiastic about design, typography, and the dynamic areas of
              interaction design across the web. Specialised in building digital
              products that translate into accessible and functional
              experiences.
            </p>
          </RevealItem>
          <RevealItem>
            <Placeholder
              ratio="aspect-[16/9]"
              className="w-full md:w-72 lg:w-80"
            />
          </RevealItem>
        </div>
      </RevealGroup>

      <section className="shell mt-28 md:mt-40">
        <RevealGroup className="grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
          <RevealItem className="max-w-4xl">
            <p className="text-accent text-sm">(Introduction)</p>
            <ScrollRevealText
              className="mt-3 text-[clamp(1.25rem,2.4vw,2.25rem)] leading-snug tracking-tight"
              text="I design digital experiences that work for the people using them and the teams maintaining them. Start with what users actually need, map flows, test early, build interfaces that don't need manuals."
            />
            <Link to="/about" className="pill mt-8">
              More About Me
            </Link>
          </RevealItem>
          <RevealItem>
            <Placeholder
              ratio="aspect-square"
              className="w-full md:w-72 lg:w-96"
            />
          </RevealItem>
        </RevealGroup>
      </section>

      <section className="shell mt-28 md:mt-40">
        <RevealGroup>
          <RevealItem>
            <h2 className="text-[clamp(1.75rem,3.5vw,3.25rem)] tracking-tight">
              Selected Projects
              <sup className="text-accent ml-1 align-top top-0 text-base">
                ({featured.length})
              </sup>
            </h2>
            <Link
              to="/projects"
              className="mt-2 inline-block underline underline-offset-4"
            >
              View All Projects
            </Link>
          </RevealItem>

          <div className="mt-10 grid gap-x-8 gap-y-14 md:grid-cols-2">
            {featured.map((project) => (
              <RevealItem key={project.slug}>
                <ProjectCard project={project} />
              </RevealItem>
            ))}
          </div>
        </RevealGroup>
      </section>

      <section className="shell mt-28 md:mt-40">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <RevealGroup>
            <RevealItem
              as="h2"
              className="text-[clamp(1.75rem,3.5vw,3.25rem)] tracking-tight"
            >
              Kind Words
              <sup className="text-accent ml-1 align-top top-0 text-base">
                ({testimonials.length})
              </sup>
            </RevealItem>
          </RevealGroup>

          <div>
            <div
              className="grid gap-6"
              style={{
                gridTemplateColumns: `repeat(${testimonials.length}, minmax(0, 1fr))`,
              }}
            >
              {testimonials.map((t, i) => {
                const [role, company] = splitTitle(t.title)
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => selectTestimonial(i)}
                    className={`flex min-w-0 items-start gap-3 pb-4 text-left transition-opacity ${
                      i === activeIndex
                        ? 'opacity-100'
                        : 'opacity-40 hover:opacity-70'
                    }`}
                  >
                    <span className="bg-placeholder h-9 w-9 shrink-0 rounded-full" />
                    <span className="min-w-0 text-xs leading-tight">
                      <span className="block font-medium">{t.name}</span>
                      <span className="text-muted block">{role}</span>
                      <span className="text-muted block">{company}</span>
                    </span>
                  </button>
                )
              })}
            </div>

            <div className="bg-line relative h-[2px] w-full overflow-hidden">
              <span
                key={cycle.id}
                className="bg-accent absolute top-0 left-0 block h-full w-full origin-left"
                style={{
                  animationName: 'testimonial-progress',
                  animationDuration: `${TESTIMONIAL_TOTAL}ms`,
                  animationTimingFunction: 'linear',
                  animationFillMode: 'forwards',
                  animationDelay: `-${TESTIMONIAL_OFFSETS[cycle.offset]}ms`,
                }}
              />
            </div>

            <blockquote className="relative mt-8 px-8">
              <span className="text-accent absolute top-0 left-0 text-xl leading-none">
                &ldquo;
              </span>
              <p className="leading-relaxed">
                {testimonials[activeIndex].quote}
              </p>
              <span className="text-accent absolute top-0 right-0 text-xl leading-none">
                &rdquo;
              </span>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  )
}
