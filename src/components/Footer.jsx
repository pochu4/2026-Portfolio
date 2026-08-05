import { site } from '../data/site'
import LocalTime from './LocalTime'

export default function Footer() {
  return (
    <footer className="shell pt-32 pb-8">
      <p className="eyebrow">(Let&apos;s Work Together)</p>
      <a
        href={`mailto:${site.email}`}
        className="mt-2 block text-[clamp(1.75rem,7vw,5.5rem)] leading-none tracking-tight break-all lg:tracking-[-0.035em]"
      >
        {site.email}
      </a>

      <div className="border-line text-muted mt-16 flex flex-col gap-4 border-t pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-x-10 gap-y-2">
          <span>Designed and built by {site.name}</span>
          <span className="flex items-center gap-3">
            {site.location}
            <LocalTime />
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="pill"
          >
            LinkedIn
          </a>
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            className="pill"
          >
            GitHub
          </a>
          <a
            href={site.links.resume}
            target="_blank"
            rel="noreferrer"
            className="pill"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  )
}
