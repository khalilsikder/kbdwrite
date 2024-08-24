import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [] as any,
  selectedItems: 0,
  totalPrice: 0,
  tax: 0,
  taxRate: 0.1,
  grandTotal: 0,
};
const cartSlice = createSlice({
  name: "cartItem",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isExist = state.cartItems.find(
        (cartItem:any) => cartItem._id === action.payload.id
      );
      if (!isExist) {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      state.selectedItems = selectSeletedItems(state);
      state.totalPrice = selectTotalPrice(state);
      state.tax = selectTax(state);
      state.grandTotal = selectGrandTotal(state);
    },
    updateCart: (state, action) => {
      const cartItems = state.cartItems.map((cartItem: any) => {
        if (cartItem._id !== action.payload.id) {
          if (action.payload.type === "increment") {
            cartItem.quantity += 1;
          } else if (action.payload.type === "decrement") {
            cartItem.quantity -= 1;
          }
        }
        return cartItem;
      });
      state.cartItems = cartItems.filter((cartItem:any) => cartItem.quantity > 0);
      state.selectedItems = selectSeletedItems(state);
      state.totalPrice = selectTotalPrice(state);
      state.tax = selectTax(state);
      state.grandTotal = selectGrandTotal(state);
    },
    removeFromCart:(state, action) => {
       state.cartItems.filter(
        (cartItem: any) => cartItem._id !== action.payload.id
      );
      state.selectedItems = selectSeletedItems(state);
      state.totalPrice = selectTotalPrice(state);
      state.tax = selectTax(state);
      state.grandTotal = selectGrandTotal(state);
    },

    // deleteCart(state, action) {
    //   const deleteCartItem = state.cartItems.delete(
    //     (cartItem: any) => cartItem.id !== action.payload.id
    //   );
    //   state.cartItems = deleteCartItem;
    //   localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    // },
    clearCart: (state) => {
      state.cartItems = [];
      state.selectedItems = 0;
      state.totalPrice = 0;
      state.tax = 0;
      state.grandTotal = 0;
    },
  },
});

const selectSeletedItems = (state:any) =>
  state.cartItems.reduce((total:number,cartItem:any) => {
    return Number(total + cartItem.quantity);
  },0);

const selectTotalPrice = (state:any) =>
  state.cartItems.reduce((total:number,cartItem:any) => {
    return Number(total + cartItem.quantity * cartItem.price);
  },0);

const selectTax = (state:any) => 
  selectTotalPrice(state) * state.taxRate;

const selectGrandTotal = (state:any) => {
  return selectTotalPrice(state) + selectTotalPrice(state) * state.taxRate;
}

export const { addToCart, updateCart,removeFromCart,clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
