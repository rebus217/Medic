import React from 'react';
import './nav-bar.sass'

const NavBar = () => {
  return (
    <ul className="nav-bar">
       <li className="nav-bar__item">HOME</li>
       <li className="nav-bar__item">ABOUT US</li>
       <li className="nav-bar__item">SERVICES</li>
       <li className="nav-bar__item">WHY US?</li>
       <li className="nav-bar__item">SECURITY</li>
       <li className="nav-bar__item">CASE STUDIES</li>
       <li className="nav-bar__item">FAQ'S</li>
       <li className="nav-bar__item">CONTACT US</li>
    </ul>
  );
};

export default NavBar;