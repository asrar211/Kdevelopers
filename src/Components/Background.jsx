import React from 'react'
import v1 from "../../public/assets/v1.mp4"

const Background = () => {
  return (
    <div>
        <div className='w-[400px] h-[400px] blur-[15rem] absolute translate-x-[-50%] translate-y-[-50%] bg-blue-300 z-[-1] '></div>
        <div>
            <video src={v1} loop autoPlay className='absolute min-[900px]:hidden z-[-1] blur-sm'></video>
            <video src={v1} loop autoPlay className='absolute top-[30.4rem] min-[900px]:hidden z-[-1] blur-sm '></video>
        </div>
    </div>
  )
}

export default Background