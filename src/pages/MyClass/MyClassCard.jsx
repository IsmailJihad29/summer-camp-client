import React from "react";
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { FaTrash } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";

const MyClassCard = ({ item, index }) => {
  const {
    class_name,
    instructor,
    available_seat,
    price,
    class_image,
    enrolled_student,
    email,
    _id,
  } = item;

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="w-20 rounded">
              <img src={class_image} />
            </div>
          </div>
          <div>
            <div className="font-bold">{class_name}</div>
          </div>
        </div>
      </td>

      <td>
        {instructor}
        <br />
        <span className="badge badge-ghost badge-sm">{email}</span>
      </td>
      <td>${price}</td>
      <td>
        {available_seat}
        <br /> Enrolled Student {enrolled_student}
      </td>
      <td>{available_seat}</td>
      <th>
        <Link to={`/toysDetail/${_id}`}>
          <button className="btn button-primary">
            <TbListDetails />{" "}
          </button>
        </Link>{" "}
        <br />
        <Link to={`/update/${_id}`}>
          <button className="btn button-primary ">
            <RxUpdate />
          </button>
        </Link>{" "}
        <br />
        <button
          onClick={() => handleDelete(_id)}
          className="btn bg-red-600 text-white hover:bg-red-800 hover:animate-pulse "
        >
          <FaTrash />
        </button>
      </th>
    </tr>
  );
};

export default MyClassCard;