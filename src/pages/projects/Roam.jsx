import ProjectDetailLayout from '../../components/ProjectDetailLayout'
import { getProject } from '../../data/projects'

const project = getProject('roam')

export default function Roam() {
  return <ProjectDetailLayout project={project} />
}
