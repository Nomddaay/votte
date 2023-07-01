import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className='footer'>
      <div className='footer_container'>
        <div className='section_item_A'>
          <div className='text_logo_footer'>
            <a href='/home_page' style={{textDecoration: 'none'}} onClick={handleScrollToTop}>
              VOTTE
            </a>
          </div>
          <div className='copyright'>
            <span style={{ paddingRight: 5 }}>Copyright </span>
            <FontAwesomeIcon icon={faCopyright} />{" "}
            <span style={{ paddingLeft: 5 }}>
                {new Date().getFullYear()} VOTTE. All Rights
                Reserved.
            </span>
          </div>
        </div>
        <div className='section_item_B'>
          <div className='contact_me_text'>CONTACT ME</div>
          <div className='list_icons'>
            <a 
              href='https://www.facebook.com/nomddaay/' 
              target='_blank'
              rel="noreferrer"
              className='icon'
            >
              <FontAwesomeIcon icon={faFacebook} style={{width: 30, height: 30}}/>
            </a>
            <a 
              href='https://www.instagram.com/nomddaay/' 
              target='_blank'
              rel="noreferrer"
              className='icon'
            >
              <FontAwesomeIcon icon={faInstagram} style={{width: 30, height: 30}}/>
            </a>
            <a 
              href='https://github.com/Nomddaay' 
              target='_blank'
              rel="noreferrer"
              className='icon'
            >
              <FontAwesomeIcon icon={faGithub} style={{width: 30, height: 30}}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer