/* eslint-disable import/no-absolute-path */
import { motion } from 'framer-motion'

import Filter from '/videos/filterReact.mp4'
import Pcgamer from '/videos/pcgamerstore.mp4'
import pcgamerstore from '/img/pcgamerstore.png'
import pokedex from '/img/pokedex.png'
import inventory from '/img/inventory.png'
import Pokedex from '/videos/pokedex.mp4'
import { useState } from 'react'

const projects = [

  {
    name: 'Landing Page',
    id: 1,
    src: Pcgamer,
    link: 'https://luismen23.github.io/web-pages/pcgamerstore/',
    img: pcgamerstore
  },
  {
    name: 'Filtering',
    id: 2,
    src: Filter,
    link: 'https://github.com/luismen23/react-inventory',
    img: inventory
  },
  {
    name: 'Pokedex',
    id: 3,
    src: Pokedex,
    link: 'https://github.com/luismen23/pokedex',
    img: pokedex
  }
]

export function Projects () {
  const [currentVideo, setCurrentVideo] = useState(null)
  const [show, setShow] = useState(false)

  const handleClick = (video) => {
    setCurrentVideo(video)
    setShow(!show)
  }

  const Modal = (src) => {
    return (
      <div className='absolute top-0 left-0 w-screen h-screen bg-darkblue flex flex-col justify-center items-center z-20 text-sm md:text-base font-semibold'>
        <div className='max-w-[900px] flex flex-col justify-center items-center text-center'>
          <video controls preload='auto' className='w-80 h-52 md:w-[28rem] md:h-[16rem] xl:w-[36rem] xl:h-[22rem]'>
            <source src={currentVideo} type='video/mp4' />
          </video>
        </div>
        <div className='absolute top-40 right-10 md:right-52 xl:right-80'>
          <button className='border bg-gray text-tahiti rounded-full px-3 py-2 m-1 text-xl' onClick={handleClick}>X</button>
        </div>
      </div>
    )
  }

  return (
    <div className='h-screen w-screen relative flex justify-center items-center text-white flex-col'>
      <h3 className='absolute top-20 text-2xl tracking-[10px] text-gray uppercase opacity-90 '>Projects</h3>

      <h4 className='text-yellow opacity-75 pb-5'>*hover or tap over the projects*</h4>
      <motion.div className='grid md:grid-cols-2 items-center gap-y-5 md:gap-x-5'>
        {
        projects.map(({ name, id, src, link, img }) => {
          return (

            <div key={id} className='group flex cursor-pointer'>
              <img src={img} className='w-60 h-32 sm:w-72 sm:h-40 md:w-[24rem] md:h-[12rem] xl:w-[26rem] xl:h-20rem] object-cover object-top group-hover:opacity-20 transition-all duration-500 rounded-xl' />

              <div className='absolute opacity-0 group-hover:opacity-100 transition-all duration-500 w-60 h-32 sm:w-72 sm:h-40 md:w-[24rem] md:h-[12rem] xl:w-[26rem] xl:h-20rem]'>
                <div className='flex flex-col justify-center items-center h-full'>
                  <h6 className='text-base md:text-lg xl:text-2xl text-yellow font-bold'>{name}</h6>
                  <div className='text-sm md:text-base xl:text-lg z-10 font-semibold'>
                    <button className='bg-gray rounded-xl px-2 py-1 m-1 text-metal font-semibold hover:bg-purple hover:text-white transition-all duration-500' onClick={() => handleClick(src)}>video</button>
                    <a className='bg-gray rounded-xl px-2 py-1 m-1 text-metal font-semibold hover:bg-purple hover:text-white transition-all duration-500' target='_blank' rel='noreferrer' href={link}>link</a>
                  </div>
                </div>
              </div>
              <div>
                {show ? <Modal src={src} handleClick={handleClick} /> : <div className='hidden z-30' />}
              </div>
            </div>
          )
        })
        }
      </motion.div>

    </div>
  )
}
