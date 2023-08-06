import React from 'react';
import error from "../../../public/error/Error.gif"
import error2 from "../../../public/error/Error2.gif"
import { Link } from 'react-router-dom';


const Error = () => {

    return (
        <div className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <img
            className=""
            src={error2}
            alt=""
            />
             <div className="text-center" >
          <p className=" text-2xl text-red-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-5 flex items-center justify-center">
            <Link
              to={"/"}
              className="button-primary"
            >
              Go back home
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Error;