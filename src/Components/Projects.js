import React from 'react';
import styles from './projects.module.css';
import logo1 from '../assets/bilder/220224_ki_mailing_vorschau_kachel_003.jpg';
import logo3 from '../assets/bilder/adler_markenstrategie_vorschaubild02_003.jpg';
import logo2 from '../assets/bilder/guerilla-kampagne_003.jpg';
import arrow from "../assets/arrow.svg"
import { Link } from 'react-router-dom';
import SocialMediaLinks from './SocialMediaLinks';

const Projects = () => {
  return (
    <div className={styles.projects}>
      
      <div className={styles.project}>
        <img src={logo1} alt="Akquise-Mailing mit KI - Mitsubishi" />
        <p className={styles.p}>Akquise-Mailing mit KI <br></br> <span>MITSUBISHI</span></p>
      </div>
      <div className={styles.project}>
        <img src={logo3} alt="Guerilla-Kampagne - Mitsubishi" />
        <p className={styles.p}>Guerilla-Kampagne <br></br> <span>MITSUBISHI</span></p>
      </div>
      <div className={styles.project}>
        <img src={logo2} alt="Markenstrategie - Adler Mannheim" />
        <p className={styles.p}>Markenstrategie <br></br> <span>ADLER MANHEIM</span></p>
      </div>

     <div className={styles.case}><Link to="/" className={styles.caseslink}><span>Alle Cases</span><img src={arrow} alt="arrow" className="arrow" /></Link></div> 



      <div className={styles.videocontainer}>
        <iframe
          title="YouTube Video"
          src="https://www.youtube.com/embed/GTOcZ2K47X4"
          frameBorder ="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

      </div>

      <hr className={styles.customline} />
      <SocialMediaLinks />
      <hr className={styles.customline} />
    </div>

  );
};

export default Projects;
