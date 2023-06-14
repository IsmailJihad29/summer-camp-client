/* eslint-disable react/prop-types */
import { useContext } from "react";
import Button from "../Button/Button";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

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

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddCart = (classes) => {
    console.log(classes);
    if (user && user.email) {
      const enrolledClass = {
        class_id: _id,
        class_image,
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
          if (data.insertedId) {
            Swal.fire({
              position: "top-middle",
              icon: "success",
              title: "Successfully Added To Your Cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
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
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
           <p className="bg-slate-900 text-white absolute right-0 rounded px-4 mr-4 mt-4">
          {price}
        </p>
      <div className="h-96 w-full">
        <img
          className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
          src={class_image}
          alt=""
        />
       
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-10 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-cinzel text-3xl font-bold text-white">
          {class_name}
        </h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          By {instructor}
        </p>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {available_seat} Seates Are Available{" "}
        </p>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {" "}
          {enrolled_student} Student Already Enrolled
        </p>
        {/* <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
          Enroll Now
        </button> */}
        <Button
          btnHeading={"enroll Now"}
          handleButton={() => {
            handleAddCart(item);
          }}
        ></Button>
      </div>
    </div>
  );
};

export default ClassCards;
