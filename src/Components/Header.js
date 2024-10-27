import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu open/close

  // Function to handle smooth scrolling
  const handleScroll = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close the menu after clicking an item
  };

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-left">
        <h1 onClick={() => handleScroll("about")} style={{ cursor: 'pointer' }}>
          Monika Bahuguna
        </h1>
      </div>

      <nav className={`header-center ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a onClick={() => handleScroll("courses")}>Courses</a></li>
          <li><a onClick={() => handleScroll("projects")}>Projects</a></li>
          <li><a onClick={() => handleScroll("skills")}>Skills</a></li>
          <li><a onClick={() => handleScroll("contact")}>Contact</a></li>
        </ul>
      </nav>

      <div className="header-right">
      <a href="https://www.linkedin.com/in/monika-bahuguna-6194b6250/" className="get-in-touch-btn">Get in Touch</a>

      </div>

      {/* Hamburger Menu Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>
    </header>
  );
};

export default Header;
