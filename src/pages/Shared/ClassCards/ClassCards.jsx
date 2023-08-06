/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUserRole from "../../../hooks/useUserRole";


const ClassCards = ({ item }) => {
  const {
    class_name,
    instructor,
    available_seat,
    price,
    class_image,
    enrolled_student,
    _id,
  } = item;

const [axiosSecure] = useAxiosSecure()
  const { user } = useAuth();
  const [, refetch] = useCart();
  const [userCheck] = useUserRole()
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddCart = (classes) => {
    console.log(classes);
    if (user && user.email) {
      axiosSecure.post("/carts", {
        class_id:_id,
        class_image,
        class_name,
        instructor,
        price,
        enrolled_student,
        available_seat,
        email: user.email,
       })
        .then((data) => {
          console.log(data);
         
        if (data.data.insertedId ) {
            refetch()
            Swal.fire({
              position: "top-middle",
              icon: "success",
              title: "Successfully Added To Your Cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
          else  if (data.data === "already added") {
            Swal.fire({
              position: "top-center",
              icon: "warning",
              title: "Class already added",
              showConfirmButton: false,
              timer: 1000,
            });
          }
        });
    }
    else {
      Swal.fire({
        title: "Please Login to Enrolled The Class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  

  return (
    <div  data-aos="zoom-in-right" className={`card lg:w-96 w-full bg-base-100 shadow-xl ${available_seat == 0 ? "bg-red-300":"bg-gray-100"}`} >
      <p className="bg-slate-900 text-white absolute right-0 rounded px-4 mr-4 mt-4">
         ${price}
        </p>
      <figure>
        <img
          src={class_image}
          className="rounded-t-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{class_name}</h2>
        <div className="badge badge-secondary"> {instructor }</div>
      
        <p> Available Seat <span className="font-semibold">{available_seat }</span></p>
        <p> <span className="font-semibold">Total Enrolled Student </span>{enrolled_student}</p>
        {
          userCheck === "student"  && <div className="card-actions justify-end">
          <button
            disabled={available_seat == 0 || user?.displayName === instructor }
            onClick={()=>handleAddCart(_id)}
            className="btn button-primary">Enroll Now</button>
        </div> 
        }
      </div>
    </div>
  );
};




export default ClassCards;
