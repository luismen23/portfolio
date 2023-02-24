import React from 'react'
import { easeOut, motion} from 'framer-motion'

export const Footer = () => {
  return (
    <div>
      <motion.div initial={{y: 100, opacity:0}} animate={{y: 0, opacity:1}}  transition={{duration: 1, delay: 0.5, ease: easeOut}} className="flex flex-col justify-between mx-auto max-w-screen-xl px-3 py-3 sm:px-6  md:px-8 md:h-1/4">
          <p className="text-center text-sm md:text-right text-color2 dark:text-white ">
            Copyright &copy; 2023. All rights reserved.
          </p>
      </motion.div>
    </div>
  
  )
}
