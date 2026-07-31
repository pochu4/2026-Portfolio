import ProjectDetailLayout from '../../components/ProjectDetailLayout'
import { getProject } from '../../data/projects'

const project = getProject('project-four')

export default function ProjectFour() {
  return <ProjectDetailLayout project={project} />
}
