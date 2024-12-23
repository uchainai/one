import React,{useState} from 'react'
import { BiAlignRight } from 'react-icons/bi'
import { FaHotel } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
 

function ResNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
   

  return (
    <div>
      <div className='bg-orange-500 text-white sticky top-0 z-10 sm:w-full motion-preset-slide-up-md motion-duration-75 motion-delay-75 '>
        <div className='header max-w-5xl mx-auto p-4 flex justify-between sm:justify-between items-center'>

          <h1 className='text-xl flex gap-2 hover:animate-bounce duration-75 cursor-pointer '> <FaHotel className='text-2xl font-serif hover:font-bold cursor-pointer' />HOTEL-RESORT</h1>
          <button    className='btn text-2xl sm:hidden focus:outline-none focus:'>
            <BiAlignRight  onClick={toggleMenu} />
          </button>
          <nav className=" hidden text-xl space-x-12 sm:block ">
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
          <div className='flex gap-8 items-center'>
            <button className='hidden sm:block bg-white px-5 py-2 text-black rounded btn '>Login </button>

            <img className='h-16 w-16 hidden rounded-full hover:border hover:border-gray-400 sm:block' src="./public/one.jpg" alt="" />

          </div>
        </div>

      </div>
      {/* this is the toolbar for sm devices */}
      <div   className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } bg-slate-200 pt-2  hover:bg-slate-400 cursor-pointer`}>
          <nav className="flex flex-col  text-center justify-between">
            <NavLink className="text-black p-2 hover:bg-slate-300" to="/hero" end>
              Home
            </NavLink>

            <NavLink
              to="/card"
              className='text-black p-2 hover:bg-slate-300'
              end
            >
              About
            </NavLink>
            <NavLink
              to="/Preview"
              className='text-black p-2 hover:bg-slate-300'
              end
            >
              Preview
            </NavLink>
          </nav>
          <div className='flex flex-col gap-8 items-center py-3'>
            <button className=' bg-orange-500 px-5 py-2 text-black rounded btn '>Login </button>

            <img className='h-16 w-16 rounded-full hover:border hover:border-gray-400' src="./public/one.jpg" alt="" />

          </div>
        </div>
    </div>
  );
}
 

export default ResNav;