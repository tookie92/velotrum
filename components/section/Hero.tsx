'use client'
import SplitType from "split-type"
import React, { useEffect, useRef } from 'react'
import { animate, stagger } from "framer-motion"

function Hero() {
  const helloRef = useRef<any>()
  
  useEffect(() => {
    const paragraphe = new SplitType(helloRef.current, { types: "chars, words" })
    
    animate(paragraphe.chars!,
      {opacity: [0,1],x: ["100%", "0%"]},
      {duration:0.2, delay:stagger(0.2)}
    )
  })
  return (
    <section className='premier w-full flex items-center p-8 bg-slate-800 h-screen'>
     <h1 ref={helloRef} className="text-9xl font-black text-white">hello .</h1>
    </section>
  )
}

export default Hero