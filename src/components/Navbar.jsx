import React, { useState } from 'react'
import { Link } from 'wouter'
import {FaTimes} from "react-icons/fa"
import {BiMenuAltRight} from "react-icons/bi"
import {BsFillMoonStarsFill, BsFillSunFill} from "react-icons/bs"
import { easeInOut, easeOut, motion } from 'framer-motion'


export const Navbar = () => {

  const [nav, setNav] = useState(false)
  const [dark, setDark] = useState(false)

  const handleClick = () => {
    setNav(!nav)
  }

  const handleDark = () => {
    setDark(!dark)
    document.documentElement.classList.toggle('dark')
  }
  

  const links = [
    {
      id:1,
      name: "home",
      link: "/"
    },
    {
      id:2,
      name: "about",
      link: "About"
    },
    {
      id:3,
      name: "projects",
      link: "Projects"
    },
    {
      id:4,
      name: "skills",
      link: "Skills"
    },
    {
      id:5,
      name: "contact",
      link: "Contact"
    }
  ]



  return (
    <motion.div initial={{y: -200}} animate={{y: 0}}  transition={{duration: 1.5, delay: 0.2, ease: easeOut}} className='flex flex-row justify-between md:h-40 md:flex md:flex-row md:justify-between md:items-center md:px-16'>

        <Link to='/'>
          <h1 initial={{y: -100}} animate={{y: 0}} transition={{duration: 1}} className="hidden md:flex md:py-6 md:text-xl md:font-bold md:text-color2 md:cursor-pointer md:relative md:p-0 md:m-1 dark:text-white ">Luis Mendoza</h1>
        </Link>

        <ul className='hidden md:px-1 md:text-color2 md:dark:text-white md:flex md:flex-row md:z-50 md:justify-center md:items-center md:text-center md:m-1 md:border md:rounded-full md:border-[#D1D5DB] md:shadow-md md:sticky'>
          {
          links.map(({link, name ,id}) => (
                  <li className='py-3 px-3 text-base font-medium capitalize hover:text-color4 hover:bg-[#D1D5DB] border-transparent hover:border hover:rounded-full hover:py-2' key={id}>
                    <Link to={link}>{name}</Link>
                  </li> )) 
          }      
        </ul>

        <div className='flex py-6 px-8 m-1 items-center cursor-pointer z-50'>
          <Link to='/'>
            <h1 className="text-xl font-bold items-center text-color2 mr-6 md:hidden dark:text-white">Luis Mendoza</h1>
          </Link>
          <div className='m-3 text-color3 active:translate-y-1 active:transition' onClick={handleDark}>
            {dark ? <BsFillSunFill size={20} className='text-color3 dark:text-white ' /> : <BsFillMoonStarsFill className='text-color3 dark:text-white' size={20}/>}
          </div>
        </div>

        <div className='cursor-pointer fixed z-50 py-8 px-10 right-0 active:translate-y-1 hover:transition md:hidden ' onClick={handleClick}>
          {nav ? <FaTimes size={20} className='dark:text-white  text-color5 hover:text-[#D1D5DB]'/> : <BiMenuAltRight size={25} className='dark:text-white  hover:text-[#D1D5DB]' />}
        </div>
        
        {
          nav ? 
        <div className=' absolute w-5/12 right-0 h-screen z-40 overflow-y-hidden overflow-x-hidden md:hidden'>
          <motion.ul initial={{opacity: 0, x:50}} animate={{opacity: 1, x:0}}  transition={{duration: 0.5}} className='px-1 text-color5 dark:text-white/95 flex flex-col items-center py-1 text-center bg-color2 dark:bg-color4 h-full justify-center border-l-color5 dark:border-l-white  border-l-2 border-[#D1D5DB] gap-10 shadow-md md:hidden'>
          {
          links.map(({link, name ,id}) => (
                  <motion.li className='text-xl font-semibold capitalize hover:text-[#D1D5DB] transition-all duration-200  dark:hover:text-color2 border-transparent ' key={id}>
                    <Link to={link}>{name}</Link>
                  </motion.li> )) 
          }      
        </motion.ul> 
        </div> :
        <ul className='hidden'></ul>
        }
    </motion.div>
  )
}
