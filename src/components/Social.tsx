import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import '../styles/social.scss';

function Social() {
  return (
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
  );
}

export default Social;