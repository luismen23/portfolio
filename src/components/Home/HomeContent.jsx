import { Header } from './Header'
import React from 'react'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { BackgroundCircles } from './BackgroundCircles'
// import 'react-typewriting-effect/dist/index.css'

export function HomeContent () {
  return (
    <div className=' text-white items-center flex  flex-col
      gap-12'
    >
      <Header />
      <div className='flex flex-col text-center justify-evenly md:text-start gap-4 sm:gap-12 '>
        <div className='z-10 w-[250px] sm:w-[300px] md:w-[700px] xl:w-[900px]'>
          <motion.div className='flex flex-col gap-8 tracking-widest md:w-[500px]' initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }}>
            <h1 className='text-2xl mx-auto max-w-[220px] sm:max-w-[300px] sm:text-3xl md:text-6xl md:max-w-full'>Transforming ideas into
              <span className='text-yellow'>
                <Typewriter
                  loop
                  cursor
                  cursorColor='white'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  words={[' Digital Reality', ' Real Solutions']}
                />
              </span>
            </h1>
            <p className='text-sm sm:text-base'>Front-end web developer, passionate about using the latest technologies to create amazing things. Let's bring your vision to life. Contact and let’s build a new world together. Are you ready?</p>
          </motion.div>
        </div>
        <BackgroundCircles />
      </div>
      <img src='\img\photo1.jpg' alt='bg-img' className='absolute top-0 left-0 opacity-50 h-screen w-full mix-blend-luminosity z-0' />
    </div>
  )
}
