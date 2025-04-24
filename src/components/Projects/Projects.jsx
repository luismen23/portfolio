import React, { useState, useRef, useCallback, useEffect } from 'react'
import { motion } from 'framer-motion'

// Assuming these paths are correct relative to your public directory in Vite
import Pcgamer from '/videos/pcgamerstore.mp4'
import pcgamerstore from '/img/pcgamerstore.png'
import googletranslate from '/img/googletranslate.png'
import gotranslate from '/videos/googletranslate.mp4'
import reactappsv from '/videos/reactappsv.mp4'
import pokedex from '/img/pokedex.jpg'
import Pokedex from '/videos/pokeapp.mp4'
import reactapps from '/img/reactapps.png'

import { FaBootstrap, FaCss3, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si'

const Project = ({ name, img, tools, link, id, src }) => {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: id * 0.1 }}
      viewport={{ once: true }}
      className='relative flex flex-col items-center justify-center p-4 border border-gray-700 rounded-lg shadow-lg bg-gray-800/80 backdrop-blur-sm w-full h-64 md:h-80'
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Video background on hover */}
      {isHovering && src && (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className='absolute top-0 left-0 w-full h-full object-cover rounded-lg z-0 opacity-50'
        />
      )}
      {/* Image background (default) */}
      {!isHovering && img && (
        <img
          src={img}
          alt={`${name} preview`}
          className='absolute top-0 left-0 w-full h-full object-cover rounded-lg z-0 opacity-30'
          // Add fallback in case image fails to load
          onError={e => {
            e.target.onerror = null // prevent infinite loop
            e.target.src = `https://placehold.co/400x300/374151/ffffff?text=${encodeURIComponent(
              name
            )}`
            e.target.classList.add('opacity-10') // Make placeholder less prominent
          }}
        />
      )}

      {/* Content Overlay */}
      <div className='relative z-10 flex flex-col items-center justify-center text-center h-full'>
        <h4 className='text-lg md:text-xl font-semibold mb-2 text-white'>
          {name}
        </h4>
        <div className='flex space-x-3 my-3'>
          {tools.map((tool, index) => (
            <span
              key={index}
              style={{ color: tool.color }}
              className='text-2xl md:text-3xl'
            >
              {tool.icon}
            </span>
          ))}
        </div>
        <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          className='mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm transition-colors duration-200'
        >
          Visit Site
        </a>
      </div>
    </motion.div>
  )
}

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
  bootstrap: '#7952B3',
}

const projects = [
  {
    name: 'Google Translate Clone',
    id: 1,
    src: gotranslate,
    tools: [
      { icon: <FaReact />, color: logoColors.react },
      { icon: <SiTypescript />, color: logoColors.typescript },
      { icon: <FaBootstrap />, color: logoColors.bootstrap },
    ],
    link: 'https://google-translate-clone-lm.netlify.app/',
    img: googletranslate,
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
  {
    name: 'Landing Page',
    id: 4,
    src: Pcgamer,
    tools: [
      { icon: <FaHtml5 />, color: logoColors.html },
      { icon: <FaCss3 />, color: logoColors.css },
      { icon: <FaJs />, color: logoColors.javascript },
    ],
    link: 'https://luismen23.github.io/web-pages/pcgamerstore/',
    img: pcgamerstore,
  },
]

const PROJECTS_PER_PAGE_MOBILE = 2

export function Projects() {
  const [currentPage, setCurrentPage] = useState(0)
  const scrollContainerRef = useRef(null)

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE_MOBILE)

  // Function to scroll the container to a specific page
  const scrollToPage = useCallback(pageIndex => {
    const container = scrollContainerRef.current
    if (container) {
      const pageWidth = container.offsetWidth
      container.scrollTo({
        left: pageIndex * pageWidth,
        behavior: 'smooth',
      })
    }
  }, [])

  const debounce = (func, delay) => {
    let timeoutId
    return (...args) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        func.apply(this, args)
      }, delay)
    }
  }

  const handleScroll = useCallback(() => {
    const container = scrollContainerRef.current
    if (container) {
      const scrollLeft = container.scrollLeft
      const pageWidth = container.offsetWidth
      const newPage = Math.round(scrollLeft / pageWidth)

      if (newPage !== currentPage) {
        setCurrentPage(newPage)
      }
    }
  }, [currentPage])

  const debouncedHandleScroll = useCallback(debounce(handleScroll, 100), [
    handleScroll,
  ])

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', debouncedHandleScroll, {
        passive: true,
      })
    }
    // Cleanup function to remove the event listener
    return () => {
      if (container) {
        container.removeEventListener('scroll', debouncedHandleScroll)
      }
    }
  }, [debouncedHandleScroll])

  return (
    <div className='min-h-screen w-screen relative flex flex-col justify-center items-center text-white p-4 md:p-8 bg-gradient-to-b from-gray-900 to-black'>
      {/* Absolute positioned title */}
      <h3 className='absolute top-16 md:top-20 text-xl md:text-2xl tracking-[8px] md:tracking-[10px] text-gray-400 uppercase opacity-90 z-20'>
        Projects
      </h3>

      {/* --- Desktop View (Grid) --- */}

      <div className='hidden md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-8 md:max-w-4xl lg:max-w-5xl w-full mt-32 md:mt-40'>
        {projects.map(project => (
          <Project
            key={project.id}
            name={project.name}
            id={project.id}
            src={project.src}
            link={project.link}
            img={project.img}
            tools={project.tools}
          />
        ))}
      </div>

      {/* --- Mobile View (Horizontal Scroll) --- */}

      <div className='md:hidden w-full flex flex-col items-center mt-32'>
        {' '}
        <div
          ref={scrollContainerRef}
          className='flex overflow-x-auto snap-x snap-mandatory scroll-smooth w-full scrollbar-hide' // Added scrollbar-hide (requires tailwind-scrollbar-hide plugin or custom CSS)
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div
              key={pageIndex}
              className='flex-shrink-0 w-full snap-center flex gap-4 px-2'
            >
              {projects
                .slice(
                  pageIndex * PROJECTS_PER_PAGE_MOBILE,
                  (pageIndex + 1) * PROJECTS_PER_PAGE_MOBILE
                )
                .map(project => (
                  <div key={project.id} className='w-1/2 flex-shrink-0'>
                    <Project
                      name={project.name}
                      id={project.id}
                      src={project.src}
                      link={project.link}
                      img={project.img}
                      tools={project.tools}
                    />
                  </div>
                ))}
            </div>
          ))}
        </div>
        {/* Navigation Dots */}
        {totalPages > 1 && (
          <div className='flex gap-3 mt-6'>
            {' '}
            {/* Increased gap and margin-top */}
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToPage(index)}
                aria-label={`Go to page ${index + 1}`}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ease-in-out ${
                  currentPage === index
                    ? 'bg-blue-500 scale-110'
                    : 'bg-gray-400 hover:bg-gray-300'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
