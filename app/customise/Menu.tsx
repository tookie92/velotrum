'use client'
import React, { useEffect, useState } from 'react'
import {AnimatePresence, animate, motion, spring, useMotionValue} from "framer-motion"
import Curve from './Curve'
import { useSnapshot } from 'valtio'
import state from '@/store'
import { useRouter } from 'next/navigation'

function Menu() {  
    const [isOpened, setIsOpened] = useState<boolean>(false)
    const radius = useMotionValue('rounded-md')
    const snap = useSnapshot(state)
    const router =useRouter()
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
             <AnimatePresence>
          {!snap.intro &&
         
            <motion.button
                initial={{
                    y: "-100%",
                    opacity:0
                  }}
                  animate={{
                    y: "0",
                    opacity:1
                    
                  }}
                  exit={{
                    y: "100%",
                    opacity:0
                  }}
                  transition={{
                    duration: 1,
                    ease:[0.87, 0, 0.13, 1]
                  }}
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
            </motion.button>
          }
        </AnimatePresence>
            <AnimatePresence mode="wait">
                {isOpened && 
                <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className={`z-10  p-[50px] fixed top-0 right-0 bottom-0 bg-black overflow-hidden flex flex-col
                    `}
                >
                        <motion.div
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            variants={slide} className="flex-1 flex items-start justify-center flex-col gap-6 p-8">
                            <h1 className='text-xl font-bold text-white'>What a bike</h1>
                            <div className='flex flex-col gap-3'>
                                <h1 className=' mt-3 text-xl font-bold text-white hover:text-orange-300 hover:cursor-pointer'>customization done</h1>
                                <h1 onClick={() => {
                                    setIsOpened(false)
                                    router.push("/")
                                }} className=' mt-3 text-xl font-bold text-white hover:text-orange-300 hover:cursor-pointer'>Go Back</h1>
                            </div>
                        </motion.div>
                        {/* <Curve/> */}
                </motion.div>
                
                }
            </AnimatePresence>
      </>
  )
}

export default Menu