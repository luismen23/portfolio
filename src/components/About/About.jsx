import { motion } from 'framer-motion'

export function About () {
  return (
    <div className='h-screen relative w-screen flex justify-center gap-4 text-center md:text-left md:flex-row items-center text-white flex-col px-10 mx-auto md:max-w-5xl'>
      <h3 className='absolute top-20 uppercase tracking-[10px] text-gray text-2xl opacity-90'>About</h3>

      <motion.img initial={{ x: -200, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} src='\img\yo-100.jpg' className='  flex-shrink-0 w-40 h-40 sm:w-56 sm:h-56 rounded-full object-cover  object-top md:w-80 md:h-80' />

      <div className=' mx-4 md:px-8 max-w-md md:max-w-lg xl:max-w-2xl'>
        <h4 className='text-2xl sm:text-3xl text-yellow/80 md:text-5xl'>Here's a little background</h4>
        <p className='text-sm md:text-lg mt-7'>
          Self-taught Front End Developer, dedication and persistence are key to continuously improving skills in web development. Strong passion for programming drives the desire to build a solid foundation of knowledge and explore new technologies.
          Experience building web pages has instilled the importance of creating user-friendly and visually appealing websites.
        </p>
      </div>
    </div>
  )
}
