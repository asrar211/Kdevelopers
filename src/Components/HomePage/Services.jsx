import React from 'react'
import { CiPen } from "react-icons/ci";
import { CgWebsite } from "react-icons/cg";
import { GrCloudSoftware } from "react-icons/gr";

const Services = () => {
  return (
    <div className='mt-10'>
        <div className='w-[50%] h-[100vh] absolute bg-yellow-300 translate-x-[50%] translate-y-[20%] blur-[4.5rem] z-[-1]'></div>
        <div className='text-center'>

            <h2 className='text-[1.6rem] font-bold '>Services we Provide</h2>
            <p className='mx-20 mt-5 text-sm '>We are redefining the way the world communicated. Works and Works. </p>
        </div>

        <div className='mt-10 flex flex-col items-center'>
            <div className=' w-[60%] py-10 ease-in duration-300 hover:bg-[rgba(133,131,131,0.1)]'>
                <div className='ml-5 pl-1 rounded-full bg-[rgba(0,0,0,0.2)] w-[10%]'><CiPen size={25}/></div>
                <h2 className='ml-5 font-semibold'>UI/UX Design</h2>
                <p className='mx-5 text-l opacity-80'>High quality and cutting edge design for software products.</p>
            </div>
            <div className=' w-[60%] py-10 hover:bg-[rgba(133,131,131,0.1)] ease-in duration-300'>
            <div className='ml-5 pl-1 rounded-full bg-[rgba(0,0,0,0.2)] w-[10%]'><CgWebsite size={23}/></div>
                <h2 className='ml-5 font-semibold'>Web Development</h2>
                <p className='mx-5 text-l opacity-80'>With a design first methodology we are kept providing user friendly websites.</p>
            </div>
            <div className=' w-[60%] py-10 hover:bg-[rgba(133,131,131,0.1)] ease-in duration-300'>
            <div className='ml-5 pl-1 rounded-full bg-[rgba(0,0,0,0.2)] w-[10%]'><GrCloudSoftware size={23}/></div>
                <h2 className='ml-5 font-semibold'>Software Development</h2>
                <p className='mx-5 text-l opacity-80'>With a design first methodology we are kept providing user friendly websites.</p>
            </div>
        </div>
    </div>
  )
}

export default Services