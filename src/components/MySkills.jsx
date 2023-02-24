import React from 'react'
import {motion} from 'framer-motion';
import { Skill } from './Skill';

export const MySkills = () => {
  return (
    <div className='h-4/5 flex flex-col text-center gap-5 '>
        <motion.div initial={{opacity:0}} animate={{ opacity:1}}  transition={{duration: 1}}>
            <h1 className='tracking-widest mt-10 font-bold text-3xl  text-color2 dark:text-white'>
                My Skills
            </h1>
            <span className='opacity-50 text-color2  dark:text-white' >*Hover over a skill for current domain*</span>
        </motion.div>
        <Skill />
    </div>
  )
}
