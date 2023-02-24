import React from 'react'
import {motion} from 'framer-motion';

export const ContentAbout = () => {
  return (
    <div className='h-4/5 flex flex-col gap-14 items-center flex-shrink'>

        <motion.h1 initial={{opacity:0}} animate={{ opacity:1}}  transition={{duration: 1}} className=' tracking-widest mt-10 font-bold text-3xl  text-color2 dark:text-white'>
            A {"-"}<span className='underline decoration-color5'>little</span>{"-"} about me
        </motion.h1>
        <motion.p initial={{y:100 , opacity:0}} whileInView={{ y:0, opacity:1, scrollBehavior:'none'}}  transition={{duration: 1, delay: 0.5}} className=' text-color1 dark:text-white w-56 text-center md:w-64 xl:w-[500px]' >
            My name is Luis Miguel Mendoza Guzman, I'm a self-taught develorper, that put his 100% everyday to learn everything about be a Full Stack Developer. I've only 1 year learning and practicing how to build basics web pages, and I think that I found my passion, the career that really makes me dream, yes, is the Programming.
            <br></br>
            <br></br>
            Never is to late to learn, and with my 27 years old I think that everyone can learn anything that one propose, with constancy and determination, everything is possible.
        </motion.p>
    </div>
  )
}
