import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
 
  const handleClick = ()=> {
    setIsOpen(!isOpen);
    
  }
  return (
     <>
    {/* // bigger screens */}
    <div className='max-[980px]:hidden flex justify-between min-[900px]:px-10 items-center shadow-lg min-[900px]:py-4 backdrop-blur-xl bg-black/40 min-[900px]:mx-[8rem] rounded-full mt-3'>
      <div className='flex justify-start min-[768px]:gap-20 items-center'>
        <h2 className='text-white py-1 px-2 cursor-pointer'>Kdevs. <span className='ml-10'> | </span></h2>
        <h4 className='text-white py-1 px-2 hover:bg-white/90 hover:text-black ease-in duration-300 cursor-pointer rounded-full '>Works</h4>
        <h4 className='text-white py-1 px-2 hover:bg-white/90 hover:text-black ease-in duration-300 cursor-pointer rounded-full '>Services</h4>
        <h4 className='text-white py-1 px-2 hover:bg-white/90 hover:text-black ease-in duration-300 cursor-pointer rounded-full '>Support</h4>
      </div>
      <div>
        <h4 className=' py-1 px-2 bg-white/90 cursor-pointer hover:bg-black/40 hover:text-white ease-in duration-300 rounded-full text-black'>SignIn</h4>
      </div>
    </div>

    {/* //for mobile phones  */}
    <div className='flex justify-between items-center my-4 mx-5 min-[900px]:hidden'>
    <h2 className='text-xl text-white '>Kdevs.</h2>
    <div className='flex gap-5 items-center justify-center'>
    <div className='text-white'>Icon</div>
    <div onClick={handleClick} className='flex flex-col gap-1 items-end '>
      <div className='w-[20px] h-[3px] bg-white/90'></div>
      <div className='w-[20px] h-[3px] bg-white/90'></div>
      <div className='w-[20px] h-[3px] bg-white/90'></div>
     </div>
    </div>
    </div>

     <div className={`min-[900px]:hidden ${isOpen ? 'bg-black/50' : 'hidden'}`}>
      <div className='flex flex-col gap-3 py-5 items-center text-white'>
        <h4 className='ease-in duration-500 hover:underline cursor-pointer'>Works</h4>
        <h4 className='ease-in duration-500 hover:underline cursor-pointer'>Services</h4>
        <h4 className='ease-in duration-500 hover:underline cursor-pointer'>Support</h4>
      </div>
      <div className='flex flex-col items-center text-white py-2'>
        <h4>SignIn</h4>
      </div>
     </div>
    </>
  )
}

export default Navbar