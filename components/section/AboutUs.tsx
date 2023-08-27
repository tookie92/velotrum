
import Section from '@/app/components/sections/Section'
import React, { useLayoutEffect, useRef } from 'react'
import {motion} from "framer-motion"

function AboutUs() {
  const aboutRef = useRef<any>()
 
  return (
    <Section>
      <motion.h3 className=' leading-snug text-6xl font-extrabold'>
        Hi I{`'`}m
        <br />
        <span className='bg-white italic px-1'>Joseph Ikinda</span>
      </motion.h3>
      <motion.p
        className='text-lg mt-4 text-gray-600'
        initial={{
          opacity: 0,
          y:25
        }}
        whileInView={{
          opacity: 1,
          y:0
        }}
        transition={{
          duration: 1,
          delay:1.5
        }}
      >
        I make YouTube videos to help developers
        <br />
        learn how to build 3D apps
      </motion.p>
      <motion.button
        className={`bg-indigo-600 text-white py-4 px-8 
      rounded-lg font-bold text-lg mt-16`}
      initial={{
        opacity: 0,
        y:25
      }}
      whileInView={{
        opacity: 1,
        y:0
      }}
      transition={{
        duration: 1,
        delay:2
      }}
       
      >
        Contact me
      </motion.button>
    </Section>
  )
}

export default AboutUs