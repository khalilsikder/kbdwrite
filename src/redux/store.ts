import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './api/baseApi'
import cartSlice from './cartSlice';


export const store = configureStore({
  reducer: {
   cart: cartSlice,
    [baseApi.reducerPath]: baseApi.reducer,
   
  },

  middleware:(getDefaultMiddlewares)=>
 getDefaultMiddlewares().concat(baseApi.middleware),
});

// export type RootState = ReturnType<typeof store.getState>

// export type AppDispatch = typeof store.dispatch