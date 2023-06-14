import { Link, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaHome,FaMusic } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
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
