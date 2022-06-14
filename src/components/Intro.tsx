import react from 'react';
import gasparIntro from '../assets/images/gaspar-logo.png';
import Typewriter from 'typewriter-effect';
import '../styles/Intro.scss';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import '@fontsource/roboto/700.css';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  card: {
    width: '340px',
  },
 
}));

function Intro() {

  const classes = useStyles();

  return (
    <div className="intro-container" >
      <img src={gasparIntro} alt="foto na intro" />
      <div className="intro-text">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("Desenvolvedor Front End jr.")
              .start()
              .changeDeleteSpeed(100)

          }}
        />
      </div>
      <ArrowDownwardIcon className="arrow" />
    </div >
  );
}
export default Intro;