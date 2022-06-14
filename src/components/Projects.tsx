import '../styles/projects.scss';
import letmeaskImage from '../assets/images/letmeask.png';
import {Card, CardContent, CardHeader, CardMedia, makeStyles, Theme, Typography} from "@material-ui/core";
import { width } from '@mui/system';
import CardProject from './CardProject';

const useStyles = makeStyles(() => ({
  card: {
    width: '340px',
  },
 
}));

function Projects() {

  const classes = useStyles();

  return (

    <section id="projects">
      <h1>Alguns Projetos</h1>
        <div className="cards">
          <CardProject/>
          <CardProject/>
          <CardProject/>        
        </div>

     
    </section>
  );
}

export default Projects;
