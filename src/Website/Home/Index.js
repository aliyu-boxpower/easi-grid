import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Automate from './Automate'
import Footer from './Footer'

export default function Index() {
  return (
    <div className='bg-white ' >
      <Navbar />
      <Hero />
      <Automate />
      <Footer />
    </div>
  )
}
