import { createSlice} from "@reduxjs/toolkit";
import {Toast} from '@radix-ui/react-toast'

 const initialState = {
 cartItems: [],
 cartTotalQuantity: 0,
 cartTotalAmount: 0,
};

export const cartSlice = createSlice({
name: 'cart',
initialState,
reducers:{
   addtoCart: (state,action)=>{
   const itemIndex = state.cartItems.findIndex(
    (item) => item.id === action.payload.id);
    if(itemIndex >= 0) {
      state.cartItems[itemIndex].cartQuantity += 1;
      Toast.info(`increase ${state.cartItems[itemIndex].name} quantity`,{
        position:'bottom-left'
      })
    }else{
      const tmpProduct = {...action.payload,cartQuantity:1}
      state.cartItems.push(tmpProduct);
      Toast.success(`${action.payload.name} to cart`,{
        position:'bottom-left'
      })
    } 
   },
},
})

export const {addtoCart} = cartSlice.actions;
export default cartSlice.reducer;
