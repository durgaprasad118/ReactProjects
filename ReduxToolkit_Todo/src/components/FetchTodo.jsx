import React from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
const FetchTodo = () => {
  const fetchCharacters = async () => {
    const { data } = await axios.get('https://dummyjson.com/todos/user/5')
    return data.todos
  }
  const { isLoading, isError, data } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchCharacters,
  })
  if(isLoading){
    return <h1>Loading...</h1>
  }
    console.log(isLoading, data)
  return (
    <div>
      {data.map((x) => {
        return <li key={x.id}>{x.todo}</li>
      })}
    </div>
  )
}

export default FetchTodo
