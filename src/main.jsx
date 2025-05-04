import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'


import App from './App.jsx'

//import BoardPage from "./board.jsx";
//import ThreadPage from './thread';

import BoardOrThread from './boardorthread';


//absolute fucket
const router = createBrowserRouter([
  { path: "/", element: <App /> },

  { path: "/board/:id", element: <BoardOrThread />,
     children: [{ path:"/board/:id/:tid", element: <BoardOrThread /> }],
   },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
