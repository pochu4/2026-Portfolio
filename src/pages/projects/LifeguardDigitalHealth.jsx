import ProjectDetailLayout from '../../components/ProjectDetailLayout'
import { getProject } from '../../data/projects'

const project = getProject('lifeguard-digital-health')

export default function LifeguardDigitalHealth() {
  return <ProjectDetailLayout project={project} />
}
