import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
import Layout from './Layout'
const Appbar = () => {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div
      className="flex items-center w-100vw  justify-center sticky top-0 mt-4"
      data-aos="zoom-in"
      data-aos-duration="1200"
    >
      <div className="navbar bg-slate-500 md:rounded-xl md:w-2/3">
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl"
          >
            Dp
          </Link>
        </div>
        <div className="flex-none gap-x-3">
          <Link
            to="/in"
            className="btn btn-primary "
          >
            Login
          </Link>
          <Link className="btn btn-secondary ">SignUp</Link>
        </div>
      </div>
    </div>
  )
}

export default Appbar
