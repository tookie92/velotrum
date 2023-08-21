import React from 'react'

type SectionProps = {
    children: React.ReactNode
}

function Section({children} : SectionProps) {
  return (
      <section
          className='
            w-screen h-screen p-8 max-w-screen-2xl mx-auto
            flex flex-col items-start justify-center
          '
      >
          {children}
      </section>
  )
}

export default Section