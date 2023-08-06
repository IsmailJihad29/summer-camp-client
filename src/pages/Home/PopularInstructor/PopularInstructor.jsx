import React, { useEffect, useState } from "react";
import SectionTittle from "../../Shared/SectionTittle/SectionTittle";

const PopularInstructor = () => {
  const [populerInst, setPopularInst] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/instructor")
      .then((res) => res.json())
      .then((data) => {
        
        setPopularInst(data);
      });
  }, []);

  const topInstructor = populerInst.slice(0, 6);


  return (
    <div className="mt-20">
      <SectionTittle
        sectionHeading={"Top Instructor"}
        subHeading={"Here's Our"}
      ></SectionTittle>
      <div className="my-20 w-4/6 gap-5 gap-y-10 mx-auto grid lg:grid-cols-3">
        {topInstructor.map((data) => (
          <div key={data._id}>
            <div
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
              className="card w-96 bg-base-100 shadow-xl"
            >
              <figure>
                <img src={data.photoURL} className="h-96 w-full" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {data.name}
                  <div className="badge badge-secondary">{data.role}</div>
                </h2>
                <p>{data.email}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-outline border-0 border-l-4 border-sky-400 text-sky-400 hover:bg-sky-400 hover:border-cyan-400 hover:text-white font-cinzel">
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
