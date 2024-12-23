import React from 'react'

function Reshero() {
  return (
    <div><div className="hero flex justify-around items-center min-h-screen  text-black">
    <div className="hero-content flex flex-col gap-8 justify-between lg:flex-row-reverse">
     <div className='overflow-hidden'>
     <img
         src='./public/four.jpg'
        className="max-w-sm max-h-sm h-80 w-80 min-w-52 min-h-52 overflow-hidden rounded-full shadow-2xl motion motion-preset-slide-left flex-1  motion-delay-[1000ms] animate-bounce" />
     </div>
      <div className='flex flex-col gap-12'>
        <h1 className="text-4xl sm:text-3xl font-bold motion-preset-typewriter-[16]">Visit your dreems</h1>
        <p className="text-wrap justify-start  ">
          Provident cupiditate voluptatem et in. Quaerat  fugiat ut assumenda excepturi <br /> exercitationem
          quasi.In deleniti eaque aut repudiandae et a id nisi.
        </p>
        <button className="btn bg-orange-500 font-bold text-white justify-center w-36">visite now</button>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Reshero