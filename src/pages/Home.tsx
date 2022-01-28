import gasparIntro from '../assets/images/gaspar-logo.png';
import Typewriter from 'typewriter-effect';
import '../styles/Intro.scss';

function Home() {
    return (
        <div className="intro" >
            <img src={gasparIntro} alt="foto na intro" />
            <div className="intro-text">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString("Desenvolvedor Front Emd & UX/UI Designer")
                            .start();
                    }}
                />
            </div>
        </div >
    );
}

export default Home;