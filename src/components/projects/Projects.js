// import './Projects.css'
import Project from './project/Project'
import projects from '../../data/projects.json'

function Projects () {
  return (
    <div className='Projects'>
      {projects.map(project => (
        <Project key={project.name} {...project} />
      ))}
    </div>
  )
}

export default Projects
