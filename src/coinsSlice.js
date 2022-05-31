import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  // cartItems: [],
  // cartTotalQuantity: 0,
  // cartTotalAmount: 0,
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' }
]

const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {

    coinAdded(state, action) {
      state.push(action.payload)
    }
    // addToCart: (state, action) => {
    //   state.cartItems.push(action.payload);
    // },
  },
})

// Action creators are generated for each case reducer function
// export const { addToCart } = coinsSlice.actions

export const { coinAdded } = coinsSlice.actions

export default coinsSlice.reducer