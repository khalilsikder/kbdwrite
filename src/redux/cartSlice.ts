import { createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState = {
  value: 0,
  cart: []
}

export const cartSlice = createSlice({
name: 'cart',
initialState,
reducers:{
   addtoCart: (state,action) => {
   state.cart.push(action.payload)
},
increment: (state) => {
  state.value += 1;
},
decrement: (state) => {
  state.value -= 1;
},
incrementByAmount: (state,action:PayloadAction<number>) => {
  state.value += action.payload;
},
},
})

export const {addtoCart,increment,decrement,incrementByAmount} = cartSlice.actions;
export default cartSlice.reducer;
