import React from 'react'
import ReactDOM from 'react-dom/client'
import { ErrorPage, Contact } from './routes/index.js';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    errorElement: <ErrorPage/>
  },
  {
    path: "test",
    element: <div>Hello Test world!</div>,
  },
  {
    path: "contacts/:contactId",
    element: <Contact/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
