import AboutUs from '@/components/AboutUs'
import BuyNow from '@/components/BuyNow'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import {animate, stagger} from "framer-motion"
import React, { useEffect, useRef } from 'react'
import SplitType from 'split-type'

function MonInter() {
  // const textRef = useRef<any>()
  // const backgroundLoad = useRef<any>()
  
  // useEffect(() => {
  //   const paragraphe= new SplitType(textRef.current,{types:"chars, words"})
  //   const sequence : any = [
  //     [textRef.current, { opacity: 1 }, { duration: 0}],
  //     [paragraphe.chars, { y: ["100%", "0%"]  }, { delay: stagger(0.1), duration: 0.8}],
  //     [paragraphe.chars, { y: ["-100%"], opacity: 0 }, { delay: stagger(0.1), duration: 0.8, at:"+0.1"}],
  //     [backgroundLoad.current, { y: '-100%'},{ delay: 0.1,duration:0.8, ease:"easeInOut", at: "-0.35"} ],
  //   ]
    
  //    animate(sequence)
  // })
  return (
    <div className=' h-screen w-screen'>
      <Header/>

  
      <Hero/>
      <AboutUs/>
      <BuyNow/> 
      {/* <h1 className='text-black '>Hallo</h1> */}
      
      {/* <div className="fixed flex justify-center items-center h-screen w-screen overflow-y-hidden z-50" >
        <div ref={backgroundLoad} className='absolute bg-[#1A191A] w-full h-full'/>
            <h1 ref={textRef} className="text-3xl font-bold text-white relative opacity-0">Hello</h1>
      </div> */}
    </div>
  )
}

export default MonInter