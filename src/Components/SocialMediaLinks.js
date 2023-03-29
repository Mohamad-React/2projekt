import React from 'react';
import { AiOutlineFacebook } from 'react-icons/ai';
import { SlSocialTwitter } from 'react-icons/sl';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineYoutube } from 'react-icons/ai';
import './SocialMediaLinks.css';
import voonLogo from '../assets/voon_10jahre_logo.svg';

const SocialMediaLinks = () => {
  return (
    <div className="social-media-wrapper">
      <div className="social-media-links">
        <a href="https://www.facebook.com/voon.werbeagentur" target="_blank" rel="noreferrer" className="face">
          <AiOutlineFacebook />
        </a>
        <a href="https://twitter.com/Frank_Vogelsang" target="_blank" rel="noreferrer" className="twit">
          <SlSocialTwitter />
        </a>
        <a href="https://www.instagram.com/voon.de/" target="_blank" rel="noreferrer" className="instagram">
          <AiOutlineInstagram />
        </a>
        <a href="https://www.youtube.com/user/VOON4U" target="_blank" rel="noreferrer" className="youtube">
          <AiOutlineYoutube />
        </a>
      </div>
      <div className="voon-anniversary">
        <img src={voonLogo} alt="VOON 10 Jahre" className="image" />
        <span className="anniversary-years">2011-2021</span>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
