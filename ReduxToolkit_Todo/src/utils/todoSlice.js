import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todoSlice',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload)
    },
    removeTodo: (state, action) => {
      state.todos.pop()
    },
    clearTodos: (state, action) => {
      state.todos.length = 0
    },
  },
})
export const { addTodo, removeTodo, clearTodos } = todoSlice.actions
export default todoSlice.reducer
