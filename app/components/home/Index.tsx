'use client';
import React from 'react'
import SectionOne from './sections/SectionOne'
import SectionTwo from './sections/SectionTwo'
import SectionThree from './sections/SectionThree'
import SectionAbout from './sections/SectionAbout'

const Index = () => {
  return (
    <>
      <SectionOne/>
      <SectionAbout/>
      <SectionTwo/>
      <SectionThree/>
    </>
  )
}

export default Index