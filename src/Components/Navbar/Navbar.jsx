import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo-nec3.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu

  return (
    <nav className='nav-container'>
      {/* Logo */}
      <img src={logo} alt="Logo" className="logo" />

      {/* Hamburger Menu Button */}
      <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Navigation Links */}
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>HOME</li>
        <li>Gallery</li>
        <li>About Us</li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
