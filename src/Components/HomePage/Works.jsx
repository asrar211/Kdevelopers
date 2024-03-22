import React from 'react'
import img from "../../assets/img1.png"

const Works = () => {
  return (
    <>
   <div className='mt-10'>
    <div className='w-[50%] h-[50rem] bg-red-500 absolute translate-x-[50%] z-[-1] blur-[3rem]'>.</div>
        <h2 className='text-center text-[1.5rem] font-bold'>Works</h2>
    <div className='mt-5 bg'>
    <div className='flex flex-col items-center  mx-10 bg-[rgba(0,0,0,0.1)]'>
        <img src={img} alt="" 
        className='w-[80%]'/>
        <h4 className='text-lg font-semibold'>Title</h4>
        <p className='text-sm opacity-80 text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, doloribus?</p>
        <button className='bg-black/60 text-white px-1 my-5 rounded-sm font-semibold text-l'>Visit</button>
    </div>
   </div>

   <div className='mt-5'>
    <div className='flex flex-col items-center  mx-10 bg-[rgba(0,0,0,0.1)]'>
        <img src={img} alt="" 
        className='w-[80%] '/>
        <h4 className='text-lg font-semibold'>Title</h4>
        <p className='text-sm opacity-80 text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, doloribus?</p>
        <button className='bg-black/60 text-white px-1 my-5 rounded-sm font-semibold text-l'>Visit</button>
    </div>
   </div>
   </div>
   </>
  )
}

export default Works