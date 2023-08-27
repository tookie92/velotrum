import React from 'react'
import Section from './Section'
import AboutUs from '@/components/section/AboutUs'
import SkillsSections from '@/components/section/SkillsSection'
import ContactUs from '@/components/section/ContactUs'

function Interface() {
    return (
      <div className='flex flex-col items-center w-screen'>
        <AboutUs/>
        <SkillsSections/>
        <Section>
            <h1>Home</h1>
        </Section>
       <ContactUs/>
      </div>
  )
}

export default Interface