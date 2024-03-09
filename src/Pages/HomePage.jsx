import React from 'react'
import Hero from "../Components/HomePage/Hero"
import Works from "../Components/HomePage/Works"
import HowitWorks from '../Components/HomePage/HowitWorks'

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <HowitWorks/>
      <Works/>
    </div>
  )
}

export default HomePage