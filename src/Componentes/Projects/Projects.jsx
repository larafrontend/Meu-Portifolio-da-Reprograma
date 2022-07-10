import projects from "../../projects"
import "../Projects/project_style.css"

const Projects = () => {
    return (
        <>
          <h2 className="proj-title">Alguns Projetos</h2>
          <div className="container">
              {projects.map(infos => {
          return (
            <div className="card" key={infos.id}>
              <h3 className="name">{infos.name}</h3>
              <img className="gif" src={infos.poster} alt={infos.name} />
            </div>
          
          )
          })}
          </div>
        </>
    )
}

export default Projects