import { GoHomeFill } from 'react-icons/go'
import { IoPerson } from 'react-icons/io5'
import { FaCode } from 'react-icons/fa'
import { SiCodeforces } from 'react-icons/si'
import { IoMdMail } from 'react-icons/io'
import { motion } from 'framer-motion'

const navData = [
  { name: 'home', path: '#home', icon: <GoHomeFill className='w-[25px] h-[25px] sm:w-[30px] sm:h-[30px]' /> },
  { name: 'about', path: '#about', icon: <IoPerson className='w-[25px] h-[25px] sm:w-[30px] sm:h-[30px]' /> },
  { name: 'projects', path: '#projects', icon: <FaCode className='w-[25px] h-[25px] sm:w-[30px] sm:h-[30px]' /> },
  { name: 'skills', path: '#skills', icon: <SiCodeforces className='w-[25px] h-[25px] sm:w-[30px] sm:h-[30px]' /> },
  { name: 'contact', path: '#contact', icon: <IoMdMail className='w-[25px] h-[25px] sm:w-[30px] sm:h-[30px]' /> }
]

export function Nav () {
  return (
    <motion.div initial={{ x: 500, opacity: 0, scale: 0.5 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className='fixed bottom-0 w-screen justify-center z-20 backdrop-blur-sm md:w-[4rem] md:mr-5 md:right-0 md:bottom-[25%] md:top-[30%]'>
      <nav className='flex py-5 sm:py-7 justify-center gap-9 sm:gap-12 items-center text-white bg-yellow bg-opacity-10 md:flex-col md:rounded-3xl md:my-auto md:h-[400px]'>
        {navData.map(({ name, path, icon }) => (
          <motion.a
            className=''
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={{ x: 0 }}
            key={name} href={path} title={name}
          >
            {icon}
          </motion.a>
        ))}
      </nav>
    </motion.div>
  )
}
