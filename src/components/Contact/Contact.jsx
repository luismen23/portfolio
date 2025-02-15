import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { IoMdMail } from 'react-icons/io'
import { HiLocationMarker } from 'react-icons/hi'
import { useRef } from 'react'

export function Contact () {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_r01zjmg', 'template_h1kmxut', form.current, 'fJMZYVnBNyqTQaQvV')
      .then((result) => {
        alert("Thanks for sent your message, I'll answer you the soon possible")
      }, (error) => {
        console.log(error.text)
      })

    form.current.reset()
  }

  return (
    <div className='h-screen w-screen relative flex flex-col items-center justify-center gap-10'>

      <h3 className='absolute top-20 text-2xl tracking-[10px] text-gray uppercase opacity-90 '>Contact</h3>

      <motion.div className='flex flex-col justify-center items-center text-center gap-y-14 text-white pb-10 mt-8' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h4 className='text-base font-medium tracking-[2px] uppercase'>Let's make something <br /><span className='underline decoration-purple decoration-4'>amazing</span><span className='text-yellow'>!</span></h4>

        <div className='flex flex-col justify-center items-start gap-3'>
          <p className='flex items-center gap-1'><IoMdMail className='text-yellow/80 inline-block animate-pulse' /> lmmg1701@gmail.com</p>
          <p className='flex items-center gap-1'><HiLocationMarker className='text-yellow/80 inline-block animate-pulse' /> Palermo, CABA, Argentina</p>
        </div>

      </motion.div>

      <motion.div className='flex flex-col  w-screen items-center' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <form className='flex flex-col w-60 md:w-96 gap-2' ref={form} onSubmit={sendEmail}>

          <input placeholder='Name' type='text' name='user_name' className='contactInput' required/>
          <input placeholder='Email' type='email' name='user_email' className='contactInput' required/>
          <input placeholder='Subject' type='text' className='contactInput' />
          <textarea placeholder='Message' name='message' className='contactInput' />

          <button type='submit' value='Send' className='bg-metal py-2 rounded-md font-semibold text-lg active:scale-105 transition-all hover:font-bold'>Submit</button>
        </form>
      </motion.div>

    </div>
  )
}
