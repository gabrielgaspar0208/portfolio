import emailjs from '@emailjs/browser';
import '../styles/contact.scss';


export default function ContactUs() {

 

    function sendEmail(e: any) {
        e.preventDefault();

    emailjs.sendForm('gmailMessage', 'template_vk6u82a', e.target, 'AbE3qXZlz8vsJEXJ2')

        .then((result) => {
            alert("Mensagem enviada com sucesso! 👍");
           
        }, (error) => {
            alert(error.message)
            
        });
        e.target.reset()

 
    }
    return(
        <div className="contact-title">
          <h1>Contato</h1>
          
            <div className="contact-container">          
            <form onSubmit={sendEmail}>
                    <div className="contact">                       
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" autoFocus className="form-control" required placeholder="Nome" name="name"/>
                        </div>
                        <div className="form-group">
                        <label>Email</label>
                            <input type="email" className="form-control" required placeholder="Seu email" name="email"/>
                        </div>

                        <div className="form-message">
                        <label>Mensagem</label>
                            <textarea className="form-control" id="" required placeholder="Sua mensagem" name="message"></textarea>
                        </div>
                        <div className="form-input">
                            <input type="submit" className="btn btn-info" value="Enviar mensagem"></input>
                        </div>
                    </div>
                </form>
                                
                <div className="contact-info">
                  <div className="info">
                    <h2>Endereço</h2>
                    <p>Gravataí - RS</p>
                    <p>CEP - 94150-220</p>                    
                  </div>
                <div className="info">
                    <h2>Email 	&#38; Telefone</h2>
                    <a href="mailto:gabrielgaspar0208@gmail.com">gabrielgaspar0208@gmail.com</a>
                    <p>(51) 99665-8058</p>
                  </div>                        
                </div>
        
           </div>
        </div>
    )
}