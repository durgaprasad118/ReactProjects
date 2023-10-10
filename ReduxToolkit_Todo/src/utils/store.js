import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'
const appStore = configureStore({
  // big reducer for whole store
  reducer: {
    // reducer of counter
    counter: counterSlice,
  },
})
export default appStore
