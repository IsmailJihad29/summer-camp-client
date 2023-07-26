import { useState } from "react";
import cover2 from "../../../public/cover/cover2.jpg";
import useAuth from "../../hooks/useAuth";
import useClass from "../../hooks/useClass";
import Cover from "../Cover/Cover";
import MyClassCard from "./MyClassCard";
import Swal from "sweetalert2";

const MyClass = () => {
  const { user } = useAuth();

  const [classes] = useClass();

  const myClass = classes.filter((data) => user?.email === data.email);


  const handleDelete = (id) => {
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
        fetch(`http://localhost:5000/class/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Class has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <section>
        <Cover img={cover2} tittle={"My Class"}></Cover>

        <div className="overflow-x-auto w-11/12 mx-auto my-10 ">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Instructor</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Feedback</th>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              {myClass.map((item, index) => (
                <MyClassCard
                  key={item._id}
                  handleDelete={handleDelete}
                  index={index}
                  item={item}
                ></MyClassCard>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default MyClass;
