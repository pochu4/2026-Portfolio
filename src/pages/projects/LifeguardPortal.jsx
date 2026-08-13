import ProjectDetailLayout from '../../components/ProjectDetailLayout'
import { getProject } from '../../data/projects'

const project = getProject('lifeguard-portal')

export default function LifeguardPortal() {
  return <ProjectDetailLayout project={project} />
}
