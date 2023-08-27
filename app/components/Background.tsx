import React from 'react'
import * as THREE from "three"
import {LayerMaterial, Depth  } from "lamina";

function Background() {
  return (
      <mesh scale={100}>
          <sphereGeometry  args={[1,64,64]}/>
          <LayerMaterial side={THREE.BackSide}>
              <Depth
                  colorA="#160F29"
                  colorB="#246A73"
                  alpha={1}
                  mode="normal"
                  near={130}
                  far={200}
                  origin={[100, 100, -100]}
              />
          </LayerMaterial>
    </mesh>
  )
}

export default Background