import React from 'react';
import ContactForm from './ContactForm';
import './Homepage.css';
import voon from "../assets/VOON.svg";

import Projects from './Projects';
const HomePage = () => {
  return (
    <div className="home-page">
      <section className="intro">
        <h1 className="h1">Zeit ist kostbar.<br></br>Und hier gut investiert</h1>
        <p>Wir kommen schnell zum Punkt.</p>
        <h1 className="newh">Wir sind die <img src={voon} alt="VOON Werbeagentur" className="voon-logooo" />Werbeagentur:</h1>
      </section>

      <section className="about">
        <p>32 Mitarbeiter. Unternehmergeführt von Frank Vogelsang und Gerhard Nonnenmacher.<br></br>
          In Grevenbroich (zwischen Düsseldorf/Köln) und Mannheim. Fokussiert, schnell, verlässlich. Strategie, Beratung, Konzeption, Kreation, Realisation. Für Markenstrategie, Kreation, Design, Digital und CRM. Alles aus einer Hand.</p>
      </section>

    
      <section className="videos">
        
        <iframe
          width="100%"
          height="700"  
          src="https://www.youtube.com/embed/IcpaiZG86DU"
          title="YouTube video player"
          frameBorder ="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <h3>Unser neustes Werk. Der TV-Spot für den neuen Mitsubishi Eclipse Cross Plug-in Hybrid.</h3>
      </section>
      <section className="contact">
        <ContactForm />
      </section>
      <section className="cases">
        <h3>Unsere neusten Cases</h3>
        <p>Hier schnell und direkt unsere drei letzten Cases. Und wenn die nicht reichen: Auf unserer Übersichtsseite gibt es mehr, sogar nach Kategorie sortierbar. Einfach mal ausprobieren.</p>
       
      </section>
      <Projects/>
      
      
    </div>
  );
};

export default HomePage;
