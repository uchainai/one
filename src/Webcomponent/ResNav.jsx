import React, { useState } from 'react'
import { BiAlignRight } from 'react-icons/bi'
import { FaHotel } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import logo from "../assets/four.jpg"
import Reshero from './Reshero'
import Lending from './Lending'
import Card from './Card'
import profile from "../assets/my.jpg"



function ResNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [isLogoutMenu, setIsLogoutOpen] = useState(false);

  const LogoutMenu = () => {
    setIsLogoutOpen(!isLogoutMenu);
  };
  const [isLogoutMenus, setIsLogoutOpens] = useState(false);

  const LogoutMenus = () => {
    setIsLogoutOpens(!isLogoutMenus);
  };


  return (
    <div className="">
      <div className='bg-orange-600  fixed  max-w-full w-full text-white  top-0 z-10 md:justify-around'>
        <div className=' w-full mx-auto px-6 py-3 flex  justify-between sm:justify-between  items-center'>
          <div className='flex flex-row   w-4xl justify-between gap-20 py-2 items-center '>
            <h1 className='text-xl flex  hover:animate-bounce duration-75 cursor-pointer '> LAMA-<span className='text-zinc-50 font-bold '>RESORTS</span> <FaHotel className='text-2xl font-serif hover:font-bold cursor-pointer' /></h1>
            <button className='btn text-2xl sm:hidden focus:outline-none '>
              <BiAlignRight className='' onClick={toggleMenu} />
            </button>
          </div>
          <nav className="hidden text-xl space-x-10  sm:block    ">
            <NavLink className="hover:underline active" to="/hero" end>
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
            <NavLink
              to="/Login"
              className='hover:text-slate-300  hover:underline'
              end
            >
             contect
            </NavLink>
           
          </nav>
          
          <div className='flex gap-4 indicator items-center dropdown dropdown-end tabIndex={0} justify-end '>
         <div>
         <NavLink
              to="/Register"
              end
          
            >
              <button className='hidden sm:block bg-white px-5 py-2 text-black rounded btn ' >Login </button>
            </NavLink>
         </div>
            <div className='border-spacing-1   bg-orange-600 hidden md:block hover:bg-orange-500 rounded-full h-16 w-16'>
            <span className="indicator-item badge animate-pulse bg-red-500 text-white shadow-md shadow-white">99+</span>
              <img className='h-16 w-16 indicator border-spacing-1   border-white  p-3 rounded-full  sm:block cursor-pointer hidden' onClick={LogoutMenu} src={profile} />
                          
            </div>

          </div>

        </div>
      </div>
      <div className={`flex flex-row   ${isLogoutMenu ? "block" : "hidden"} justify-end pt-[75px]`}>
        <ul
          tabIndex={0}
          className={`menu menu-sm   bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow `}>
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>



      {/* this is the toolbar for sm devices */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"
        } bg-slate-200  w-full hover:bg-slate-400 cursor-pointer`}>
        <nav className="flex flex-col mt-20  text-center justify-between w-full">
          <NavLink className="text-black p-4  text-xl hover:bg-slate-300" to="/hero" end>
            Home
          </NavLink>

          <NavLink
            to="/card"
            className='text-black p-4 text-xl hover:bg-slate-300'
            end
          >
            About
          </NavLink>
          <NavLink
            to="/Preview"
            className='text-black p-4 text-xl hover:bg-slate-300'
            end
          >
            Preview
          </NavLink>
          <NavLink
            to="/Login"
            className='text-black p-4 text-xl hover:bg-slate-300'
            end
          >
          Contact
          </NavLink>
        </nav>
        <div className='flex flex-col gap-4 items-center py-3'>
          <NavLink
            to="/Register"
            end

          >
            <button className=' bg-orange-500 px-8 text-xl py-2 text-black rounded btn  '>Login </button>
          </NavLink>
         <div className='flex felx-col py-3'>
        
         <img onClick={LogoutMenus} className='h-16 w-16 indicator rounded-full   ' src={profile} />
         <span className="indicator-item badge badge-secondary animate-bounce">99+</span>
         </div>
         
        </div>
      </div>

      <div className='flex flex-row justify-center items-center  py-5 bg-slate-300 text-black'>
        <ul
          className={`menu menu-sm   ${isLogoutMenus ? "block" : "hidden"} bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow `}
          tabIndex={0}
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  );
}


export default ResNav;