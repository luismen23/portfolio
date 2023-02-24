import React from 'react'
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { Footer } from '../components/Footer'



const Home = () => {
  return (
    <div className='h-screen flex flex-col justify-between overflow-y-hidden overflow-x-hidden'>
        <Navbar />
        <Hero />
        <Footer/>
        
    </div>
  )
}

export default Home