import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const Contact = () => {
  useEffect(() => {

    Aos.init()
  }, [])
  return (
    <div data-aos="zoom-in-up" data-aos-duration="1000" className="h-[calc(100vh-64px)] w-100vw bg-blue-200 flex items-center justify-center">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold">Welcome to Contact Page</h1>
        </div>
      </div>
    </div>
  )
}

export default Contact
