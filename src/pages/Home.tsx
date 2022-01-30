import gasparIntro from '../assets/images/gaspar-logo.png';
import Typewriter from 'typewriter-effect';
import '../styles/Intro.scss';
import { makeStyles, useTheme } from "@material-ui/core";
import { fontSize } from '@mui/system';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Intro from '../components/Intro';

function Home() {

  const { t } = useTranslation();
  return (
    <main>
      <Navbar />
      <Intro />
    </main>
  );
}

export default Home;