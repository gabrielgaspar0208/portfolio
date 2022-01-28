import gasparIntro from '../assets/images/gaspar-logo.png';
import '../styles/Intro.scss';
function Home() {
    return (
        <div className="intro">
            <img src={gasparIntro} alt="foto na intro" />
            <div className="intro-text">
                <h1>Desenvolvedor Front End & UX/UI Designer</h1>
                <p>(Iniciante)</p>
            </div>
        </div>
    );
}

export default Home;