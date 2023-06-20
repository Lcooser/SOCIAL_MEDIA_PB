import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

//Pages
import Home from './routes/Home.jsx'
import NewPost from './routes/NewPost.jsx'
import UserRegister from './routes/UserRegister.jsx'
  


import './index.css'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
        

      },
      {
        path: "/new",
        element: <NewPost />
      },
      {
        path: "/register",
        element: <UserRegister />
      }
    ],
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
