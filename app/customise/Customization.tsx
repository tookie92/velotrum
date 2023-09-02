'use client'
import state from '@/store'
import React, { useEffect, useRef, useState } from 'react'
import { useSnapshot } from 'valtio'
import {animate, motion, stagger} from "framer-motion"
import SplitType from 'split-type'

function Customization() {
  const snap = useSnapshot(state)
  const title = useRef<any>()
  const background = useRef<any>()
  useEffect(() => {
    const paragraphe = new SplitType(title.current, { types: "chars, words" })
    const sequence : any = [
      [title.current,
      { opacity:1},
      {type:"spring", duration:0}],
      [paragraphe.chars!,
      { opacity: [0, 1], y: ["100%", "0%"] },
      {type:"spring", duration:0.5, delay:stagger(0.1)}],
      [paragraphe.chars!,
      { opacity: [1, 0], y: ["0%", "-100%"] },
        { type: "spring", duration: 0.3, delay: stagger(0.1), at:"+0.1" }],
        [background.current,
          { y: "-100%" },
          { type: "spring", duration: 1, at:"0.9" },
        ]
      
    ]
    animate(sequence)
  },[])
  return (
    <>
      <motion.div
       initial={{
          y: 100,
         opacity:0
        }}
        animate={{
          y: 0,
          opacity:1
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 5,
          
        }}
        className=' absolute flex gap-3 bottom-[10%] z-40 left-[45%]'>
        {
          snap.colors.map((color, index) => (
            <motion.div
              key={index}
              className='
            h-8 w-8
            rounded-full
            outline outline-offset-2
            outline-2 outline-black
             cursor-pointer
            '
              style={{ background: color }}
              onClick={()=> state.color = color}
            />
            ))
          }
          
        <div />
        
      </motion.div>
      {/* <div ref={background}
          className='fixed bg-primary z-40 h-screen w-screen'
      />
      <h1 ref={title} className='absolute top-[50%] left-[50%] z-50 text-stone-300 font-bold text-lg opacity-0'>
          Velotrum
      </h1> */}
    </>
  )
}

export default Customization