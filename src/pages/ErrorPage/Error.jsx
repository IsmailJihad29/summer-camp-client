import React from 'react';
import error from "../../../public/error/Error.gif"
import { Link } from 'react-router-dom';


const Error = () => {

    return (
        <div className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
       
          <img
            className="h-screen mt-6"
            src={error}
            alt=""
            />
             <div className="text-center">
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
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