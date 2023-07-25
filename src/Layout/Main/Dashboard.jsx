import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaHome,
  FaMusic,
  FaEdit,
  FaUsers,
} from "react-icons/fa";
import { BsMusicNoteList } from "react-icons/bs";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";

const Dashboard = () => {
  // TODO:  Making Admin
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const navigate = useNavigate();

  const adminMenu = (
    <>
      <li className="hoverEffect ">
        <Link to={"/dashboard/manage-class"}>
          <FaEdit />
          Manage Classes
        </Link>
      </li>
      <li className="hoverEffect ">
        <Link to={"/dashboard/addclass"}>
          <BsMusicNoteList />
          Add Classes
        </Link>
      </li>
      <li className="hoverEffect ">
        <Link to={"/dashboard/allusers"}>
          <FaUsers />
          All Users
        </Link>
      </li>
    </>
  );

  const instructorMenu = (
    <>
      <li className="hoverEffect">
        <Link to="dashboard/instructor-class">My Classes</Link>
      </li>
      <li className="hoverEffect ">
        <Link to={"/dashboard/addclass"}>
          <BsMusicNoteList />
          Add Classes
        </Link>
      </li>
    </>
  );

  const studentMenu = (
    <>
      <li className="hoverEffect ">
        <Link to={"/dashboard/payment"}>
          <FaWallet />
          Payment History
        </Link>
      </li>
      <li className="hoverEffect ">
        <Link to={"/dashboard/myCart"}>
          <FaShoppingCart />
          My Cart
        </Link>
      </li>
    </>
  );

  const mainMenu = () => {
    if (isAdmin) {
      return adminMenu;
    } else if (isInstructor) {
      return instructorMenu;
    } else {
      return studentMenu;
    }
  };

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
      <div className="drawer-side ">
        <ul className="menu p-4 w-full h-full bg-base-300 text-white ">
          {/* Sidebar content here */}
          <div className="my-4 px-4 mr-2 py-4 text-center border rounded-xl">
            {isAdmin && (
              <h1 className="text-3xl font-bold text-sky-300">
                {" "}
                Admin Dashboard
              </h1>
            )}
            {isInstructor && (
              <h1 className="text-3xl font-bold text-sky-300">
                {" "}
                Instructor Dashboard
              </h1>
            )}
            {isInstructor === isAdmin && (
              <h1 className="text-3xl font-bold text-sky-300">
                {" "}
                Student Dashboard
              </h1>
            )}
          </div>

          {mainMenu()}

          <div className="divider"></div>
          <li className="hoverEffect ">
            <Link to={"/"}>
              <FaHome />
              Home
            </Link>
          </li>
          <li className="hoverEffect ">
            <Link to="/classes">
              <FaMusic /> CLASSES
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
