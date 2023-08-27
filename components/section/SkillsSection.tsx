
import Section from '@/app/components/sections/Section'
import React, { useLayoutEffect, useRef } from 'react'
import {motion, stagger} from "framer-motion"
const skills = [
  {
    title: "Threejs / React Three Fiber",
    level: 80,
  },
  {
    title: "React / React Native",
    level: 90,
  },
  {
    title: "Nodejs",
    level: 90,
  },
  {
    title: "Typescript",
    level: 60,
  },
  {
    title: "3D Modeling",
    level: 40,
  },
];
const languages = [
  {
    title: "🇫🇷 French",
    level: 100,
  },
  {
    title: "🇺🇸 English",
    level: 80,
  },
  {
    title: "🇯🇵 Japanese",
    level: 20,
  },
];
function SkillsSections() {
  const aboutRef = useRef<any>()
 
  return (
    <Section>
    <motion.div whileInView={"visible"}>
      <h2 className="text-5xl font-bold">Skills</h2>
      <div className=" mt-8 space-y-4">
        {skills.map((skill, index) => (
          <div className="w-64" key={index}>
            <motion.h3
              className="text-xl font-bold text-gray-800"
              initial={{
                opacity:0
              }}
              variants={{
                visible: {
                  opacity: 1,
                  transition:{
                    duration: 1,
                    delay: 1+index * 0.2
                  }
                }
              }}
              
            >
              {skill.title}
            </motion.h3>
            <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
              <motion.div
                className="h-full bg-indigo-500 rounded-full "
                style={{ width: `${skill.level}%` }}
                initial={{
                  scaleX: 0,
                  originX:0
                }}
                variants={{
                  visible: {
                    scaleX: 1,
                    transition:{
                      duration: 1,
                      delay: 1+index * 0.2
                    }
                  }
                }}
               
              />
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-5xl font-bold mt-10">Languages</h2>
        <div className=" mt-8 space-y-4">
        {languages.map((language, index) => (
          <div className="w-64" key={index}>
            <motion.h3
              className="text-xl font-bold text-gray-800"
              initial={{
                opacity:0
              }}
              variants={{
                visible: {
                  opacity: 1,
                  transition:{
                    duration: 1,
                    delay: 2+index * 0.2
                  }
                }
              }} 
              
            >
              {language.title}
            </motion.h3>
            <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
              <motion.div
                className="h-full bg-indigo-500 rounded-full "
                style={{ width: `${language.level}%` }}
                initial={{
                  scaleX: 0,
                  originX:0
                }}
                variants={{
                  visible: {
                    scaleX: 1,
                    transition:{
                      duration: 1,
                      delay: 2+index * 0.2
                    }
                  }
                }}
               
              />
            </div>
          </div>
        ))}
      </div>
      </div>
    </motion.div>
  </Section>
  )
}

export default SkillsSections