'use client'
import { Canvas} from '@react-three/fiber'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import Experience from './Experience'
import  gsap  from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useSnapshot } from 'valtio'
import state from '@/store'
gsap.registerPlugin(ScrollTrigger)


function MonCanvas() {
  const [section, setSection] = useState<any>([0,0,0])
  const [scene, setScene] = useState<any>([0,0,0])
  // const [menuOpened, setMenuOpened] = useState(false)
  const snap = useSnapshot(state)
  useLayoutEffect(() => {
    if (snap.intro) {
      setSection([-10.782102351962124, 49.98315421076273, 313.01263861123016])
      setScene([0, -60.00, 0])
    } else {
      setSection([0,1.33,-260.00])
      setScene([0,0,0])
    }
  }, [setSection, snap])
  console.log("section:", section);
  console.log("scene:", scene);

  
  return (
    <>
      <Canvas
        shadows
        camera={{ position: section, fov: 25 }}
        scene={{position:scene}}
      >
         <Experience/>
      </Canvas>
     
    </>
  )
}


export default MonCanvas