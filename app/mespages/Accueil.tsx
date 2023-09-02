import AboutUs from '@/components/AboutUs'
import BuyNow from '@/components/BuyNow'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import state from '@/store'
import { MotionConfig } from 'framer-motion'
import { useSnapshot } from 'valtio'
import MonCanvas from '../components/MonCanvas'
import { useEffect } from 'react'

function Accueil() {
  useEffect(() => {
    state.intro = true
    async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll()
    }
  })
    const snap  = useSnapshot(state)
    return (
        <>
                  <div
                    className=" h-screen z-20 w-full fixed top-0 hidden lg:block">
                    <MonCanvas/>
                  </div>
                  <Hero data-scroll dark={snap.dark} />
                  <AboutUs data-scroll dark={snap.dark} />
                  <BuyNow data-scroll  dark={ snap.dark} />
        </>
        
      )
}

export default Accueil