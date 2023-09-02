'use client'
import React, { useEffect, useState } from 'react'
import {AnimatePresence, animate, motion, spring, useMotionValue} from "framer-motion"
import Curve from './Curve'

function Menu() {  
    const [isOpened, setIsOpened] = useState<boolean>(false)
    const radius = useMotionValue('rounded-md')
    const variants = {
        hidden: {
            x: "calc(100% + 100px)",
            transition: {
                duration: 0.8,
                ease:[0.76, 0, 0.24, 1]
            }
        },
        show: {
            x: "0",
            transition: {
                duration: 0.8,
                ease:[0.76, 0, 0.24, 1]
            }
        },
        exit: {
            x: "calc(100% + 100px)",
            transition: {
                duration: 0.8,
                ease:[0.76, 0, 0.24, 1]
            }
        },
    }
    const slide = {
        hidden: {
            x: "180px",
            transition: {
                duration: 0.8,
                ease:[0.76, 0, 0.24, 1]
            }
        },
        show: {
            x: "0",
            transition: {
                duration: 0.8,
                ease:[0.76, 0, 0.24, 1]
            }
        },
        exit: {
            x: "180px",
            transition: {
                duration: 0.8,
                ease:[0.76, 0, 0.24, 1]
            }
        },
    }
    useEffect(() => {
        
        animate(radius, isOpened ?   "rounded-md": "rounded-full",
        {type:"spring", duration:0.8}
        )
    },[isOpened, setIsOpened,radius])
    return (
      <>
            <button
                onClick={()=>setIsOpened(!isOpened)}
                className={`p-2 w-8 gap-[2px] justify-center flex items-center flex-col z-20  h-8 ${radius.get()} bg-purple-500 `}>
                
                <motion.div
                    className={`h-0.5 w-full rounded-xl bg-white`}
                    animate={{
                        opacity: isOpened?0:1,
                    }}
                    transition={{
                        type: "spring",
                        duration:0.5
                    }}
                />
                <motion.div
                    animate={{
                        rotate: isOpened ? -45 : 0,
                        x: isOpened ? 1 : 0,
                    }}
                    transition={{
                        type: "spring",
                        duration:0.5
                    }}
                    className={`h-0.5 w-full rounded-xl bg-white`} />
                <motion.div
                    animate={{
                        rotate: isOpened ? 45 : 0,
                        y: isOpened ? -4 : 0,
                        x: isOpened? 1:0
                    }}
                    transition={{
                    type: "spring",
                    duration:0.5
                }}
                    className={`h-0.5 w-full rounded-xl bg-white`} />
            </button>
            <AnimatePresence mode="wait">
                {isOpened && 
                <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className={`z-10  p-[100px] fixed top-0 right-0 bottom-0 bg-black overflow-hidden flex flex-col
                    `}
                >
                        <motion.div
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            variants={slide} className="flex-1 flex items-start justify-center flex-col gap-6 p-8">
                            <h1 className='text-xl text-white'>Menu</h1>
                        </motion.div>
                        {/* <Curve/> */}
                </motion.div>
                
                }
            </AnimatePresence>
      </>
  )
}

export default Menu