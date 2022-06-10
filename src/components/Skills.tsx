import '../styles/skills.scss';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

function skills() {
  return (
    <section id="skills">
        <h2>Minha Experiência</h2>
        <p>Quais skills eu tenho?</p>
   
        <div className="container skills-container">
          <div className="skills-frontend">
            <h3>Frontend Skills</h3>   
            <div className="skills-content">
              <article className="skills-details">
                <AutoAwesomeIcon className="skills-icon"/>
                <div>
                  <h4>HTML</h4>
                  <small className="text-light">Avançado</small>
                </div>
              </article>
              <article className="skills-details">
                <AutoAwesomeIcon className="skills-icon"/>
                <div>
                  <h4>CSS</h4>
                  <small className="text-light">Intermediário</small>
                </div>
              </article>
              <article className="skills-details">
                <AutoAwesomeIcon className="skills-icon"/>
                <div>
                  <h4>Javascript</h4>
                  <small className="text-light">Intermediário</small>
                </div>
              </article>
              <article className="skills-details">
                <AutoAwesomeIcon className="skills-icon"/>
                <div>
                  <h4>Typescript</h4>
                  <small className="text-light">Básico</small>
                </div>
              </article>
              <article className="skills-details">
                <AutoAwesomeIcon className="skills-icon"/>
                <div>
                  <h4>React</h4>
                  <small className="text-light">Intermediário</small>
                </div>
              </article>
              <article className="skills-details">
                <AutoAwesomeIcon className="skills-icon"/>
                <div>
                  <h4>Git</h4>
                  <small className="text-light">Intermediário</small>
                </div>
              </article>

            </div>                     
          </div> 

    {/* FIM DO FRONTEND */}
    <div className="skills-frontend">
            <h3>Backend Skills</h3>   
            <div className="skills-content">
              <article className="skills-details">
                <AutoAwesomeIcon className="skills-icon"/>
                <div>
                  <h4>Node JS</h4>
                  <small className="text-light">Básico</small>
                </div>
              </article>
              <article className="skills-details">
                <AutoAwesomeIcon className="skills-icon"/>
                <div>
                  <h4>MongoDB</h4>
                  <small className="text-light">Básico</small>
                </div>
              </article>
              <article className="skills-details">
                <AutoAwesomeIcon className="skills-icon"/>
                <div>
                  <h4>PHP</h4>
                  <small className="text-light">Básico</small>
                </div>
              </article>
              <article className="skills-details">
                <AutoAwesomeIcon className="skills-icon"/>
                <div>
                  <h4>MySQL</h4>
                  <small className="text-light">Básico</small>
                </div>
              </article>
              <article className="skills-details">
                <AutoAwesomeIcon className="skills-icon"/>
                <div>
                  <h4>Python</h4>
                  <small className="text-light">Básico</small>
                </div>
              </article>

            </div>                     
          </div> 
   </div>            
    </section>
    );
}

export default skills;