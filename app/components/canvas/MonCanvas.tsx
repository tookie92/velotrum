'use client'

import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Model } from '../Model'
import Experience from './Experience'

function MonCanvas() {
  return (


    <Canvas camera={{position:[3.8007523003396915,3.9864734001594964, 9.296850270770959]}}>
       <Experience/>
    </Canvas>
  )
}

export default MonCanvas