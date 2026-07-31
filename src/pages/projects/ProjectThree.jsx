import ProjectDetailLayout from '../../components/ProjectDetailLayout'
import { getProject } from '../../data/projects'

const project = getProject('project-three')

export default function ProjectThree() {
  return <ProjectDetailLayout project={project} />
}
