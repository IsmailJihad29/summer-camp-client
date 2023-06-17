import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivetRoutes from "./PrivetRoutes";
import AllClasses from "../pages/AllClasses/AllClasses";
import Dashboard from "../Layout/Main/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";


const router = createBrowserRouter([
    {
      path: "/",
        element: <Main />,
        children: [
            { 
              path: "/",
              element:<Home/>
            },
            { 
              path: "/classes",
              element:<AllClasses/>
            },
            { 
              path: "/login",
              element:<Login/>
            },
            { 
              path: "/register",
              element:<Register/>
          },
         
    ]    
  },
  {
    path: 'dashboard',
    element: <PrivetRoutes><Dashboard /></PrivetRoutes>,
    children: [
      {
        path: 'myCart',
        element: <MyCart></MyCart>
      },
      {
        path: 'allusers',
        element: <AllUsers/>
      },
    ]
  }
]);
  
export default router; 
  

