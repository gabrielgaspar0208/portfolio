import gasparIntro from '../assets/images/gaspar-logo.png';
import Typewriter from 'typewriter-effect';
import '../styles/Intro.scss';
import { makeStyles, useTheme } from "@material-ui/core";
import { fontSize } from '@mui/system';
import { useTranslation } from 'react-i18next';
import Intro from '../components/Intro';
import About from '../components/About';
import Social from '../components/Social';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

function Home() {

  const { t } = useTranslation();
  return (
    <main>
      <Intro />
      <About />
      <Social />
      <Skills />
      <Projects />
    </main>
  );
}

export default Home;