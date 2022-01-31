import '../styles/about.scss';
import '@fontsource/roboto/700.css';
import Code from '@material-ui/icons/Code';

function About() {
    return (
        <section className="sobre-title">
            <div className="texto-sobre">
                <h2>Quem eu sou?</h2>
                <p>Opa, o meu nome é Gabriel Gaspar tenho 21 anos e estou cursando Ciência da Computação
                    na <strong>Uniritter</strong>, também estudo outras tecnologias referentes ao Front-end
                    como <strong>UX / UI Design</strong> que estudo através da <a target="_blank" href="https://www.origamid.com/">Origamid!</a>
                </p>
                <Code className="code-icon" />
            </div>
            
        </section>
    );
}

export default About;