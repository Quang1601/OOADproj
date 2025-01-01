import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Recipe from './pages/Recipe/Recipe'
import Order from './pages/Order/Order'

const App = () => {
  const[showLogin,setShowLogin]= useState(false)
  
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>
       
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/order" element={<Order />} />
          
        </Routes>
      </div>
      <Footer />
    </>

  )
}

export default App   
