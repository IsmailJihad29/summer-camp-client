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
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import AdminRoutes from "./AdminRoutes";
import InstructorRoutes from "./InstructorRoutes";


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
              loader: ()=> fetch('https://summer-camp-server-ismailjihad29.vercel.app/instructor')
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
        element: <PrivetRoutes><MyCart/> </PrivetRoutes>
      },
      { 
        path: "myClass",
        element:<InstructorRoutes><MyClass/> </InstructorRoutes>
      },
      {
        path: 'my-enroll-class',
        element: <MyEnrollClass/>
      },
      {
        path: 'allusers',
        element: <AdminRoutes><AllUsers/></AdminRoutes>
      },
      {
        path: 'manage-class',
        element:<AdminRoutes><ManageClass/></AdminRoutes>
      },
      { 
        path: "update-class/:id",
        element: <InstructorRoutes><UpdateClass /></InstructorRoutes>,
        loader:({params})=> fetch(`https://summer-camp-server-ismailjihad29.vercel.app/class/${params.id}`)
      },
      {
        path: 'addclass',
        element: <InstructorRoutes><AddClass/></InstructorRoutes>
      },
      {
        path: 'payment/:id',
        element: <Payment />,
        loader:({params})=> fetch(`https://summer-camp-server-ismailjihad29.vercel.app/carts/${params.id}`)
      },
      {
        path: 'payment-history',
        element: <PaymentHistory />
      },
    ]
  }
]);
  
export default router; 
  

