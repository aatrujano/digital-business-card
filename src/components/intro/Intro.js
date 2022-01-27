// IMPORT STYLES
import './Intro.style.css';
import profilePic from '../../images/profilePic.png';

// FONTAWESOME ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Intro = () => {
  return (
  <div className='intro'>
      <div className='imgContainer'>
          <img className='profilePic' src={profilePic} alt="" />
      </div>
      <h1 className='name'>Laura Smith</h1>
      <h2 className='ocupation'>Frontend Developer</h2>
      <p className='website'>laurasmith.website</p>
      <div className='ctaContainer'>
          <button className='button email'><FontAwesomeIcon icon={faEnvelope} />  Email</button>
          <button className='button linkedin'><FontAwesomeIcon icon={faLinkedin} />  LinkedIn</button>
      </div>
  </div>
  );
};

export default Intro;
