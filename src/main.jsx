import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import Foods from './Components/Foods';
import FoodDetails from './Components/Details/FoodDetails';
import Login from './Components/Login&Register/Login';
import Register from './Components/Login&Register/Register';
import AuthProvider from './Components/Provider/AuthProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>

      },
      {
        path: '/foods',
        element: <Foods></Foods>,
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')

      },
      {
        path: '/foodDetails/:id',
        element: <FoodDetails></FoodDetails>,
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
      },
      {
        path: '/login',
        element: <Login></Login>

      },
      {
        path: '/register',
        element: <Register></Register>

      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider> 
    
     </React.StrictMode>,
)
