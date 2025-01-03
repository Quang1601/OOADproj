import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { assets } from '../../assets/assets/assets';

const Navbar = () => {
  return (
    <nav className="navbar">  
      <Link to='/'>
      <img src={assets.logo} alt="" className="logo"/></Link>
    </nav>
  );
};

export default Navbar;
