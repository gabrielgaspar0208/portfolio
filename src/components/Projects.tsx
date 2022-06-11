import '../styles/projects.scss';
import letmeaskProject from '../assets/images/letmeask.png';

function Projects() {
  return (
    <section id="projects">
      <h1>Alguns Projetos</h1>
      <div className="list">
      <div className="list-item">
          <a href="https://letmeask.com.br" target="_blank">           
            <img src={letmeaskProject}alt="" />
             <h5>2021</h5>
             <h2>Letmeask - Rocketseat</h2>        
             <p>Ver Projeto &raquo;&raquo;</p>         
          </a>
        </div>
        <div className="list-item">
          <a href="https://letmeask.com.br" target="_blank">           
            <img src={letmeaskProject}alt="" />
             <h5>2021</h5>
             <h2>Letmeask - Rocketseat</h2>        
             <p>Ver Projeto &raquo;&raquo;</p>         
          </a>
        </div>
        <div className="list-item">
          <a href="https://letmeask.com.br" target="_blank">           
            <img src={letmeaskProject}alt="" />
             <h5>2021</h5>
             <h2>Letmeask - Rocketseat</h2>        
             <p>Ver Projeto &raquo;&raquo;</p>         
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;