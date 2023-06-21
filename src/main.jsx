import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

//Pages
import Home from './routes/Home.jsx'
import NewPost from './routes/NewPost.jsx'
import Profile from './routes/Profile.jsx'
import Login from './routes/Login.jsx'
  


import './index.css'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />
        

      },
      {
        path: "/home",
        element: <Home />
        

      },
      {
        path: "/new",
        element: <NewPost />
      },
      {
        path: "/profile",
        element: <Profile />
      },
    ],
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
