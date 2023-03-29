import React from 'react';

import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contact-form">
      <h1>Wir würden gerne mit ihnen in Kontakt treten</h1>
      <form>
        
        <input type="text" id="name" name="name" required placeholder="Name*"/>

        
        <input type="email" id="email" name="email" required placeholder="Email*"/>

       
        <textarea id="message" name="message" required placeholder="Ihre Nachricht*"></textarea>
        
        <p>*Diese Angaben sind erforderlich,damit wir Ihre Anfrage beantworten können </p>
        <button type="submit"><span>Ab die Post</span></button>
      </form>
    </div>
  );
};

export default ContactForm;
