import Typewriter from 'typewriter-effect';
import '../styles/Intro.scss';
import { makeStyles, useTheme } from "@material-ui/core";
import { fontSize } from '@mui/system';
import Intro from '../components/Intro';
import About from '../components/About';
import Skills from '../components/Skills';
import Navbar from '../components/nav/Navbar';
import Projects from '../components/Projects';

function Home() {
  return (
    <main>
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}

export default Home;