import { OrbitControls, RoundedBox, Scroll, ScrollControls, Stage } from '@react-three/drei'
import React from 'react'
import { Model } from '../Model'

function Experience() {
    return (
      <>
        <OrbitControls/>
        <Stage environment="city" >
            <Model />
        </Stage>
       
        
      </>
  )
}

export default Experience