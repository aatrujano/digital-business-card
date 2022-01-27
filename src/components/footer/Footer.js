// IMPORT STYLES
import './Footer.style.css';

// IMPORT IMAGES
import facebookIcon from '../../images/FacebookIcon.png';
import TwitterIcon from '../../images/TwitterIcon.png';
import GitHubIcon from '../../images/GitHubIcon.png';
import InstagramIcon from '../../images/InstagramIcon.png';

const Footer = () => {
  return (
  <footer className='footer'>
    <img src={TwitterIcon} alt="" />
    <img src={facebookIcon} alt="" />
    <img src={InstagramIcon} alt="" />
    <img src={GitHubIcon} alt="" />
  </footer>
  );
};

export default Footer;
