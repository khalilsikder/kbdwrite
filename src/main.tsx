import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/index.tsx'
import { store } from './redux/store.ts'
import { Provider } from 'react-redux'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='w-full mx-10 my-10'>
    <Provider store={store}>
     
   <RouterProvider router={router}/>
   </Provider>
    </div>
  </React.StrictMode>,
)