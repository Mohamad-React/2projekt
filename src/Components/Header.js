import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';

import './Header.css';
import logo from '../assets/favicon-96x96.png';

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  
 

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
    
  };


 const changer = () => {
  setShowMenu(!showMenu);
 }
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" className="home">
            <img src={logo} alt="Company Logo" className="logo" />
          </Link>
        </div>
       
        <nav className={`nav ${showMenu ? 'show-menu' : ''}` }  >
        
          <div className="nav-column" onClick={handleMenuToggle}>
            <div className="background" onchange={changer}></div>
            <Link to="/" className="homee">Home</Link>
            <Link to="/agentur">Agentur</Link>
            <Link to="/expertise">Expertise</Link>
          </div>
          <div className="nav-column" onClick={handleMenuToggle}>
            <Link to="/cases">Cases</Link>
            <Link to="/kontakt">Kontakt</Link>
            <Link to="/jobs">Jobs</Link>
          </div>
         
        </nav>
        <div className={`menu-toggle ${showMenu ? 'active' : ''}`} onClick={handleMenuToggle}>
          {showMenu ? (
            <GiHamburgerMenu size={33} color="#fff"  />
          ) : (
            <IoMdClose size={35} color="#fff"  />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
