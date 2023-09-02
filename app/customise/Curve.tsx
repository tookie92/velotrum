import React from 'react'

function Curve() {
    const initialPath=`M100 0 L100 ${window.innerHeight} Q0 ${window.innerHeight / 2} M100 0`
  return (
      <svg className='absolute top-0 -left-[99px] stroke-none w-[100px] h-full fill-[#292929]'>
          <path d={initialPath}></path>
      </svg>
  )
}

export default Curve