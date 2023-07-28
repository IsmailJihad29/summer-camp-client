import { Link } from "react-router-dom";
import logo from "../../../../public/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import useCart from "../../../hooks/useCart";
import useUserRole from "../../../hooks/useUserRole";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const [useRole] = useUserRole();

  const navOptions = (
    <>
      <li className="hoverEffect ">
        <Link to="/">HOME</Link>
      </li>
      <li className="hoverEffect ">
        <Link to="/classes">CLASSES</Link>
      </li>
      <li className="hoverEffect ">
        <Link to="/instructor">INSTRACTOR</Link>
      </li>

      {useRole === "student" ? (
        <li className="hoverEffect ">
          <Link to="/dashboard/myCart">
            Dashboard
            <div className="badge badge-secondary">{cart?.length}</div>
          </Link>
        </li>
      ) : useRole === "instructor" ? (
        <>
          <li className="hoverEffect ">
            <Link to="/dashboard/myClass">
              Dashboard
              <div className="badge badge-secondary">{cart?.length}</div>
            </Link>
          </li>
          <li className="hoverEffect ">
            <Link to={"/dashboard/addclass"}>
              Add Classes
            </Link>
          </li>
          <li className="hoverEffect ">
            <Link to={"/myClass"}>
              My Classes
            </Link>
          </li>
        </>
      ) : (
        useRole === "admin" && (
          <>
            <li className="hoverEffect ">
              <Link to="/dashboard/manage-class">
                Dashboard
                <div className="badge badge-secondary">{cart?.length}</div>
              </Link>
                </li>
                <li className="hoverEffect ">
            <Link to={"/dashboard/myClass"}>
              My Classes
            </Link>
          </li>
          </>
        )
      )}

      {user ? (
        <>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button className="hoverEffect" onClick={handleLogOut}>
                  LogOut
                </button>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <>
          <li className="hoverEffect ">
            <Link to="/login">LOGIN</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-black bg-opacity-30  text-white max-w-screen-3xl">
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
              {navOptions}
            </ul>
          </div>
          <Link to={"/"}>
            <div className="flex items-center">
              <img className="w-16 rounded-full" src={logo} alt="" />
              <h1 className="normal-case text-xl font-cinzel">
                Rhythm Studios
              </h1>
            </div>
          </Link>
        </div>
        <div className="navbar justify-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
