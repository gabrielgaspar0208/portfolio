import '../styles/about.scss';
import '@fontsource/roboto/700.css';
import Code from '@material-ui/icons/Code';
import Javascript from '@material-ui/icons/'
import JavascriptIcon from '@material-ui/icons/';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';


function About() {
    return (
      <div className="about-container">
      <section className="sobre-title">
          <div className="texto-sobre">
              <h2>Quem eu sou?</h2>
               <p>Opa, o meu nome é Gabriel Gaspar tenho 21 anos e estou cursando 🎓Analise e Desenvolvimento de Sistemas na
                na <strong>Uniritter</strong>, também estudo outras tecnologias referentes ao Front-end
                como <strong>UX / UI Design</strong> que estudo através da <a target="_blank" href="https://www.origamid.com/">Origamid!</a>
               </p>
                <Code className="code-icon" />
           </div>
        </section>
        <div className="social-container">
                <ul>
                   <li>
                        <a href="https://github.com/gabrielgaspar0208"
                            target="_blank"><GitHubIcon
                                className="social-icon" /></a>
                        <p>GitHub</p>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/umgaspar/"
                            target="_blank"><LinkedInIcon
                                className="social-icon" /></a>
                        <p>LinkedIn</p>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/umgaspar_/"
                            target="_blank"><InstagramIcon
                                className="social-icon" /></a>
                        <p>Instagram</p>
                    </li>
                    <li>                     
                        <a href="https://wa.me/qr/BJUY22DUUHJPL1" target="_blank"><WhatsAppIcon
                            className="social-icon" /></a>
                        <p>WhatsApp</p>
                    </li>
                </ul>
            </div>
      </div>      
    );
}

export default About;