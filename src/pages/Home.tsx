import Navbar from '../components/header/Navbar';
import Intro from '../components/Intro';
import About from '../components/About';
import Skills from '../components/Skills';
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