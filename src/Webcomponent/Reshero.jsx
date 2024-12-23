import React from 'react'

function Reshero() {
  return (
    <div><div className="hero flex justify-around items-center min-h-screen w-full text-black">
    <div className="hero-content flex flex-col justify-between lg:flex-row-reverse">
     <div>
     <img
         src='./public/four.jpg'
        className="max-w-md max-h-md h-96 w-96 rounded-full shadow-2xl motion motion-preset-slide-left flex-1  motion-delay-[1000ms]  motion-ease-spring-bouncier" />
     </div>
      <div className='flex flex-col gap-12'>
        <h1 className="text-5xl font-bold motion-preset-typewriter-[16]">Visit your dreems</h1>
        <p className="text-wrap justify-start ">
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