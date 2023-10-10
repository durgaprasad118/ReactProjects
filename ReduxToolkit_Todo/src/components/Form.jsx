import React from 'react'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
// to create and update
import { useMutation, QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient()
const Form = () => {
  const [val, setVal] = useState('')
  const addTodo = async (text) => {
    const { data } = await axios.post(
      'https://dummyjson.com/todos/add',
      {
        todo: text,
        completed: false,
        userId: 5,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    setVal('')
  }
  const todoMutate = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(['todos'])
    }   
  })
  if (todoMutate.isLoading) {
    console.log('loading....')
  }
  if (todoMutate.isSuccess) {
    console.log('todo added')
  }
  return (
    <div>
      <input
        placeholder="EnterTodo"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        type="text"
        className="input input-bordered"
      />
      <button
        onClick={() => todoMutate.mutate({ val })}
        className="btn btn-primary"
      >
        Add todo
      </button>
    </div>
  )
}

export default Form
