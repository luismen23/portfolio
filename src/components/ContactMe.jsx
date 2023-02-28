import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {motion} from 'framer-motion';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {IoMdMail} from 'react-icons/io';
import {HiLocationMarker} from 'react-icons/hi';

export const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p1af2y7', 'template_h1kmxut', form.current, 'fJMZYVnBNyqTQaQvV')
      .then((result) => {
          alert("Thanks for sent your message, I'll answer you the soon possible");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='h-4/5 flex flex-col text-center items-center'>
      <motion.div initial={{opacity:0}} animate={{ opacity:1}}  transition={{duration: 1}}>
          <h1 className='tracking-widest mt-10 font-bold text-3xl text-color2 dark:text-white'>
          Contact me
          </h1>
      </motion.div>

      <div className='flex flex-col space-y-10 mt-14 text-color1 dark:text-white/90'>
        <h4 className='text-lg font-medium mb-2'>Let's make something amazing.</h4>

        <div className='flex flex-col justify-center items-center gap-3'>
          <p><BsFillTelephoneFill size={18} className='text-color3 inline-block animate-pulse dark:text-white/75'/> +584127280523</p>
          <p><IoMdMail size={18} className='text-color3 inline-block animate-pulse dark:text-white/75'/> lmmg1701@gmail.com</p>
          <p><HiLocationMarker size={18} className='text-color3 inline-block animate-pulse dark:text-white/75'/> Lecheria, Anzoategui, Venezuela</p>   
        </div>

      </div>

        <div className='flex flex-col pt-14 w-screen items-center '>
          <form className='flex flex-col w-60 md:w-96 gap-2' ref={form} onSubmit={sendEmail}>

            <input placeholder='Name' type="text" name="user_name" className='contactInput'/>
            <input placeholder='Email' type="email" name="user_email" className='contactInput'/>
            <input placeholder='Subject' type="text" className='contactInput'/>
            <textarea placeholder='Message' name="message" className='contactInput'/>

            <button type='submit' value="Send" className='bg-color4 py-2 rounded-md text-color1 font-semibold text-lg hover:scale-105 transition-all hover:font-bold'>Submit</button>
          </form>
        </div>
      


      
    </div>
  )
}
