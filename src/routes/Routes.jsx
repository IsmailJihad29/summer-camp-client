import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivetRoutes from "./PrivetRoutes";
import Dashboard from "../pages/Shared/Dashboard/Dashboard";


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
              path: "/login",
              element:<Login/>
            },
            { 
              path: "/register",
              element:<Register/>
          },
          {
            path: "/dashboard",
            element: <PrivetRoutes><Dashboard/>  </PrivetRoutes>
            }
      ]
    },
]);
  
export default router; 
  

