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
import MyEnrollClass from "../pages/Dashboard/MyEnrollClass/MyEnrollClass";
import MyClass from "../pages/Dashboard/MyClass/MyClass";
import UpdateClass from "../pages/Dashboard/UpdateClass/UpdateClass";
import InstructorPage from "../pages/InstructorPage/InstructorPage";
import Payment from "../pages/Dashboard/Payment/Payment";


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
              path: "/instructor",
              element: <InstructorPage />,
              loader: ()=> fetch('http://localhost:5000/instructor')
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
        path: "myClass",
        element:<PrivetRoutes><MyClass/> </PrivetRoutes>
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
        path: "update-class/:id",
        element: <PrivetRoutes><UpdateClass /></PrivetRoutes>,
        loader:({params})=> fetch(`http://localhost:5000/class/${params.id}`)
      },
      {
        path: 'addclass',
        element: <AddClass/>
      },
      {
        path: 'payment/:id',
        element: <PrivetRoutes><Payment /></PrivetRoutes>,
        loader:({params})=> fetch(`http://localhost:5000/carts/${params.id}`)
      },
    ]
  }
]);
  
export default router; 
  

