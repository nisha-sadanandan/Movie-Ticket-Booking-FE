import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import SignupPage from "./pages/user/SignupPage.jsx";
import LoginPage from "./pages/user/LoginPage.jsx"
import AdminSignupPage from './pages/admin/AdminSignupPage.jsx';
import AdminLoginPage from './pages/admin/AdminLoginPage.jsx';
import OwnerSignupPage from './pages/owner/OwnerSignupPage.jsx';
import OwnerLoginPage from './pages/owner/OwnerLoginPage.jsx';
import { ChakraProvider } from '@chakra-ui/react'
import HomeLayout from './componets/Layout/HomeLayout.jsx';
import UserLayout from "./componets/Layout/UserLayout.jsx"
import AdminLayout from './componets/Layout/AdminLayout.jsx';
import OwnerLayout from "./componets/Layout/OwnerLayout.jsx"
import UserMoviePage from "./pages/user/UserMoviePage.jsx";
import AdminShowPage from './pages/admin/AdminShowPage.jsx';
import AdminOverviewPage from './pages/admin/AdminOverviewPage.jsx';
import Movie from './componets/user/Movie.jsx';
import MovieDetail from './componets/user/movieDetails.jsx';

const router = createBrowserRouter([
  {
    element:<HomeLayout/>,
    path:"/",
    children:[
   
  {
    path: "/user/signup",
    element: <SignupPage/>
  },
  
  {
    path: "/user/login",
    element: <LoginPage/>
  },

  {
    path: "/admin/signup",
    element: <AdminSignupPage/>
  },

  {
    path: "/admin/login",
    element: <AdminLoginPage/>
  },

  {
    path: "/owner/signup",
    element: <OwnerSignupPage/>
  },

  {
    path: "/owner/login",
    element: <OwnerLoginPage/>
  },
]
},

{
  element:<AdminLayout/>,
  path: "/admin",
  children:[

    {
      path: "/admin/addshow",
      element: <AdminShowPage/>
    },

    {
      path: "/admin/overview",
      element: <AdminOverviewPage/>
    },




   


  ]
},




{ element:<UserLayout/>,
  path: "/user",
  children:[

    {

      path: "/user",
      element:<Movie/>,
    
    },

    {

      path: "/user/:movieid",
      element:<MovieDetail/>,
    
    },

{

  path: "/user/movies",
  element:<UserMoviePage/>,

},

]
},

  


{ 
  
  element:<OwnerLayout/>,
  path: "/owner",
  children:[



  ]
}


































  
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ChakraProvider>
  <RouterProvider router={router} />
  </ChakraProvider>
  </React.StrictMode>,
)
