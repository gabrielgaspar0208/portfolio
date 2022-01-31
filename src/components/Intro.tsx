import react from 'react';
import gasparIntro from '../assets/images/gaspar-logo.png';
import Typewriter from 'typewriter-effect';
import '../styles/Intro.scss';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { makeStyles, useTheme } from "@material-ui/core";
import { keyframes } from '@emotion/react';
import '@fontsource/roboto/700.css';



function Intro() {
  return (
    <div className="intro-container" >
      <img src={gasparIntro} alt="foto na intro" />
      <div className="intro-text">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("Desenvolvedor Front End & UX/UI Designer")
              .start()
              .changeDeleteSpeed(300)

          }}
        />
      </div>
      <ArrowDownwardIcon className="arrow" />
    </div >
  );
}
export default Intro;