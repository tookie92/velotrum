import React from 'react'
import {motion} from "framer-motion"

type SectionProps = {
    children: React.ReactNode
}

function Section({children} : SectionProps) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y:50
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay:0.6
        }
      }}
          className='
            w-screen h-screen p-8 max-w-screen-2xl mx-auto
            flex flex-col items-start 
          '
      >
          {children}
      </motion.section>
  )
}

export default Section