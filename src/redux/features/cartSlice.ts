import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [] as any,
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};
const cartSlice = createSlice({
  name: "cartItem",
  initialState,
  reducers:{
    addToCart(state, action){
      state.cartItems.push(action.payload);
    },
    removeFromCart(state,action){
      const removeCartItem = state.cartItems.filter(
          (cartItem:any) => cartItem.id !== action.payload.id
      )
      state.cartItems = removeCartItem;
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
  },
    updateCart(state,action){
        const updateCartItem = state.cartItems.update(
            (cartItem:any) => cartItem.id !== action.payload.id
        )
        state.cartItems = updateCartItem;
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    deleteCart(state,action){
      const deleteCartItem = state.cartItems.delete(
          (cartItem:any) => cartItem.id !== action.payload.id
      )
      state.cartItems =deleteCartItem;
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
  },
  },
});
export const { addToCart,removeFromCart,updateCart,deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
