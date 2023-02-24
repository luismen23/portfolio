import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { MySkills } from '../components/MySkills'

const Skills = () => {
  return (
    <div className='h-screen flex flex-col justify-between overflow-y-hidden overflow-x-hidden'>
      <Navbar />
      <MySkills/>
      <Footer/>
    </div>
  )
}

export default Skills