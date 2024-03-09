import React from 'react'
import Background from '../Background'
import img1 from "../../../public/assets/img1.png"

const Hero = () => {
  return (
    <>
    <Background/>
    <div className='mt-10 text-center'>
    <div className='min-[900px]:hidden w-[15rem] h-[15rem] bg-yellow-500 absolute translate-x-[-50%] translate-y-[-50%] top-[0%] left-[0%] z-[-1] blur-[5rem] rounded-full'></div>
    <div className='min-[900px]:hidden w-[15rem] h-[15rem] bg-blue-800 absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] z-[-1] blur-[5rem] rounded-full'></div>
    {/* <div className='min-[900px]:hidden w-[15rem] h-[15rem] bg-yellow-500 absolute translate-x-[-50%] translate-y-[-50%] top-[0%] left-[100%] z-[-1] blur-[6rem] rounded-full'></div> */}
    <div>
      <h1 className='max-[900px]:text-xl min-[900px]:text-[4rem] font-semibold min-[900px]:mt-16 my-5 max-[900px]:text-black text-white'>We Make Everything Look <br /> As Good As You Want</h1>
      <p className='text-[13px] min-[900px]:text-l min-[900px]:text-white/90
      min-[900px]:mx-[20rem] mx-16 opacity-90 text-black/90 my-3'>Our Products seek to immersive extended reality experience that inspire  and westruck first time and experienced user alike.</p>
      <button className='mt-10 max-[900px]:bg-black/70 max-[900px]:text-white bg-white/70 p-2 mx-2 text-sm font-semibold '>Contact Us -> </button>
      <button className='bg-black/40 p-2 text-sm mx-2 text-white font-semibold '>Learn More</button>
    </div>
      <img src={img1} alt="" 
      className='mt-5 min-[900px]:w-[50%] min-[900px]:ml-[25%]'
      />
    </div>
    </>
  )
}

export default Hero