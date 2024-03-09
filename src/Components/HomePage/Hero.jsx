import React from 'react'
import Background from '../Background'

const Hero = () => {
  return (
    <>
    <Background/>
    <div className='mt-10 text-center'>
      <h1 className='max-[900px]:text-xl min-[900px]:text-[4rem] font-semibold min-[900px]:mt-16 my-5 max-[900px]:text-black text-white'>We Make Everything Look <br /> As Good As You Want</h1>
      <p className='text-[13px] min-[900px]:text-l min-[900px]:text-white/90
      min-[900px]:mx-[20rem] mx-16 opacity-90 text-black/90 my-3'>Our Products seek to immersive extended reality experience that inspire  and westruck first time and experienced user alike.</p>
      <button className='mt-10 bg-white/70 p-2 mx-2 text-sm font-semibold '>Contact Us -> </button>
      <button className='bg-black/40 p-2 text-sm mx-2 text-white font-semibold'>Learn More</button>
    </div>
    </>
  )
}

export default Hero