import { useState } from 'react'
import Character from './components/Character'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import './index.css'
import Form from './components/Form'
import FetchTodo from './components/FetchTodo'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './utils/counterSlice'
const queryClient = new QueryClient()
import Show from './components/Show'
import { addTodo, clearTodos, removeTodo } from './utils/todoSlice'
import ShowCase from './components/ShowCase'
import TakeTask from './components/TakeTask'
function App() {
  return (
    <>
      <TakeTask></TakeTask>
      <ShowCase></ShowCase>
    </>
  )
}

export default App
