import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import router from './router/index.tsx'
import { store } from './redux/store.ts'
// import { configureStore } from '@reduxjs/toolkit'
// import productsReducer, { productsFetch } from './features/productsSlice.ts'

// const store = configureStore({
//   reducer : {
//     products : productsReducer,
//   },
// })
// store.dispatch(productsFetch)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='w-full mx-10 my-10'>
    <Provider store={store}>
   <RouterProvider router={router}/>
   </Provider>
    </div>
  </React.StrictMode>,
)