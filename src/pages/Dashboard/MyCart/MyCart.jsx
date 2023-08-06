import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import Button from "../../Shared/Button/Button";
import SectionTittle from "../../Shared/SectionTittle/SectionTittle";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const MyCart = () => {
  const [cart, refetch] = useCart();

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://summer-camp-server-ismailjihad29.vercel.app/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire(
                "Deleted!",
                `${item.class_name} has been deleted successfully`,
                "success"
              );
            }
          });
      }
    });
  };

  return (
    <div className="w-full px-10">
      <div className="flex justify-evenly items-center">
        <SectionTittle sectionHeading={"Your Selected CLass"}></SectionTittle>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th> Class Name</th>
              <th>Instructor</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((classes, index) => (
              <tr key={classes._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={classes.class_image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{classes.class_name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="badge badge-ghost badge-sm">
                    {classes.instructor}
                  </span>
                </td>
                <td>${classes.price}</td>
                <th>
                  <div className="flex">
                   <Link to={`/dashboard/payment/${classes._id}`}> <Button  btnHeading={"Pay Now"}></Button></Link>
                    <button
                      onClick={() => handleDelete(classes)}
                      className="btn rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-red-500 text-white hover:text-red-500"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
