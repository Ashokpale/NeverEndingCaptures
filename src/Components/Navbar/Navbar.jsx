import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo-nec3.png'

const Navbar = () => {
  return (
    <nav className='nav-container'>
   <img src={logo} alt="Logo" style={{ width: "8%", height: "5%" }} />
     <ul>
        <li>HOME</li>
        <li>Gallery</li>
        <li>About Us</li>
        <li><button className='btn'>Contact Us</button></li>
     </ul>
    </nav>
  )
}

export default Navbar;