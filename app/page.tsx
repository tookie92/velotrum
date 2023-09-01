'use client'

import { MotionConfig } from "framer-motion";
import Accueil from "./mespages/Accueil";
import { useSnapshot } from "valtio";
import state from "@/store";


export default function Home() {
  const snap = useSnapshot(state)
  return (
    <MotionConfig
    transition={{
      type: "spring",
      mass: 5,
      stiffness: 500,
      damping: 50,
      restDelta:0.0001
    }}
  >

    <main className={` snap-y overflow-x-hidden transition-all  ${snap.dark === false ? "bg-white": "dark bg-black"   }`}>
        <Accueil />
    </main>
    </MotionConfig>
  )
}
