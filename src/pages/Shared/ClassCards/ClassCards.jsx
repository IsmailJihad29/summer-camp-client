/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";

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

  const { user } = useAuth();
  console.log(user);
  const [refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddCart = (classes) => {
    console.log(classes);
    if (user && user.email) {
      const enrolledClass = {
        class_id: _id,
        class_image,
        class_name,
        instructor,
        price,
        available_seat,
        email: user.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(enrolledClass),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId ) {
            refetch()
            Swal.fire({
              position: "top-middle",
              icon: "success",
              title: "Successfully Added To Your Cart",
              showConfirmButton: false,
              timer: 1500,
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
    <div  data-aos="zoom-in-right" className={`card w-96 bg-base-100 shadow-xl ${available_seat == 0 ? "bg-red-300":"bg-gray-100"}`} >
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
        <p> <span className="font-semibold">Total Enrolled Student </span>{enrolled_student }</p>
        <div className="card-actions justify-end">
          <button
            disabled={available_seat == 0 || user?.displayName === instructor}
            onClick={()=>handleAddCart(_id)}
            className="btn button-primary">Enroll Now</button>
        </div>
      </div>
    </div>
  );
};




export default ClassCards;
