import React from 'react'
import v2 from "../../assets/v2.mp4"

const HowitWorks = () => {
  return (
    <div className='mt-10'>
        <h3 className='text-xl font-bold text-center'>-----Works-----</h3>
        <video src={v2} autoPlay loop
        className='mx-5 w-[90%] mt-5'></video>
        <video src={v2} autoPlay loop
        className=' mx-5 w-[90%] mt-5'></video>
    </div>
  )
}

export default HowitWorks