import React, { useState } from "react";
import useClass from "../../../hooks/useClass";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageClass = () => {
    const [classes, refetch] = useClass();
    const [axiosSecure] = useAxiosSecure();

  const handleAccept = (id) => {
    fetch(`http://localhost:5000/class/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "accepted" }),
    })
      .then((response) => response.json())
      .then((data) => {
        
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `Successfully Accepted the Class`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      })
      .catch((error) => console.error(error.massage));
  };

  const handleDenied = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You Want To Denie",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Denied!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/class/${id}`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ status: "denied" }),
        })
          .then((res) => res.json())
          .then((data) => {
            
            if (data.modifiedCount > 0) {
              Swal.fire("Denied!", "Your file has been Denied.", "success");
              refetch();
            }
          })
          .catch((error) => console.error(error.massage));
      }
    });
  };

  const handleFeedback = (e) => {
    e.preventDefault();
    const form = e.target;
    const feedback = form.feedback.value
    const id = form.class_id.value
     
      axiosSecure.put(`/feedback/${id}`, { feedback }).then((data) => {
        
      if (data.data.modifiedCount > 0) {
        Swal.fire({
          title: "feedback  Successfully!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
          form.reset()
          refetch()
      }
    });
    };

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
                  refetch()
                }
              });
          }
        });
      }

  return (
    <div className="overflow-x-auto w-full mx-auto my-10 ">
      <h1 className="mb-12 font-primary uppercase text-4xl font-extrabold  tr text-sky-500 lg:text-5xl  text-center border-0 border-b-4 border-sky-500 rounded-lg w-1/2 mx-auto  ">
        Recent Classes
      </h1>
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
          {classes.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="w-20 rounded">
                      <img src={item.class_image} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{item.class_name}</div>
                  </div>
                </div>
              </td>

              <td>
                {item.instructor}
                <br />
                <span className="badge badge-ghost badge-sm">{item.email}</span>
              </td>
              <td>{item.price}</td>
              <td>
                {item.available_seat}
                <br /> Enrolled Student {item.enrolled_student}
              </td>
              <td
                className={`${
                  item.status === "accepted" ? "text-green-600" : "text-red-500"
                } `}
              >
                {item.status}
              </td>
              <td>
                <div className="form-control">
                  <form onSubmit={handleFeedback}>
                    <div className="input-group">
                      <input
                        type="text"
                        placeholder="Feedback"
                        name="feedback"
                        className="input input-bordered"
                      />
                      <input
                        type="text"
                        name="class_id"
                        className="hidden"
                        value={item._id}
                      />
                      <input
                        type="submit"
                        value="Send"
                        className="btn btn-square"
                      />
                     
                    </div>
                  </form>
                </div>
                <br />
                <span className="badge bg-green-500 badge-ghost badge-md">{item.feedback}</span>
              </td>
              <th>
                <button
                  onClick={() => handleAccept(item._id)}
                  className="btn button-primary"
                  disabled={item.status === "accepted"}
                >
                  Accept
                </button>

                <br />
                <button
                  onClick={() => handleDenied(item._id)}
                  className="btn bg-rose-600 text-white hover:bg-red-800 hover:animate-pulse "
                  disabled={item.status === "denied"}
                >
                  Denied
                </button> <br />
                <button
                  onClick={() => handleDelete(item._id)}
                  className="btn bg-red-600 text-white hover:bg-red-800 hover:animate-pulse "
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageClass;
