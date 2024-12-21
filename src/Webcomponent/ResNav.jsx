import React from 'react'
import { BiAlignRight } from 'react-icons/bi'
import { FaHotel } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';

function ResNav() {
  // const Toggle= clickHandel=()=>{
  //   // const {state,useState}=useState()
  //   const toogol=document.getElementById("toggleer");
  //   toogol.style.display="block"
  // }
  return (
    <div>
      <div className='bg-orange-500 text-white sticky top-0 z-10 sm:w-full motion-preset-slide-up-md motion-duration-75 motion-delay-75 '>
        <div className='header max-w-5xl mx-auto p-4 flex justify-between items-center'>

          <h1 className='text-xl flex gap-2 '> <FaHotel className='text-2xl font-serif' />HOTEL-RESORT</h1>
          <button onClick={() => {
            const togo = document.getElementById('toggoler');
            togo.style.display = "block"
          }} className='btn text-2xl sm:hidden focus:outline-none'>
            <BiAlignRight />
          </button>
          <nav className="  hidden text-xl space-x-12 sm:block ">
            <NavLink className="hover:underline" to="/hero" end>
              Home
            </NavLink>

            <NavLink
              to="/card"
              className='hover:text-slate-300  hover:underline'
              end
            >
              About
            </NavLink>
            <NavLink
              to="/Preview"
              className='hover:text-slate-300  hover:underline'
              end
            >
              Preview
            </NavLink>
          </nav>
          <button className='hidden sm:block bg-white px-5 py-2 text-black rounded btn '>Login </button>

        </div>
      </div>



      <div id='toggoler' className='fixed hidden bg-orange-500 text-white s top-0 z-10 sm:w-full '>
        <div className='header max-w-5xl mx-auto p-4 flex justify-between items-center'>

          <h1 className='text-xl flex gap-2 '> <FaHotel className='text-2xl font-serif' />HOTEL-RESORT</h1>
          <button 
          className='btn text-2xl sm:hidden focus:outline-none'>
            <BiAlignRight />
          </button>
           </div>
           </div>
           
    </div>
  )
}

export default ResNav;