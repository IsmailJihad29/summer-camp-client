import { Link } from "react-router-dom";
import logo from "../../../../public/logo.png";

const Navbar = () => {
  const navOptions = (
    <>
      <li className="hoverEffect ">
        <Link to="/">HOME</Link>
      </li>
      <li className="hoverEffect ">
        <Link to="/classes">CLASSES</Link>
      </li>
      <li className="hoverEffect ">
        <Link to="/instractor">INSTRACTOR</Link>
      </li>
      <li className="hoverEffect ">
        <Link to="/dashboard">DASHBOARD</Link>
      </li>
      <li className="hoverEffect ">
        <Link to="/login">LOGIN</Link>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-2xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 text-yellow-700 rounded-box w-52"
            >
              
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
              </label>
              {navOptions}
            </ul>
            
          </div>
          <Link to={"/"}>
            <div className="flex items-center">
              <img className="w-16 rounded-full" src={logo} alt="" />
              <h1 className="normal-case text-xl font-cinzel">Yogasala</h1>
            </div>
          </Link>
        </div>
        <div className="navbar justify-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>
        </div>
       
      </div>
    </>
  );
};

export default Navbar;
