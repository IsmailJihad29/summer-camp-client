import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import coverImg from "../../../public/cover/cover2.jpg";
import Cover from "../Cover/Cover";


const InstructorPage = () => {
  const instructors = useLoaderData();

  return (
    <div>
      <Cover
        img={coverImg}
        info={"We Are Providing The best Instructor For You."}
        tittle={"OUR BEST INSTRUCTOR"}
      ></Cover>
      <div className="my-20 w-4/6 gap-5 gap-y-10 mx-auto grid lg:grid-cols-3">
        {instructors.map((data) => (
          <div key={data._id}>
            <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
              className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={data.photoURL}
                  className="h-96 w-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                 {data.name}
                  <div className="badge badge-secondary">{data.role }</div>
                </h2>
                <p>{data.email }</p>
                <div className="card-actions justify-end">
                  <Link to={"/classes"}>
                  <button className="btn btn-outline border-0 border-l-4 border-sky-400 text-sky-400 hover:bg-sky-400 hover:border-cyan-400 hover:text-white font-cinzel">See Classes</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorPage;
