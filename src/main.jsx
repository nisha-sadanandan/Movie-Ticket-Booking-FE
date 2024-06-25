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
import Home from './componets/home/Home.jsx';
import AdminHome from './componets/admin/AdminHome.jsx';
import OwnerHome from './componets/owner/OwnerHome.jsx';
import UserTheaterPage from './pages/user/UserTheaterPage.jsx';
import OwnerTheaterPage from "./pages/owner/OwnerTheaterPage.jsx"
import OwnerShowPage from './pages/owner/OwnerShowPage.jsx';
import RatingMovie from './componets/user/RatingMovie.jsx';
import MovieDescription from './componets/user/MovieDescription.jsx';
import ShowListing from "./componets/user/ShowListing.jsx"
import SeatSelection from './componets/user/SeatSelection.jsx';
import SeatLayout from './componets/user/SeatLayout.jsx';

const router = createBrowserRouter([
  {
    element:<HomeLayout/>,
    path:"/",
    children:[


  {
        path: "/",
        element: <Home/>
 },
      
   
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
      path: "/admin",
      element: <AdminHome/>
    },

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
      element:<MovieDescription/>,
    
    },

    {

      path: "/user/:movieid/rating",
      element:<RatingMovie/>,
    
    },

    {

      path: "/user/:movieid/showlisting/:title",
      element:<ShowListing/>,
    
    },

    {

      path: "/user/:movieid/showlisting/:title/seat/:theatername",
      element:<SeatSelection/>,
    
    },

    
    {

      path: "/user/:movieid/showlisting/:title/seat/:theatername/:showid",
      element:<SeatLayout/>,
    
    },


{

  path: "/user/movies",
  element:<UserMoviePage/>,

},

{

  path: "/user/Theaters",
  element:<UserTheaterPage/>,

},


]
},

  


{ 
  
  element:<OwnerLayout/>,
  path: "/owner",
  children:[


    {

      element:<OwnerHome/>,
      path: "/owner",
    
    },

    {

      element:<OwnerTheaterPage/>, 
      path: "/owner/addtheater",
    
    },

    {

      element:<OwnerShowPage/>, 
      path: "/owner/addshow",
    
    },


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
