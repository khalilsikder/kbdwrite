import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { RouterProvider } from 'react-router-dom'
import router from './router/index.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='w-full mx-10 my-10'>
    <Provider store={store}>
   <RouterProvider router={router}/>
   {/* <App /> */}
   </Provider>
    </div>
   
  </React.StrictMode>,
)