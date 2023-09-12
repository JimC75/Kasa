import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'

import Root from './pages/root.jsx'
import Home from './pages/Home.jsx'
import ErrorPage from './pages/ErrorPage'
import About from './pages/About.jsx'
import Logement from './pages/Logement.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([{
  path: "/",
  element: <Root />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "logement/:logementId",
      element: <Logement />,
    }]
}]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
