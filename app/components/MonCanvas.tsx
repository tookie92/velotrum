'use client'
import { Canvas} from '@react-three/fiber'
import React, { useEffect, useState } from 'react'
import Experience from './Experience'
import { Scroll, ScrollControls } from '@react-three/drei'
import Interface from './sections/Interface'
import ScrollManager from './ScrollManager'
import Menu from './Menu'


function MonCanvas() {
  const [section, setSection] = useState(0)
  const [menuOpened, setMenuOpened] = useState(false)

  
  return (
    <>
        <Canvas shadows
          camera={{ position: [0.6404647931201797,30.60143306317257,-236.57482425548693] ,fov:42}}
         scene={{position:[-20.0,-50.0,0]}}
      >
        <color attach="background" args={["#FFF6DC"]}/>
          <ScrollControls pages={4} damping={0.1}>
            {/* <ScrollManager section={section} onSectionChange={setSection} /> */}
              <Experience />
              <Scroll html>
              <Interface/>
              </Scroll>
            </ScrollControls>
      </Canvas>
      <Menu
        onSectionChange={setSection}
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
      />
    </>
  )
}


export default MonCanvas