import { useQuery } from "@tanstack/react-query";
import SectionTittle from "../../Shared/SectionTittle/SectionTittle";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });
    
    const handleDelete= user => {
     
  }
  const handleUser = user => { 
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: 'top-middle',
            icon: 'success',
            title: ` ${user.name} Is Now A New Admin`,
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
  }

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
                <td> {user.role === 'admin' ? 'admin': <button onClick={()=> handleUser(user._id)} className="btn rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-sky-500 text-white hover:text-sky-500">
                <FaUserShield/>
                </button> } </td>
                <td>
                  {" "}
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
