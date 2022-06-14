import '../styles/skills.scss';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import dolphin from "../assets/images/dolphin.png"

function skills() {
  return (
    <div id="skills">
        <h2>Minha Experiência</h2>
        <p>Quais skills eu tenho?</p>
   
        <div className="skills-container">
          <div className="skills-card">
            <h3>Frontend Skills</h3>               
              <div className="skills-content">
                <article>
                  <AutoAwesomeIcon className="skills-icon"/>
                  <div>
                    <h4>Html</h4>
                    <small>Avançado</small>
                  </div>
                </article>
                <article>
                  <AutoAwesomeIcon className="skills-icon"/>
                  <div>
                    <h4>Css</h4>
                    <small>Intermediário</small>
                  </div>
                </article>
                <article>
                  <AutoAwesomeIcon className="skills-icon"/>
                  <div>
                    <h4>Javascript</h4>
                    <small>Intermediário</small>
                  </div>
                </article>
                <article>
                  <AutoAwesomeIcon className="skills-icon"/>
                  <div>
                    <h4>Typescript</h4>
                    <small>Básico</small>
                  </div>
                </article>
                <article>
                  <AutoAwesomeIcon className="skills-icon"/>
                  <div>
                    <h4>React</h4>
                    <small>Intermediário</small>
                  </div>
                </article>
                <article>
                  <AutoAwesomeIcon className="skills-icon"/>
                  <div>
                    <h4>Git</h4>
                    <small>Intermediário</small>
                  </div>
                </article>
              </div>                     
        </div> 

    {/* FIM DO FRONTEND */}
    <div className="skills-card">
            <h3>Backend Skills</h3>   
            <div className="skills-content">
              <article>
                <AutoAwesomeIcon className="skills-icon"/>
                <div>
                  <h4>Node Js</h4>
                  <small>Básico</small>
                </div>
              </article>
              <article>
                <AutoAwesomeIcon className="skills-icon"/>
                <div>
                  <h4>MongoDb</h4>
                  <small>Básico</small>
                </div>
              </article>
              <article>
                <AutoAwesomeIcon className="skills-icon"/>
                <div>
                  <h4>Php</h4>
                  <small>Básico</small>
                </div>
              </article>
              <article>
                <AutoAwesomeIcon className="skills-icon"/>
                <div>
                  <h4>MySql</h4>
                  <small>Básico</small>
                </div>
              </article>
              <article>
                <AutoAwesomeIcon className="skills-icon"/>
                <div>
                  <h4>Python</h4>
                  <small>Básico</small>
                </div>
              </article>
            </div>                     
          </div> 
        </div>            
      </div>
    );
}

export default skills;