import { Link, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaHome, FaMusic,FaEdit ,FaUsers } from "react-icons/fa";
import { BsMusicNoteList } from "react-icons/bs";

const Dashboard = () => {

// TODO:  Making Admin 
  const isAdmin = true


  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content w-full flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          See Tabs
        </label>
      </div>
      <div className="drawer-side">
        <ul className="menu p-4 w-full h-full bg-base-300 text-white ">
          {/* Sidebar content here */}

          {
            isAdmin ? <>
              <li className="hoverEffect ">
            <Link to={'/dashboard/home'}>
              <FaHome />
              Admin Home
            </Link>
          </li>
          <li className="hoverEffect ">
            <Link to={'/dashboard/payment'}>
             <BsMusicNoteList/>
              Add Classes
            </Link>
          </li>
          <li className="hoverEffect ">
            <Link to={'/dashboard/myCart'}>
              <FaEdit/>
              Manage Classes 
            </Link>
          </li>
          <li className="hoverEffect ">
            <Link to={'/dashboard/allusers'}>
              <FaUsers/>
              All Users
            </Link>
          </li>

            </> : <>
            <li className="hoverEffect ">
            <Link to={'/dashboard/home'}>
              <FaHome />
              User Home
            </Link>
          </li>
          <li className="hoverEffect ">
            <Link to={'/dashboard/payment'}>
              <FaWallet />
              Payment History
            </Link>
          </li>
          <li className="hoverEffect ">
            <Link to={'/dashboard/myCart'}>
              <FaShoppingCart />
              My Cart
            </Link>
          </li>
            </>
          }

          
          <div className="divider"></div>
          <li className="hoverEffect ">
          <Link to={'/'}> 
              <FaHome/>
              Home
            </Link>
          </li>
          <li className="hoverEffect ">
        <Link to="/classes"><FaMusic/> CLASSES</Link>
      </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
