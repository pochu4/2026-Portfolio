import ProjectDetailLayout from '../../components/ProjectDetailLayout'
import { getProject } from '../../data/projects'

const project = getProject('project-two')

export default function ProjectTwo() {
  return <ProjectDetailLayout project={project} />
}
