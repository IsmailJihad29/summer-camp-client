import Lottie from "lottie-react";
import registerAnnimation from '../../../public/register.json'
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div>
        <div className="hero min-h-screen loginBg">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <Lottie animationData={registerAnnimation} loop={true} />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form  className="card-body glass">
                <div className="form-control">
                  <label className="label">
                    <span className="font-garamond">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type Your Name"
                    name="name"
                    className="input input-bordered required"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="font-garamond">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Type Your Email"
                    name="email"
                    className="input input-bordered required"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="font-garamond">Photo Url</span>
                  </label>
                  <input
                    type="url"
                    placeholder="Insert Your Photo URL"
                    name="photo"
                    className="input input-bordered required"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="font-garamond">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Type Your Password"
                    name="password"
                    className="input input-bordered required"
                  />
                </div>
                              <div className="form-control">
                              <label className="label">
                    <span className="font-garamond">Confirm Your Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm Your Password"
                    name="password"
                    className="input input-bordered required"
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Register"
                    className="btn btn-outline border-0 border-l-4 border-sky-400 text-sky-400 hover:bg-sky-400 hover:border-cyan-400 hover:text-white font-cinzel"
                  />
                              </div>
                              <p>Already Registred ??? <Link to={'/login'}><span>Login Here!!!</span></Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
