import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../utils/todoSlice'

const ShowCase = () => {
  const todos = useSelector((store) => store.todoList.todos)
  const dispatch = useDispatch()
  return (
    <div>
      {todos.map((x) => {
        return (
          <li key={x} className="text-lg ">
            
              {x}
              <button
                onClick={() => dispatch(removeTodo())}
                className="btn btn-error"
              >
                Delete
              </button>
            
          </li>
        )
      })}
    </div>
  )
}

export default ShowCase
