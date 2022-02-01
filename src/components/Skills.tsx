import '../styles/skills.scss';
import wave from '../assets/images/wave.svg';
import { CardActionArea } from '@material-ui/core';
import htmlIcon from '../assets/images/html.svg';

function Skills() {
  return (
    <div className="skills-container">
      <div className="card">
        <img src={htmlIcon} />
        <h2>HTML</h2>
        <p>Avançado: já sei o html semântico</p>
      </div>
      <img src={wave} />
    </div>
  );
}

export default Skills;