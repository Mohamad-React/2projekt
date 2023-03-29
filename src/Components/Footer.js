import React from 'react';
import './Footer.css';
import voon from "../assets/VOON.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="/">Impressum</a>
          <a href="/">Datenschutz</a>
          <a href="/">AGB</a>
          <a href="/">Cookies</a>
          <a href="/">Kontakt</a>
        </div>
        <div className="footer-info">
          <h3><img src={voon} alt="VOON Werbeagentur" className="voon-logoo" /> Werbeagentur GmbH</h3>
          <div className="footer-address">
            <h4>Grevenbroich:</h4>
            <p>Gut Heckhausen 10</p>
            <p>41516 Grevenbroich</p>
            <p>02182 8217-0</p>
          </div>
          <div className="footer-address">
            <h4>Mannheim:</h4>
            <p>Friedrichsplatz 17</p>
            <p>68165 Mannheim</p>
            <p>0621 490930-00</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
