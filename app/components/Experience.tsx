'use client'
import React from 'react'
import { Model } from './Model'
import {motion} from "framer-motion-3d"
import { Environment, OrbitControls, Scroll, ScrollControls, Stage } from '@react-three/drei'

function Experience() {
  return (
    <>
      <OrbitControls enableZoom={ false} />
      <ambientLight/>     
      <Environment preset='city' />
      <motion.group
        position={[1.5, 2, 3]}
        scale={[1, 1, 1]}
        rotation-y={-Math.PI/-4}
      >
           <Model/>
      </motion.group>
          
      </>
  )
}

export default Experience