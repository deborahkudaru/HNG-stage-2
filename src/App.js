import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Routes/Home'
import ShoppingCart from './Routes/ShoppingCart'
import CheckOut from './Routes/CheckOut'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/shopping-cart' element = {<ShoppingCart />} />
        <Route path="/check-out" element ={<CheckOut />} />
      </Routes>
    </div>
  )
}

export default App