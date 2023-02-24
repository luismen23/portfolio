import React from 'react'
import {motion} from 'framer-motion';
import htmllogo from '../imgs/htmllogo.png';
import csslogo from '../imgs/csslogo.png';
import jslogo from '../imgs/jslogo.png';
import reactlogo2 from '../imgs/reactlogo2.png';
import tailwindlogo from '../imgs/tailwindlogo.png';
import gitlogo from '../imgs/gitlogo.png';
import vscodelogo from '../imgs/vscodelogo.png';
import nodelogo from '../imgs/nodelogo.png';

const logos = [
  {
    name: "html" ,
    src: htmllogo,
    percentage: "80%"
  },
  {
    name: "css" ,
    src: csslogo,
    percentage: "70%"
  },
  {
    name: "js" ,
    src: jslogo,
    percentage: "50%"
  },
  {
    name: "react" ,
    src: reactlogo2,
    percentage: "60%"
  },
  {
    name: "tailwind" ,
    src: tailwindlogo,
    percentage: "60%"
  },
  {
    name: "git" ,
    src: gitlogo,
    percentage: "50%"
  },
  {
    name: "vscode" ,
    src: vscodelogo,
    percentage: "60%"
  },
  {
    name: "node" ,
    src: nodelogo,
    percentage: "40%"
  }
]

export const Skill = () => {
  return (
    <div className='flex'>
      <div className='grid grid-cols-3 gap-5 md:gap-9 mt-20 mx-auto xl:grid-cols-4'>
        {logos.map(({name, src, percentage}) => (
          <div key={name} className='group flex cursor-pointer'>
           
            <motion.img 
              initial={{
                opacity: 0
              }}
              transition={{ duration: 2, delay: 0.5}}
              whileInView={{ opacity: 1 }} 
              src={src} 
              className='rounded-full border border-color4 border-opacity-50 dark:border-color3 object-cover w-24 h-24 md:w-32 md:h-32 filter group-hover:grayscale transition duration-500 ease-in-out'
            />
              

            <div className='absolute opacity-0 group-hover:opacity-80 group-hover:bg-white transition duration-500 w-24 h-24 md:w-32 md:h-32 rounded-full z-0'>
              <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-color1 opacity-100'>{percentage}</p>
              </div>
            </div>
          </div>
          
        ))}
      </div>
      

    </div>
    )
  }
