import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/hero/Hero'
import Products from './components/products/Products'
import Categories from './components/categories/Categories'
import Offers from './components/offers/Offers'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <h1 className='text-1xl font-small text-center bg-black text-white'> Haroon Tanveer</h1>
      <Header/>
      <Hero/>
      <Products/>
      <Categories/>
      <Offers/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
