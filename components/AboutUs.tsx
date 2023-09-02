import React from 'react'
import {motion} from "framer-motion"

function AboutUs({dark}:{dark:boolean}) {
  return (
    <section data-scroll className='snap-start relative second-section h-screen p-24'>
      <div
        className='flex w-full h-full items-center'
      >
        <motion.div
          className=' flex flex-col w-full'
          initial={{
            rotate: 45,
            x: 1000,
            opacity:0
          }}
          whileInView={{
            rotate: 0,
            x: 0,
            opacity:1
          }}
          transition={{
            duration: 1,
            ease:"linear"
            
          }}
        >
          <h2 className={`${dark? "text-white":"text-slate-600"} text-7xl font-black uppercase`}>About us</h2>
          <p className={`${dark? "text-white":"text-slate-600"} mt-3 text-lg text-justify w-[40%] z-40`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, dolor neque
            dolore quod eum atque alias error voluptatum nesciunt
            numquam perspiciatis accusamus exercitationem iure quas, consequuntur non? Aut, nihil quasi?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, dolor neque
            dolore quod eum atque alias error voluptatum nesciunt numquam perspiciatis accusamus exercitationem iure quas,
            consequuntur non? Aut, nihil quasi?
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutUs