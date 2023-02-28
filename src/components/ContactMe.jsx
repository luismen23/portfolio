import React from 'react'
import {motion} from 'framer-motion';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {IoMdMail} from 'react-icons/io';
import {HiLocationMarker} from 'react-icons/hi';

export const ContactMe = () => {
  return (
    <div className='h-4/5 flex flex-col text-center gap-5 '>
      <motion.div initial={{opacity:0}} animate={{ opacity:1}}  transition={{duration: 1}}>
          <h1 className='tracking-widest mt-10 font-bold text-3xl text-color2 dark:text-white'>
          Contact me
          </h1>
      </motion.div>

      <div className='flex flex-col space-y-10 mt-10 text-color1 dark:text-white'>
        <h4 className='text-lg font-medium'>Let's make something amazing</h4>

        <div className='grid grid-cols-[15px_150px] justify-items-center items-center place-content-center pt-1 gap-5'>
          <BsFillTelephoneFill size={18} className='text-color3 animate-pulse'/><p>+584127280523</p>
          <IoMdMail size={18} className='text-color3 animate-pulse'/><p>lmmg1701@gmail.com</p>  
          <HiLocationMarker size={18} className='text-color3 animate-pulse'/><p>Lecheria, Anzoategui, Venezuela</p>
        </div>

      </div>

        <form className='flex flex-col space-y-2 shrink mx-auto pt-10'>

          <div className='flex gap-2 shrink'>
            <input placeholder='Name' type="text" className='contactInput'/>
            <input placeholder='Email' type="email" className='contactInput'/>
          </div>
          
          <input placeholder='Subject' type="text" className='contactInput'/>

          <textarea placeholder='Message' className='contactInput'/>
          <button type='submit' className='bg-color4 py-2 rounded-md text-color1 font-semibold text-lg hover:scale-105 transition-all hover:font-bold'>Submit</button>
        </form>
      


      
    </div>
  )
}
