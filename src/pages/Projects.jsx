import React from 'react'
import { Navbar } from '../components/Navbar'
import { MyProjects } from '../components/MyProjects'
import { Footer } from '../components/Footer'


const Projects = () => {
  return (
    <div className='h-screen flex flex-col justify-between overflow-y-hidden overflow-x-hidden'>
      <Navbar />
      <MyProjects />
      <Footer/>
    </div>
  )
}

export default Projects