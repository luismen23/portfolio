import React from 'react'
import { Navbar } from '../components/Navbar'
import { ContactMe } from '../components/ContactMe'
import { Footer } from '../components/Footer'

const Contact = () => {
  return (
    <div className='h-screen flex flex-col justify-between overflow-y-hidden overflow-x-hidden'>
      <Navbar />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default Contact