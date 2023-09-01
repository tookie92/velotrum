'use client'
import Header from '@/components/Header'
import state from '@/store'
import { MotionConfig } from 'framer-motion'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useSnapshot } from 'valtio'
import Customization from './Customization'
import MonCanvas from '../components/MonCanvas'
import CustomCursor from '../components/CustomCursor'

function Customise() {
  const route = useRouter()
  const snap = useSnapshot(state)


  useEffect(() => {
    state.intro = false
  })
  return (
    <main className='h-screen w-screen relative'>
        <MotionConfig
        transition={{
          type: "spring",
          mass: 5,
          stiffness: 500,
          damping: 50,
          restDelta:0.0001
        }}
      >

        
            <Customization />
            <MonCanvas/>
        </MotionConfig>
    </main>
  )
}

export default Customise