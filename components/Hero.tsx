import React from 'react'
import {motion} from "framer-motion"

function Hero({dark}:{dark:boolean}) {
  return (
    <section className='snap-start relative flex w-full text-white h-screen'>
      <div className='absolute bottom-[17%] z-30  left-[7%]'>
        <motion.div
          initial={{
            x: -100,
            opacity:0
          }}
        
          whileInView={{
            x:0,
            opacity:1
          }}
          transition={{
            duration: 0.6,
            delayChildren:0.6,
            staggerChildren:0.1
          }}
        >
          <h1
          className={`${dark? "text-orange-300": "text-slate-600"}  text-5xl font-bold`}
          >
            Velotum 2023
          </h1>
          <h2
            className={`${dark ? "text-white" : "text-slate-600"  } font-light mt-4`}
          >
            Pure Speed | Built To win
          </h2>
        </motion.div>

      </div>
      <div className={`absolute top-[27%] right-[5%] flex flex-col ${dark? "text-white":"text-slate-600"}`}>
        <div>
          <p>Limited Edited</p>
        </div>
        <div className='flex items-end justify-end w-[100%]'>
          <p>
            .100
          </p>
        </div>
      </div>
      <div className='relative flex w-full h-full z-10 justify-center items-center'>
          <h1 className={`${dark? "text-white":"text-slate-600"}  text-9xl uppercase font-bold`}>Ride With Style</h1>
      </div>
    </section>
  )
}

export default Hero