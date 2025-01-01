import React, { useState } from 'react'
import'./Navbar.css'
import {assets} from '../../assets/assets/frontend_assets/assets'
import{Link} from 'react-router-dom';

const Navbar = ({setShowLogin}) => {
  const[menu,setMenu]= useState("menu");
  
  return (
    <div className='navbar'>
      <Link to='/'>
      <img src={assets.logo} alt="" className="logo"/></Link>
      <ul className="navbar-menu">
        <a href='/' onClick={()=>setMenu("menu")}className={menu==="menu"?"active":""}>menu</a>
        
      </ul>
      
<div className="navbar-right">
    {/* <img src={assets.search_icon} alt=""  /> */}
    
    <div className="navbar-search-icon">
      <Link to='/cart'>
      <img src={assets.basket_icon} alt="" /></Link>
      <div className="dot"></div>
    </div>

</div>
    </div>
  )
}

export default Navbar
