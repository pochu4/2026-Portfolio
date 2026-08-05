import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LocalTime from '../components/LocalTime'
import Parallax from '../components/Parallax'
import ProjectCard from '../components/ProjectCard'
import { RevealGroup, RevealItem } from '../components/Reveal'
import ScrollRevealText from '../components/ScrollRevealText'
import { projects } from '../data/projects'
import { site, testimonials } from '../data/site'
import { EASE_OUT } from '../lib/motion'

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
  const reduce = useReducedMotion()

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
          className="max-w-6xl text-[clamp(2rem,5.5vw,4.25rem)] leading-[1.08] tracking-tight min-[1920px]:text-[5rem] min-[1920px]:tracking-[-0.035em] min-[2560px]:text-[6rem] min-[2560px]:tracking-[-0.045em]"
        >
          Hello, I&apos;m Johann, a{' '}
          <span className="text-accent xl:whitespace-nowrap">
            Marketing &amp; Digital Designer
          </span>{' '}
          who leads with strategy and designs the experience around it.
        </RevealItem>

        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <RevealItem className="max-w-sm min-[1920px]:max-w-md">
            <p className="text-muted flex items-center gap-3 text-sm">
              {site.location}
              <LocalTime />
            </p>
            <p className="text-muted mt-3 text-sm leading-relaxed">
              I come from marketing — brand positioning, campaigns, keeping
              a story consistent across every touchpoint. I just happen to
              also design and build the digital work that story needs, so
              nothing gets lost in handoff.
            </p>
          </RevealItem>
          <RevealItem>
            <Parallax
              range={30}
              scale={1.32}
              className="aspect-[16/9] w-full rounded-sm md:w-72 lg:w-80 min-[1920px]:w-[26rem] min-[2560px]:w-[32rem]"
            >
              <img
                src="/images/home/hero.jpg"
                alt="Johann watching a sunset game at a Hong Kong sports field"
                className="h-full w-full object-cover"
              />
            </Parallax>
          </RevealItem>
        </div>
      </RevealGroup>

      <section className="shell mt-28 md:mt-40">
        <RevealGroup className="grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
          <RevealItem className="max-w-4xl">
            <p className="text-accent text-sm">(Introduction)</p>
            <ScrollRevealText
              className="mt-3 text-[clamp(1.25rem,2.4vw,2.25rem)] leading-snug tracking-tight"
              text="I start with the marketing question — who this is for, what it needs to say, how it should feel — then take it further than most marketers can: designing and building the actual brand and product experience around it."
            />
            <Link to="/about" className="pill mt-8">
              More About Me
            </Link>
          </RevealItem>
          <RevealItem>
            <Parallax
              range={30}
              scale={1.28}
              className="aspect-square w-full rounded-sm md:w-72 lg:w-96"
            >
              <img
                src="/images/home/intro.jpg"
                alt="Johann taking a photo under lanterns in Macau"
                className="h-full w-full object-cover"
              />
            </Parallax>
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
                  <div
                    key={i}
                    role="button"
                    tabIndex={0}
                    onClick={() => selectTestimonial(i)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        selectTestimonial(i)
                      }
                    }}
                    className={`ease-out flex min-w-0 cursor-pointer items-start gap-3 pb-4 text-left transition-[opacity,transform] duration-150 active:scale-[0.98] ${
                      i === activeIndex
                        ? 'opacity-100'
                        : 'opacity-40 hover:opacity-70'
                    }`}
                  >
                    {t.image ? (
                      <img
                        src={t.image}
                        alt={t.name}
                        className="h-9 w-9 shrink-0 rounded-full object-cover"
                      />
                    ) : (
                      <span className="bg-placeholder h-9 w-9 shrink-0 rounded-full" />
                    )}
                    <span className="min-w-0 text-xs leading-tight">
                      <span className="block font-medium">
                        {t.linkedin ? (
                          <a
                            href={t.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="underline-offset-2 hover:underline"
                          >
                            {t.name}
                          </a>
                        ) : (
                          t.name
                        )}
                      </span>
                      <span className="text-muted block">{role}</span>
                      <span className="text-muted block">{company}</span>
                    </span>
                  </div>
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
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeIndex}
                  initial={
                    reduce ? { opacity: 0 } : { opacity: 0, filter: 'blur(2px)' }
                  }
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  exit={
                    reduce ? { opacity: 0 } : { opacity: 0, filter: 'blur(2px)' }
                  }
                  transition={{ duration: 0.2, ease: EASE_OUT }}
                  className="leading-relaxed"
                >
                  {testimonials[activeIndex].quote}
                </motion.p>
              </AnimatePresence>
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
