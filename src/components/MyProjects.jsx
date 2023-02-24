import React from 'react'
import {motion} from 'framer-motion';
import webai from '../imgs/webai.png';


const projects = [
  {
    name: "Video Game Store Web Page / React and Tailwind",
    id: 1,
    src: "",
    link: ""
  },
  {
    name: "Pokedex / React",
    id: 2,
    src: "",
    link: ""
  },
  {
    name: "Landing Page of Pc Store / HTML, CSS, JS",
    id: 3,
    src: "",
    link: ""
  },
  {
    name: "Filtering / React",
    id: 4,
    src: "",
    link: ""
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
              className='flex flex-col justify-center items-center text-center snap-center space-y-5 p-20 md:p-15 lg:p-10 dark:text-white' key={id}>
                  <img src={webai} className='max-w-sm md:max-w-md lg:max-w-lg'/>
                  <div>
                    <h4>Project {id} of {projects.length}: {name}</h4>
                    <span className='underline text-color3/50 hover:font-bold dark:text-white/50'>Link</span>
                  </div>
              </motion.div>
            ))
          }
        </motion.div>
        
        <div className='w-full absolute top-[20%] bg-color5/10 left-0 h-[500px] -skew-y-12 dark:bg-color4/10'></div>
    </div>
  )
}
