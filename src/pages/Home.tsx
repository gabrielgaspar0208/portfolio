import Typewriter from 'typewriter-effect';
import '../styles/Intro.scss';
import { makeStyles, useTheme } from "@material-ui/core";
import { fontSize } from '@mui/system';
import Intro from '../components/Intro';
import About from '../components/About';
import Projects from '../components/Projects';
import Navbar from '../components/nav/Navbar';

function Home() {
  return (
    <main>
      <Navbar />
      <Intro />
      <About />
      <Projects />
    </main>
  );
}

export default Home;