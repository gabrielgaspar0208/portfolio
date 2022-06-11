import Typewriter from 'typewriter-effect';
import '../styles/Intro.scss';
import { makeStyles, useTheme } from "@material-ui/core";
import { fontSize } from '@mui/system';
import Intro from '../components/Intro';
import About from '../components/About';
import Skills from '../components/Skills';
import Navbar from '../components/nav/Navbar';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Quote from '../components/quote';
import Footer from '../components/footer/footer';

function Home() {
  return (
    <main>
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Quote />
      <Contact />
      <Footer />
    </main>
  );
}

export default Home;