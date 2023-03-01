import React from 'react'
import {motion} from 'framer-motion';
// import webai from '../imgs/webai.png';
import Filter from '../videos/filterReact.mp4';
import Pcgamer from '../videos/pcgamerstore.mp4';
import Pokedex from '../videos/pokedex.mp4';


const projects = [
 
  {
    name: "Landing Page of Pc Store / HTML, CSS, JS",
    id: 1,
    src: Pcgamer,
    link: "https://luismen23.github.io/web-pages/pcgamerstore/"
  },
  {
    name: "Filtering / React",
    id: 2,
    src: Filter,
    link: "https://github.com/luismen23/react-inventory"
  },
  {
    name: "Pokedex / React",
    id: 3,
    src: Pokedex,
    link: "https://github.com/luismen23/pokedex"
  },
]

export const MyProjects = () => {
  return (
    <div className='h-4/5 flex flex-col text-center relative  '>
        <motion.div initial={{opacity:0}} animate={{ opacity:1}}  transition={{duration: 1}}>
            <h1 className='flex justify-center tracking-widest mt-10 font-bold text-3xl text-color2 dark:text-white '>
                My Latest Works
            </h1>
            <span className='opacity-50 text-color2  dark:text-white' >*Scroll down*</span>
        </motion.div>


        <motion.div initial={{opacity:0}} whileInView={{ opacity:1}} transition={{duration: 1}}
        className='flex flex-col overflow-y-scroll overflow-x-hidden snap-y snap-mandatory z-10'>
          {
            projects.map(({name, id, src, link}) => (
              <motion.div initial={{opacity:0}} whileInView={{ opacity:1}} transition={{duration: 1}} 
              className='flex flex-col justify-center items-center text-center  py-28 mb-28 md:py-20 lg:py-16 dark:text-white' key={id}>

                <div className=''>
                  <h4 className='pb-10'>Project {id} of {projects.length}: {name}</h4>
                  <video controls width="100%" height="100%"  preload='auto' className='max-w-md md:max-w-xl lg:max-w-3xl mb-3 snap-center'>
                    <source src={src} type='video/mp4'/>
                  </video> 
                  <span className='text-color3/50 ' >Link: </span><span className='underline text-color3/50 hover:font-bold dark:text-white/50'>{link}</span>
                </div>
                  
                  
              </motion.div>
            ))
          }
        </motion.div>
        
        <div className='w-full absolute top-[20%] bg-color5/10 left-0 h-[500px] -skew-y-12 dark:bg-color4/10'></div>
    </div>
  )
}
