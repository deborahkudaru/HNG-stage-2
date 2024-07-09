import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Routes/Home'
import ShoppingCart from './Routes/ShoppingCart'
import CheckOut from './Routes/CheckOut'
import Header from './components/Header'
import NoPage from './Routes/NoPage'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Header />
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