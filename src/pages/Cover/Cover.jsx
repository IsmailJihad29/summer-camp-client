/* eslint-disable react/prop-types */
import { Parallax } from "react-parallax";
import Button from "../Shared/Button/Button";

const Cover = ({ img, tittle, info }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="hero h-[700px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className=" flex justify-end">
          <div className="max-w-xl  bg-opacity-40  py-32">
            <h1 className="mb-5 text-5xl font-bold font-cinzel text-sky-400 uppercase">{tittle}</h1>
                      <p className="mb-5 font-garamond text-white">{info}</p>
                      <Button btnHeading={"See More"}></Button>
          </div>
        </div>
      </div>
    </Parallax>
  

  
  );
};

export default Cover;
