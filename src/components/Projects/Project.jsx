import { motion } from 'framer-motion'
import { useState } from 'react'

export function Project({ name, id, src, link, img, tools }) {
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
            className='border bg-gray text-black rounded-full w-10 h-10 m-1 text-xl hover:bg-black hover:text-white transition-all duration-200'
            onClick={handleClick}
          >
            X
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className='group flex cursor-pointer  transition-all duration-500 hover:shadow-metal rounded-xl hover:shadow-md'>
      <img
        src={img}
        className='w-60 h-32 opacity-20 sm:w-72 sm:h-40 md:w-[24rem] md:h-[12rem] xl:w-[26rem] xl:h-20rem] object-cover object-top group-hover:opacity-20 transition-all duration-500 rounded-xl '
      />

      <div className='absolute transition-all group-hover:translate-y-1 duration-200 w-60 h-32 sm:w-72 sm:h-40 md:w-[24rem] md:h-[12rem] xl:w-[26rem] xl:h-20rem]'>
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
              web
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
}
