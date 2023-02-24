import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { ContentAbout } from '../components/ContentAbout'

const About = () => {
  return (
    <div className='h-screen flex flex-col justify-between overflow-y-hidden overflow-x-hidden'>
      <Navbar />
      <ContentAbout />
      <Footer />
    </div>
  )
}

export default About