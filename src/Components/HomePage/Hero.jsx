import React from 'react'
import Background from "../Background"
import v1 from "../../../public/assets/v3.mp4"

const Hero = () => {
  return (
    <>
    <div className='h-full'>  <Background/></div>
    <div>
        <img className='w-full h-full blur-md absolute z-[-10]' src="https://i.pinimg.com/736x/25/ab/92/25ab9231fc501c6a1f9abde2641d8dd2.jpg" alt="" />
        <h1 className='text-[2rem] pt-10 font-semibold tracking-wider text-[rgba(255,255,255,0.8)] text-center min-[768px]:text-[3rem] min-[1024px]:text-[5rem]'>Revolutionize  Your <br/>Business with Us.</h1>
          <p className='w-[80%] ml-[10%] text-center mt-6 text-[rgba(255,255,255,0.7)] text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dicta perferendis ducimus dolores exercitationem culpa veritatis quaerat enim odio necessitatibus?</p>
          <video src={v1} loop autoPlay className=' w-full blur-md aspect-square min-[768px]:mt-[-230px] max-[768px]:mt-[-80px] absolute z-[-10]'></video>
          <div className=' flex justify-center items-center mt-10 text-white'>
            <button className='border p-2 hover:bg-black  ease-in duration-500 rounded-full'>Get Yours Now</button>
          </div>
          <div className='max-[768px]:hidden text-center text-white font-bold rotate-180 mt-10 text-xl'>
            <span className='p-1 border rounded-full hover:bg-black cursor-pointer ease-in duration-300'>^</span>
          </div>
    </div>
    </>
  )
}

export default Hero