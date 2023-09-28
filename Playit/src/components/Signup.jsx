import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Signup = () => {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-4 px-4 "
      data-aos="zoom-in-right"
      data-aos-duration="1200"
    >
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="text"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="w-full max-w-xs mt-2">
        <button className="btn btn-primary w-full">Log in</button>
      </div>
      <div>
        <a className="link">Already have an Account? Login</a>
      </div>
    </div>
  )
}

export default Signup
