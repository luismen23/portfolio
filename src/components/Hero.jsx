import React from 'react'
import Yo from '../imgs/yo.png'
import { easeOut, motion } from 'framer-motion'
import { Resources } from './Resources'
import {useTypewriter, Cursor} from 'react-simple-typewriter';

export const Hero = () => {
  const [text, count] = useTypewriter({
    words: ["Web Developer", "Civil Engineer"],
    loop: true,
    delaySpeed: 1000
  })

  return (
    <div>
        <div className="flex flex-col h-fit w-auto items-center text-center justify-center">
            <div className='flex flex-col justify-center items-center gap-4 px-0 md:flex md:flex-row md:justify-between md:w-screen md:gap-0 md:px-16'>
              <motion.span initial={{x: -1000, opacity:0}} animate={{x: 0, opacity:1}}  transition={{duration: 2, ease: easeOut}}  className='font-bold text-4xl max-w-xs min-w-[300px] text-color4 dark:text-white'>
                Hey there, I'm a <br></br><span className=' text-color2 dark:text-color5'>{text}</span>
                <Cursor /><br></br>
              </motion.span> 
              <motion.span initial={{x: 1000, opacity:0}} animate={{x: 0, opacity:1}}  transition={{duration: 2, delay: 0.2, ease: easeOut}}  className='text-lg w-60 min-w-[250px] text-color2 dark:text-white'>I create beautiful simple things, And I love what I do</motion.span> 
            </div>
            <motion.img src={Yo} alt="yo" className='max-h-[400px]' initial={{y: 1000, opacity:0}} animate={{y: 0, opacity:1}}  transition={{duration: 2, ease: easeOut}}  />
            <div className='absolute left-0 mt-20'>
              <Resources />
            </div>
        </div>
    </div>
  )
}
