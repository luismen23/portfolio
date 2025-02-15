import { FaXTwitter, FaGithub, FaLinkedin, FaRegAddressBook } from 'react-icons/fa6'
import { SiGmail } from 'react-icons/si'
import { motion } from 'framer-motion'

const socialLinks = [
  { href: 'mailto:lmmg1701@gmail.com', img: <SiGmail className='w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]' />, id: 1, name: 'Send me a Mail' },
  { href: 'https://www.linkedin.com/in/luismendoza23/', img: <FaLinkedin className='w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]' />, id: 2, name: 'Linkedin' },
  { href: 'https://github.com/luismen23?tab=repositories', img: <FaGithub className='w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]' />, id: 3, name: 'GitHub' },
  { href: 'https://twitter.com/luismendoza23', img: <FaXTwitter className='w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]' />, id: 4, name: 'X' },
  { href: '/CV-Front-End english.pdf', img: <FaRegAddressBook className='w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]' />, id: 5, name: 'Resume', download: true }
]

export function Header () {
  return (
    <div className='flex justify-center items-center pt-10 w-full relative h-[8rem]'>
      <div className='flex flex-col md:flex-row md:justify-between md:w-[700px] xl:w-[900px] w-[400px] justify-center items-center m-auto z-10 gap-3'>
        <motion.h1 className='md:text-5xl sm:text-4xl text-3xl' initial={{ x: -500, opacity: 0, scale: 0.5 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 1.5 }}>
          <span className='font-bold text-white'>Luis </span>
          <span className='text-gray'>Mendoza</span>
          <span className='text-yellow'>.</span>
        </motion.h1>

        <motion.ul className='flex gap-6' initial={{ x: 500, opacity: 0, scale: 0.5 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 1.5 }}>
          {
            socialLinks.map(({ href, img, id, name, download }) => (
              <motion.li
                className='text-white' key={id} title={name}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                style={{ x: 0 }}

              >
                <a href={href} download={download} target='_blank' rel='noreferrer'>
                  {img}
                </a>
              </motion.li>
            ))
          }
        </motion.ul>
      </div>

    </div>
  )
}
