'use client';
import React from 'react'
import SectionOne from './sections/SectionOne'
import SectionTwo from './sections/SectionTwo'
import SectionThree from './sections/SectionThree'
import SectionFour from './sections/SectionFour' 
import Home from './sections/Home'

const Index = () => {
  return (
    <>
      <Home/>
      <SectionOne/> 
      <SectionTwo/>
      <SectionThree/> 
    </>
  )
}

export default Index