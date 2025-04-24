import { useState } from 'react'
import { motion } from 'framer-motion'

export const Project = ({ name, img, tools, link, id, src }) => {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: id * 0.1 }}
      viewport={{ once: true }}
      className='relative flex flex-col items-center justify-center p-4 border border-gray-700 rounded-lg shadow-lg bg-gray-800/80 backdrop-blur-sm w-full h-64 '
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
            e.target.onerror = null
            e.target.src = `https://placehold.co/400x300/374151/ffffff?text=${encodeURIComponent(
              name
            )}`
            e.target.classList.add('opacity-10')
          }}
        />
      )}

      {/* Content Overlay */}
      <div className='relative z-10 flex flex-col items-center justify-between text-center h-full'>
        <div className='flex flex-col items-center justify-center'>
          <h4 className='text-lg md:text-2xl h-9 flex items-center font-semibold mb-4 mt-4 text-white md:font-bold md:bg-black/50 md:rounded-xl md:px-2 md:py-2'>
            {name}
          </h4>
          <div className='flex space-x-3 my-3 mt-4'>
            {tools.map((tool, index) => (
              <span
                key={index}
                style={{ color: tool.color }}
                className='text-2xl md:text-5xl hover:scale-110 transition-transform duration-200'
              >
                {tool.icon}
              </span>
            ))}
          </div>
        </div>
        <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          className='mt-3 pmd:x-2 md:py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm md:bg-black/50 md:rounded-xl md:font-bold md:text-base transition-colors duration-200'
        >
          Visit Site
        </a>
      </div>
    </motion.div>
  )
}
