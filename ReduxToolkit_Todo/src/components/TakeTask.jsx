import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, clearTodos } from '../utils/todoSlice'

const TakeTask = () => {
  const [val, setVal] = useState('')
  const dispatch = useDispatch()
  return (
    <div>
      <input
        value={val}
        onChange={(e) => setVal(e.target.value)}
        type="text"
        className="input input-bordered"
      />
      <button
        onClick={() => {
          dispatch(addTodo(val))
          setVal('')
        }}
        className="btn btn-primary"
      >
        add todo
      </button>
      <button
        className="btn btn-error"
        onClick={() => dispatch(clearTodos())}
      >
        Clear todos
      </button>
    </div>
  )
}

export default TakeTask
