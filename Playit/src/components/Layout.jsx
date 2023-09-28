import { useState, useEffect } from 'react'
import Aos from 'aos'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import 'aos/dist/aos.css'
import Signup from './Signup'
import { Login } from './Login'
function Layout() {
  const [activeTab, setActiveTab] = useState('login')
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div
      data-aos="zoom-in-right"
      data-aos-duration="1200"
      className="min-h-[calc(100vh-4.1rem)] w-100vw flex items-center justify-center font-sans"
    >
      <div className="mockup-window md:w-1/2 border bg-base-300">
        <div className="flex flex-col items-center gap-y-4 justify-center px-4 py-16 bg-base-200">
          <div className="tabs">
            <Link
              className={`tab tab-bordered ${
                activeTab === 'login' && 'tab-active'
              }`}
              onClick={() => setActiveTab('login')}
            >
              Log in
            </Link>
            <Link
              className={`tab tab-bordered     ${
                activeTab === 'signUp' && 'tab-active'
              }`}
              onClick={() => setActiveTab('signUp')}
            >
              Sign Up
            </Link>
          </div>
          {activeTab === 'login' && <Login />}
          {activeTab === 'signUp' && <Signup />}
        </div>
      </div>
    </div>
  )
}

export default Layout
