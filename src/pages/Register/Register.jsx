import Lottie from "lottie-react";
import registerAnnimation from "../../../public/register.json";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";


const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);

  };

  return (
    <div>
      <div>
        <div className="hero min-h-screen loginBg">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <Lottie animationData={registerAnnimation} loop={true} />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="card-body glass"
              >
                <div className="form-control">
                  <label className="label">
                    <span className="font-garamond">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type Your Name"
                    {...register("name", { required: true })}
                    name="name"
                    className="input input-bordered required"
                  />
                  {errors.name && (
                    <span className="text-red-500">Name is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="font-garamond">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Type Your Email"
                    {...register("email", { required: true })}
                    name="email"
                    className="input input-bordered required"
                  />
                  {errors.email && (
                    <span className="text-red-500">Email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="font-garamond">Photo Url</span>
                  </label>
                  <input
                    type="url"
                    placeholder="Insert Your Photo URL"
                    name="photo"
                    {...register("photo", { required: true })}
                    className="input input-bordered required"
                  />
                  {errors.photo && (
                    <span className="text-red-500">Photo is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="font-garamond">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Type Your Password"
                    name="password"
                    {...register(
                      "password",
                      { required: true , pattern:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                      }
                    )}
                    className="input input-bordered required"
                  />
                  {errors.password?.type === "pattern" && (
                    <span className="text-red-500">
                      Please Enter Minimum eight characters, at least one letter, one number and one special character.
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="font-garamond">Confirm Your Password</span>
                  </label>
                  <input
                    {...register("confirmPassword", { required: true, validate: (value) =>
                      value === watch("password") || "Passwords do not match" })}
                    type="password"
                    placeholder="Confirm Your Password"
                    name="confirmPassword"
                    className="input input-bordered required"
                  />
                    {errors.confirmPassword && (
          <span className="error text-red-500">{errors.confirmPassword.message}</span>
        )}
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Register"
                    className="btn btn-outline border-0 border-l-4 border-sky-400 text-sky-400 hover:bg-sky-400 hover:border-cyan-400 hover:text-white font-cinzel"
                  />
                </div>
                <p>
                  Already Registred ???{" "}
                  <Link to={"/login"}>
                    <span>Login Here!!!</span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
