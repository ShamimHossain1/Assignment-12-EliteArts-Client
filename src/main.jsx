import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './Components/404 Page/Error';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
