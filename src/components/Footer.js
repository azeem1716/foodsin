import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faLinkedinIn, 
  faYoutube, 
  faWhatsapp 
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer p-5">
      <div className="container d-flex justify-content-center align-items-center">
        <div>
          <img src={require('../assets/images/google-play.png')} alt="" />
          <img src={require('../assets/images/app-store.png')} alt="" />
        </div>
      </div>

      <div className="container py-3">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <div className="social-icons d-flex justify-content-center align-items-center gap-4">
              <a href="#" className="social-icon facebook" title="Facebook">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="social-icon twitter" title="Twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="social-icon instagram" title="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="social-icon linkedin" title="LinkedIn">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="#" className="social-icon youtube" title="YouTube">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="#" className="social-icon whatsapp" title="WhatsApp">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer-links">
        <div className="d-flex flex-wrap align-items-center justify-content-center text-center">
          <span className="powered-by me-2">Powered by</span>
          <a href="#" className="fw-bold">Indolj</a>
          <span className="separator">|</span>
          <a href="#" className="fw-bold">Privacy Policy</a>
          <span className="separator">|</span>
          <a href="#" className="fw-bold">Faqs</a>
          <span className="separator">|</span>
          <a href="#" className="fw-bold">Reservation & Decoration Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;