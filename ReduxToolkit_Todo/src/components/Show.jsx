import React from 'react'
import { useSelector } from 'react-redux'

const Show = () => {
  const counter = useSelector((store) => store.counter.count)
  return <h1 className="text-lg font-bold ">{counter}</h1>
}

export default Show
