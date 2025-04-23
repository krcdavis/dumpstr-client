import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'


import App from './App.jsx'

import BoardPage from "./board.jsx";


const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/board/:id", element: <BoardPage /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
