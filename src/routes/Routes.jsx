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
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import Error from "../pages/ErrorPage/Error";
import ManageClass from "../pages/Dashboard/ManageClass/ManageClass";
import InstructorClass from "../pages/Dashboard/InstructorClass/InstructorClass";
import MyEnrollClass from "../pages/Dashboard/MyEnrollClass/MyEnrollClass";
import MyClass from "../pages/MyClass/MyClass";


const router = createBrowserRouter([
    {
      path: "/",
    element: <Main />,
        errorElement: <Error/>,
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
              path: "/myClass",
              element:<PrivetRoutes><MyClass/> </PrivetRoutes>
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
    errorElement: <Error/>,
    children: [
      {
        path: 'myCart',
        element: <MyCart></MyCart>
      },
      {
        path: 'my-enroll-class',
        element: <MyEnrollClass/>
      },
      {
        path: 'allusers',
        element: <AllUsers/>
      },
      {
        path: 'manage-class',
        element: <ManageClass/>
      },
      {
        path: 'instructor-class',
        element: <InstructorClass/>
      },
      {
        path: 'addclass',
        element: <AddClass/>
      },
    ]
  }
]);
  
export default router; 
  

