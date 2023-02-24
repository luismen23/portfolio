import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { easeOut, motion } from 'framer-motion';

const links = [
    {
        id: 1,
        child: (<><span className='text-color3 dark:text-white'>Resume</span> <BsFillPersonLinesFill className='text-color3 dark:text-white' size={30}/></>),
        href: "/resume.pdf",
        download: true
    },
    {
        id: 2,
        child: (<><span className='text-color3 dark:text-white'>Mail</span> <HiOutlineMail className='text-color3 dark:text-white' size={30}/></>),
        href: "mailto:lmmg1701@gmail.com",
    },
    {
        id: 3,
        child: (<><span className='text-color3 dark:text-white'>GitHub</span> <FaGithub className='text-color3 dark:text-white' size={30}/></>),
        href: "https://github.com/luismen23",
    },
    {
        id: 4,
        child: (<><span className='text-color3 dark:text-white'>LinkedIn</span> <FaLinkedin className='text-color3 dark:text-white' size={30}/></>),
        href: "https://linkedin.com",
    }
]

export const Resources = () => {
  return (
    <motion.div className='flex flex-col' initial={{x: -100}} animate={{x: 0}}  transition={{duration: 1, delay: 0.5, ease: easeOut}} >
        <ul>

            {
                links.map(({id, child, href, download}) => (
                    <li key={id} className='w-28 py-2 ml-[-70px] hover:ml-[7px] duration-500 '>
                        <a href={href} download={download} target='_blank' rel='noreferrer' className='flex justify-between items-center w-full  active:translate-y-1 active:transition'>
                            {child}
                        </a>
                    </li>
                ))
            }

        </ul>
    </motion.div>
  )
}
