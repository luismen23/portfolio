/* eslint-disable react/jsx-key */
/* eslint-disable react-refresh/only-export-components */
import { useState } from 'react'
import { FaHtml5, FaCss3, FaJs, FaReact} from 'react-icons/fa'
import { SiNextdotjs, SiFramer, SiTailwindcss, SiNodedotjs, SiVisualstudio, SiMongodb, SiSqlite, SiTypescript } from 'react-icons/si'
import { motion } from 'framer-motion'
import { color } from 'framer-motion'


export const skillsData = [
  {
    title: 'dev skills',
    info: [
      {
        title: 'Front End',
        icons: [
          {icon: <FaHtml5 />, color: 'red'},
          {icon: <FaCss3 />, color: 'blue'},
          {icon: <FaJs />, color: 'yellow'},
          {icon: <FaReact />, color: 'skyblue'},
          {icon: <SiTailwindcss />, color: 'skyblue'},
          {icon: <SiTypescript  />, color: 'blue'},
          {icon: <SiNextdotjs />, color: 'purple'},
          {icon: <SiFramer />, color: 'purple'},
        ]
      },
      {
        title: 'Back End',
        icons: [
          {icon: <SiNodedotjs />, color: 'green'},
          {icon: <SiMongodb  />, color: 'green'},
          {icon: <SiSqlite />, color: 'grey' },
        ]
      }
    ]
  },

  {
    title: 'soft skills',
    info: [
      {
        title: 'Effective communication skills'
      },
      {
        title: 'Critical thinking and problem-solving skills'
      },
      {
        title: 'Collaboration and teamwork'
      },
      {
        title: 'Empathy and understanding'
      },
      {
        title: 'Confidence and self-motivation'
      }
    ]
  },
  {
    title: 'courses',
    info: [
      {
        title: 'Google Activate, Cloud Computing ',
        year: <span className='text-yellow'>| <span className='text-white'>2023</span></span>
      },
      {
        title: 'CS50s Introduction to Computer Science',
        year: <span className='text-yellow'>| <span className='text-white'>2023</span></span>
      },
      {
        title: 'EF SET English Certificate 68/100 (C1 Advanced)',
        year: <span className='text-yellow'>| <span className='text-white'>2023</span></span>
      },
      {
        title: 'CS50s Web Programming with Python and JavaScript',
        year: <span className='text-yellow'>| <span className='text-white'>2023</span></span>
      }
    ]
  }
]

export function Skills () {
  const [index, setIndex] = useState(0)
  return (
    <div className='h-screen w-screen relative flex justify-center text-white'>
      <h3 className='absolute top-20 uppercase text-2xl tracking-[10px] opacity-90 '>Skills</h3>

      <div className='container mx-auto flex flex-col items-center relative md:top-40 top-44'>
        <div className='flex gap-x-3 sm:gap-x-4 md:gap-x-6 xl:gap-x-10 mx-auto mb-6'>
          {
            skillsData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex} className={`${index === itemIndex && 'text-yellow after:w-[100%] after:bg-yellow after:transition-all after:duration-300'} cursor-pointer capitalize relative text-lg md:text-xl after:w-8 after:h-[3px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              )
            })
          }
        </div>
        <div className='w-full max-w-lg pt-3  md:py-6 flex flex-col gap-y-2 justify-center items-center text-center'>
          {skillsData[index].info.map((item, itemIndex) => {
            return (
              <div key={itemIndex} className='flex flex-1 flex-col '>
                <div className='text-lg py-3 w-[300px] sm:w-[350px] md:w-full '><span className='text-yellow'>-</span> {item.title} {item?.year}</div>
                <div className='grid grid-cols-4 md:grid-cols-5 gap-5 md:w-full mx-auto max-w-[300px] md:max-w-[500px]'>
                  {item.icons?.map((icon, itemIndex) => {
                    return (
                      <motion.div whileHover={{ scale: 1.2, color: `${icon.color}`}} className='text-5xl sm:text-6xl md:text-[5.2rem] transition-all duration-100' key={itemIndex}>{icon.icon}</motion.div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
