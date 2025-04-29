import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root.jsx';
import Home from './Components/Routes/Home/Home.jsx';
import Pages from './Components/Routes/Pages/Pages.jsx';
import Category from './Components/Routes/Category/Category.jsx';
import Dashboard from './Components/Routes/Dashboard/Dashboard.jsx';
import News from './Components/Routes/News/News.jsx';
import Contact from './Components/Routes/Contact/Contact.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/pages',
        element:<Pages/>
      },
      {
        path:'/category',
        element:<Category/>
      },
      {
        path:'/dashboard',
        element:<Dashboard/>
      },
      {
        path:'/news',
        element:<News/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
