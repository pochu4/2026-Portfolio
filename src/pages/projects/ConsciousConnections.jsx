import ProjectDetailLayout from '../../components/ProjectDetailLayout'
import { getProject } from '../../data/projects'

const project = getProject('conscious-connections')

export default function ConsciousConnections() {
  return <ProjectDetailLayout project={project} />
}
