'use client'
import React from 'react'
import { Switch } from './ui/switch'
import { useSnapshot } from 'valtio'
import {BsMoon, BsSun} from "react-icons/bs"
import state from '@/store'
import { useRouter } from 'next/navigation'
import Menu from '@/app/customise/Menu'
import Curve from '@/app/customise/Curve'

function Header() {
  const snap = useSnapshot(state)
  const route =useRouter()
  return (
    <div className=' z-50 h-[60px] p-9 w-full flex items-center fixed justify-between'>
      <div className={`${snap.dark ?   "text-white": "text-slate-600"} font-bold text-2xl cursor-pointer`}
        onClick={()=>route.push('/')}
      >
        Velotrum
      </div>
      <div className='flex gap-3'>
        <div className='flex w-[100px] space-x-2 items-center'>
            <BsSun className={`${snap.dark? " text-orange-300":"  text-orange-400"}`} />
              <Switch onClick={() => (state.dark = !state.dark)} />
            <BsMoon className={`${snap.dark? "text-sky-300":" text-sky-900"}`}/>
        </div>
        <Menu />
        {/* <Curve/> */}
      </div>
    </div>
  )
}

export default Header