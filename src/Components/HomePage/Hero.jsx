import React from 'react'
import Background from "../Background"
import v1 from "../../../public/assets/v3.mp4"

const Hero = () => {
  return (
    <>
    <div className='h-full'>  <Background/></div>
    <div>
        <img className='max-[768px]:w-[95vw] w-full h-full blur-md absolute z-[-10]' src="https://i.pinimg.com/736x/25/ab/92/25ab9231fc501c6a1f9abde2641d8dd2.jpg" alt="" />
        <h1 className='w-[90%] ml-[25%] text-[2rem] pt-10 text-center font-semibold tracking-wider text-[rgba(255,255,255,0.8)] min-[768px]:text-[3rem] min-[1024px]:text-[5rem]'>Revolutionize  Your <br/>Business with Us.</h1>
          <p className='w-[90%] ml-[25%] text-center mt-6 text-[rgba(255,255,255,0.7)] text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dicta perferendis ducimus dolores exercitationem culpa veritatis quaerat enim odio necessitatibus?</p>
          <video src={v1} loop autoPlay className=' max-[768px]:w-[95vw] w-full blur-md aspect-square min-[768px]:mt-[-230px] max-[768px]:mt-[-80px] absolute z-[-10]'></video>
          <div className=' flex justify-center items-center ml-[35%] mt-10 text-white'>
            <button className='border p-2 hover:bg-black  ease-in duration-500 rounded-full'>Get Yours Now</button>
          </div>
          <div className='w-[50%] ml-[11.7rem] mt-6 max-[768px]:hidden'>
            <h1 className='text-xl text-white rotate-180 p-1 cursor-pointer'>^</h1>
          </div>
    </div>
    </>
  )
}

export default Hero