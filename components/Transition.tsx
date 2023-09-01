import React from 'react'
import {motion} from "framer-motion"

interface TransitionPops{
    OgComponent: any
}

function Transition({OgComponent}: TransitionPops) {
    return (
      <>
        <OgComponent />
            <motion.div
                className=''
            animate={{}}
        />
      </>
  )
}

export default Transition