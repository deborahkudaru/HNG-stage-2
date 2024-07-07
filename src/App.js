import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Routes/Home'
import ShoppingCart from './Routes/ShoppingCart'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/shopping-cart' element = {<ShoppingCart />} />
      </Routes>
    </div>
  )
}

export default App