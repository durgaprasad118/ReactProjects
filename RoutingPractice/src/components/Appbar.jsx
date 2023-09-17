import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Appbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl"
        >
          Home
        </Link>
      </div>
      <div className="flex w-1/6 justify-between">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `btn ${isActive ? 'text-orange-700' : 'text-black'}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `btn ${isActive ? 'text-orange-700' : 'text-black'}`
          }
        >
          Contact
        </NavLink>
      </div>
    </div>
  )
}

export default Appbar
