import React from 'react'
import { motion } from 'framer-motion'

export function BackgroundCircles () {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0] }} transition={{ duration: 2.5 }} className='relative flex justify-center items-center mt-32 z-20'>
      <div className='absolute border border-metal rounded-full h-[110px] w-[110px] sm:h-[200px] sm:w-[200px] animate-ping md:w-[260px] md:h-[260px] md:ml-[24rem] xl:ml-[40rem]' />
      <div className='absolute border border-t-yellow border-bermuda opacity-10 rounded-full h-[130px] w-[130px] sm:h-[230px] sm:w-[230px] animate-pulse md:w-[290px] md:h-[290px] md:ml-[24rem] xl:ml-[40rem]' />
      <div className='absolute border border-metal rounded-full h-[40px] w-[40px] sm:h-[70px] sm:w-[70px] animate-ping md:w-[90px] md:h-[90px] md:ml-[24rem] xl:ml-[40rem]' />
      <motion.a
        className='md:ml-[24rem] xl:ml-[40rem] opacity-40' href='#projects' whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} transition={{ duration: 0.5 }}
        style={{ x: 0 }}
      >
        <button className='text-xs sm:text-sm uppercase text-gray tracking-widest'>check this out!</button>
      </motion.a>
    </motion.div>
  )
}
