import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload
      const Item = state.cart.findIndex((x) => x.id === newItem.id)

      if (Item >= 0) {
        state.cart[Item].qty += 1
      } else {
        state.cart.push(newItem)
      }
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id != action.payload)
    },
    increaseQty: (state, action) => {
      const id = state.cart.findIndex((x) => x.id === action.payload)
      state.cart[id].qty += 1
    },
    decremntQty: (state, action) => {
      const id = state.cart.findIndex((x) => x.id === action.payload)
      if (state.cart[id].qty >= 1) {
        state.cart[id].qty -= 1
      }
      //if qty < 0 remove the item from the cart itself
      if (state.cart[id].qty == 0) {
        state.cart = state.cart.filter((x) => x.id != action.payload)
      }
    },
    clearCart: (state, action) => {
      state.cart.length = 0
    },
  },
})

export const { addItem, removeItem, clearCart, decremntQty, increaseQty } =
  cartSlice.actions
export default cartSlice.reducer
