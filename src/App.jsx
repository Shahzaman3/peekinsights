import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Insight from './components/Insight'
import Benefit from './components/Benefit'
import Footer from './components/Footer'
import Scroller from './components/Scroller'
import Testimonials from './components/Testimonials'
import Included from './components/Included'
import Pack from './components/Pack'


function App() {

  return (
    <>
    <Header />
    <Hero />
    <Insight />
    <Benefit />
    <Testimonials />
    <Scroller />
    <Included />
    <Pack />
    <Footer />
    </>
  )
}

export default App
