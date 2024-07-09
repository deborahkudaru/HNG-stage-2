import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Routes/Home'
import ShoppingCart from './Routes/ShoppingCart'
import CheckOut from './Routes/CheckOut'
import Navbar from './components/Navbar'
import NoPage from './Routes/NoPage'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/shopping-cart' element = {<ShoppingCart />} />
        <Route path="/check-out" element ={<CheckOut />} />
        <Route path="/no-page" element ={<NoPage />} />
      </Routes>
    </div>
  )
}

export default App