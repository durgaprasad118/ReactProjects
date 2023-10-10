- Install redux toolkit and react-redux
- Build our store
- connect store to our app
- slice
  - from here export actions
  - export reducers

```js
export const { increment, decrement, reset } = counterSlice.actions
export default counterSlice.reducer
```

- dispatch(action)
- selector(subscribing to store)

- Reading the store
- USE USEseLETOR HOOK FOR SUBSCRIBING TO STORE

## Redux

- in main.jsx

```js
import { Provider } from 'react-redux'
import appStore from './utils/store.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <App />
    </Provider>
  </React.StrictMode>,
)
```

2. Creating a store

```js
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
```

3. Slices

```js
import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.count += 1
    },
    decrement: (state, action) => {
      state.count -= 1
    },
    reset: (state, action) => {
      state.count = 0
    },
  },
})

export const { increment, decrement, reset } = counterSlice.actions
export default counterSlice.reducer

/*
counter slice is like this
{
    actions:{
        increment,dec....
    },
    reducer:{
        
    }
}

*/
```

4. To use the value of the slice use `useSelector from 'react-redux`
   1. THis is subscribed to the store
5. To dispatch and action call the `useDispatch() from react-redux`

# Important points

- Make sure to subscribe to the store correctly
- USE REDUCERS CAREFULLY
-  WE have to mutate the state