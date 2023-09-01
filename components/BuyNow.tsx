import React from 'react'
import { Button } from './ui/button'
import { useSnapshot } from 'valtio'
import state from '@/store'
import { useRouter } from 'next/navigation'

function BuyNow({ dark }: { dark: boolean }) {
  const snap = useSnapshot(state)
  const route = useRouter()
  return (
    <section className=' snap-start third-section h-screen relative p-24'>
      <div className='flex w-full h-full items-center flex-row justify-end'>
        
        <div className='w-[50%] relative z-40 items-center flex flex-col gap-8'>
          <h2 className={`${dark ? "text-white" : "text-slate-600"} text-6xl font-bold `}>Customize your bike</h2>
           <p className={`${dark? "text-white":"text-slate-600"} mt-3 text-lg text-center w-full z-40`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, dolor neque dolore quod eum atque alias error voluptatum nesciunt numquam perspiciatis accusamus exercitationem iure quas, consequuntur non? Aut, nihil quasi?
          </p>
          <Button onClick={() =>route.push("/customise")} >
              Start here
            </Button>
        </div>
       
      </div>
    </section>
  )
}

export default BuyNow