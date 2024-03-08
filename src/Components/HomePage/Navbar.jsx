import React, { useState } from 'react'
import {Link} from "react-router-dom"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    setIsMenuOpen(!isOpen);
  };

  return (
    <>
    <div className='max-[768px]:hidden'>
     <div className='flex justify-around items-center rounded-full my-4 text-white bg-[rgba(0,0,0,0.3)] sm:w-[50%] ml-[42%] py-2'>
      <Link to="/"><h2 className='text-[20px] text-white drop-shadow-2xl px-3 cursor-pointer py-1 hover:text-blue-900 ease-in duration-300'>Kdevs</h2></Link>
      <h4 className='text-[15px] hover:bg-white hover:text-black ease-in duration-500 px-3 cursor-pointer py-1 rounded-full'>Works</h4>
      <h4 className='text-[15px] hover:bg-white hover:text-black ease-in duration-500 px-3 cursor-pointer py-1 rounded-full'>Services</h4>
      <h4 className='text-[15px] hover:bg-white hover:text-black ease-in duration-500 px-3 cursor-pointer py-1 rounded-full'>Support</h4>
      <Link to='/signin'><h4 className='text-[15px] bg-white text-black hover:bg-[rgba(0,0,0,0.7)] hover:text-white ease-in duration-300 px-3 cursor-pointer py-1 rounded-full'>SignIn</h4></Link>
     </div>
    </div>

    {/* //hamburger menu */}
    <div onClick={handleClick}>
        {isMenuOpen ? (
        <div className='min-[768px]:hidden flex flex-col justify-center items-center my-4 bg-[rgba(0,0,0,0.3)] w-[20%] ml-[55%] py-2 rounded-full'>
        <div className='w-[20px] rotate-45 translate-y-[6px] ease-in duration-300 bg-white h-[3px] mb-[3px]'> </div>
        <div className='w-[20px] rotate-[-45deg] ease-in duration-300  bg-white h-[3px] mb-[3px]'> </div>
        </div>
        ) : (
          <div className='min-[768px]:hidden flex flex-col justify-center items-center my-4 bg-[rgba(0,0,0,0.3)] w-[20%] ml-[55%] py-2 rounded-full'>
          <div className='w-[20px] ease-in duration-300 bg-white h-[3px]  mb-[3px]'> </div>
          <div className='w-[20px] ease-in duration-300 bg-white h-[3px] mb-[3px]'> </div>
          <div className='w-[20px] ease-in duration-300 bg-white h-[3px] mb-[3px]'> </div>
          </div>
        )}
        </div>

   {/* for mobile screens */}
         {isOpen && (
        <div>
        <div className='min-[768px]:hidden w-[100vw]'>
     <div className='flex flex-col justify-around items-center gap-4 my-4 text-white bg-[rgba(0,0,0,0.3)] py-2'>
      <Link to="/"><h2 className='text-[25px] underline text-white drop-shadow-2xl px-3 cursor-pointer py-1 '>Kdevs</h2></Link>
      <h4 className='text-[15px] hover:bg-white hover:text-black ease-in duration-500 px-3 cursor-pointer py-1 rounded-full'>Works</h4>
      <h4 className='text-[15px] hover:bg-white hover:text-black ease-in duration-500 px-3 cursor-pointer py-1 rounded-full'>Services</h4>
      <h4 className='text-[15px] hover:bg-white hover:text-black ease-in duration-500 px-3 cursor-pointer py-1 rounded-full'>Support</h4>
      <Link to='/signin'><h4 className='text-[15px] bg-white text-black hover:bg-[rgba(0,0,0,0.7)] hover:text-white ease-in duration-300 px-3 cursor-pointer py-1 rounded-full'>SignIn</h4></Link>
      <p className='text-sm opacity-70'>@Kdevelopers</p>
     </div>
    </div>
    </div>
    )}
    </>
  )
}

const NavLink = ({ to, text }) => {
  return (
    <Link
      to={to}
      className="text-white hover:text-gray-300 transition duration-1000"
    >
      {text}
    </Link>
  );
};

export default Navbar