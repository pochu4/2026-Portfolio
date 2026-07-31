import { Link } from 'react-router-dom'
import Placeholder from './Placeholder'

export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="group block">
      <Placeholder
        ratio="aspect-[4/3]"
        className="transition-opacity group-hover:opacity-80"
      />
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="text-lg">{project.title}</h3>
        <span className="text-muted text-sm">{project.year}</span>
      </div>
      <p className="text-muted mt-1 max-w-lg text-sm leading-relaxed">
        {project.summary}
      </p>
    </Link>
  )
}
