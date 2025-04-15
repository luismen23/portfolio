/* eslint-disable import/no-absolute-path */
import { motion } from 'framer-motion'

import Pcgamer from '/videos/pcgamerstore.mp4'
import pcgamerstore from '/img/pcgamerstore.png'
import reactappsv from '/videos/reactappsv.mp4'
import pokedex from '/img/pokedex.jpg'
import Pokedex from '/videos/pokeapp.mp4'
import reactapps from '/img/reactapps.png'
import { useState } from 'react'
import { FaCss3, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si'

export const logoColors = {
  html: '#e34c26',
  css: '#264de4',
  javascript: '#f0db4f',
  react: '#61dbfb',
  nextjs: '#454545',
  tailwind: '#06b6d4',
  node: '#3c873a',
  typescript: '#007acc',
  mongodb: '#589636',
  framer: 'rgb(255, 87, 154)',
  sqlite: '#454545',
}

const projects = [
  {
    name: 'Landing Page',
    id: 1,
    src: Pcgamer,
    tools: [
      { icon: <FaHtml5 />, color: logoColors.html },
      { icon: <FaCss3 />, color: logoColors.css },
      { icon: <FaJs />, color: logoColors.javascript },
    ],
    link: 'https://luismen23.github.io/web-pages/pcgamerstore/',
    img: pcgamerstore,
  },
  {
    name: 'Poke App',
    id: 2,
    src: Pokedex,
    tools: [
      { icon: <FaReact />, color: logoColors.react },
      { icon: <SiNextdotjs />, color: logoColors.nextjs },
      { icon: <SiTailwindcss />, color: logoColors.tailwind },
    ],
    link: 'https://pokeapp-info.netlify.app',
    img: pokedex,
  },
  {
    name: 'React Apps',
    id: 3,
    src: reactappsv,
    tools: [
      { icon: <FaReact />, color: logoColors.react },
      { icon: <SiTypescript />, color: logoColors.typescript },
      { icon: <SiTailwindcss />, color: logoColors.tailwind },
    ],
    link: 'https://react-apps-lm.netlify.app/',
    img: reactapps,
  },
]

export function Projects() {
  const [currentVideo, setCurrentVideo] = useState(null)
  const [show, setShow] = useState(false)

  const handleClick = video => {
    setCurrentVideo(video)
    setShow(!show)
  }

  const Modal = src => {
    return (
      <div className='absolute top-0 left-0 w-screen h-screen bg-black flex flex-col justify-center items-center z-20 text-sm md:text-base font-semibold'>
        <div className='max-w-[900px] flex flex-col justify-center items-center text-center'>
          <video
            autoPlay
            loop
            controls
            className='w-80 h-52 md:w-[28rem] md:h-[16rem] xl:w-[36rem] xl:h-[22rem]'
          >
            <source src={currentVideo} type='video/mp4' />
          </video>
        </div>
        <div className='absolute top-40 right-10 md:right-52 xl:right-80'>
          <button
            className='border bg-gray text-black rounded-full px-3 py-2 m-1 text-xl'
            onClick={handleClick}
          >
            X
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className='h-screen w-screen relative flex justify-center items-center text-white flex-col'>
      <h3 className='absolute top-20 text-2xl tracking-[10px] text-gray uppercase opacity-90 '>
        Projects
      </h3>

      <h4 className='text-yellow opacity-75 pb-5'>
        *hover or tap over the projects*
      </h4>
      <motion.div className='grid md:grid-cols-2 items-center gap-y-5 md:gap-x-5'>
        {projects.map(({ name, id, src, link, img, tools }) => {
          return (
            <div
              key={id}
              className='group flex cursor-pointer hover:translate-y-1 transform transition-all duration-500 hover:shadow-metal rounded-xl hover:shadow-md'
            >
              <img
                src={img}
                className='w-60 h-32 sm:w-72 sm:h-40 md:w-[24rem] md:h-[12rem] xl:w-[26rem] xl:h-20rem] object-cover object-top group-hover:opacity-20 transition-all duration-500 rounded-xl'
              />

              <div className='absolute opacity-0 group-hover:opacity-100 transition-all duration-500 w-60 h-32 sm:w-72 sm:h-40 md:w-[24rem] md:h-[12rem] xl:w-[26rem] xl:h-20rem]'>
                <div className='flex flex-col justify-center items-center h-full gap-1 '>
                  <h6 className='text-sm md:text-lg xl:text-2xl text-yellow font-bold mb-2'>
                    {name}
                  </h6>
                  <div className='text-xs md:text-base xl:text-lg z-10 font-semibold flex text-center gap-1'>
                    <button
                      className='bg-gray rounded-xl text-metal font-semibold leading-none hover:bg-purple hover:text-white transition-all duration-500 w-10 h-7 md:h-8 md:w-14'
                      onClick={() => handleClick(src)}
                    >
                      video
                    </button>
                    <a
                      className='bg-gray rounded-xl text-metal font-semibold  hover:bg-purple hover:text-white transition-all duration-500 w-10 h-7 md:h-8 md:w-14 block leading-none  content-center'
                      target='_blank'
                      rel='noreferrer '
                      href={link}
                    >
                      link
                    </a>
                  </div>
                  <div className='flex justify-center gap-3 mt-1'>
                    {tools.map((tool, indexTool) => {
                      return (
                        <motion.div
                          whileHover={{ scale: 1.1, color: `${tool.color}` }}
                          className='text-2xl md:text-[2.7rem] xl:text-5xl '
                          key={indexTool}
                        >
                          {tool.icon}
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div>
                {show ? (
                  <Modal src={src} handleClick={handleClick} />
                ) : (
                  <div className='hidden z-30' />
                )}
              </div>
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}
