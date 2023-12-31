import { useQuery } from "@tanstack/react-query";
import SectionTittle from "../../Shared/SectionTittle/SectionTittle";
import { FaTrashAlt, FaUserShield,  } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure? You Want To delete This User",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://summer-camp-server-red-three.vercel.app/users/admin/${user._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire(
                "Deleted!",
                `${user.name} has been deleted successfully`,
                "success"
              );
            }
          });
      }
    });
  };

  const handleMakeAdmin = (user) => {
    fetch(`https://summer-camp-server-red-three.vercel.app/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-middle",
            icon: "success",
            title: ` ${user.name} Is Now A New Admin`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleMakeInstructor= (user) => {
    fetch(`https://summer-camp-server-red-three.vercel.app/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch()
          Swal.fire({
            position: "top-middle",
            icon: "success",
            title: ` ${user.name} Is Now A New INSTRUCTOR`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

 

  return (
    <div className="w-full px-10">
      <SectionTittle sectionHeading={"All Users"} />
      <h1 className="text-3xl font-semibold">You Have {users.length} Users</h1>

      {/* Table Content */}
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {" "}
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                     
                      <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-sky-500 text-white hover:text-sky-500"
                    >
                      <FaUserShield />Make Admin
                        </button>
                      
                     
                  )}
                </td>
                <td>
                  {" "}
                  {user.role === "instructor" ? (
                    "instructor"
                  ) : (
                      
                      <button
                      onClick={() => handleMakeInstructor(user)}
                      className="btn rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-sky-500 text-white hover:text-sky-500"
                    >
                      <FaUserShield />Make Instructor
                        </button>
                      
                      
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-red-500 text-white hover:text-red-500"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
            {/* row  */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
