import React from 'react'

function DesLogin() {
  return (
     <>
     <div className="hero bg-base-200 min-h-screen mt-12">
  <div className="hero-content flex flex-col  justify-around gap-6 lg:flex-row-reverse">
    <div className="text-center pl-5 lg:text-left">
      <h1 className="text-5xl pl-16 font-bold">Login now!</h1>
      <p className="py-6 pl-16">
        Provident cupiditate voluptatem et in. Quaerat fugiat <br /> ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <span className="label-text">confirm Password</span>
          </label>
          <input type="password" placeholder="Confirm password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-orange-500">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
     </>
  )
}

export default DesLogin