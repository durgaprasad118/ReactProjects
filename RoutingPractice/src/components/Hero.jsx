import React from 'react'
import 'aos/dist/aos.css'
import Aos from 'aos'
import { useEffect } from 'react'

const Hero = () => {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <div data-aos="zoom-in" className="h-[calc(100vh-64px)] w-100vw bg-blue-200 flex items-center justify-center">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
