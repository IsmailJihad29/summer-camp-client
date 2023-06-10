import Lottie from "lottie-react";
import loginAnnimation from "../../../public/login.json";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {

  const { logIn} = useContext(AuthContext)
  

  const handleLogin = event => { 
    event.preventDefault();
    const form = event.target
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    logIn(email, password)
      .then(result => {
        const user = result.user 
        console.log(user)
    })
  }
    return (
        <div>
            <div className="hero min-h-screen loginBg">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
    <Lottie animationData={loginAnnimation} loop={true} />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body glass">
        <div className="form-control">
          <label className="label">
            <span className="font-garamond">Email</span>
          </label>
          <input type="email" placeholder="Type Your Email"  name="email" className="input input-bordered required" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="font-garamond">Password</span>
          </label>
          <input type="password" placeholder="Type Your Password" name="password" className="input input-bordered required" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type="submit" value="login" className="btn btn-outline border-0 border-l-4 border-sky-400 text-sky-400 hover:bg-sky-400 hover:border-cyan-400 hover:text-white font-cinzel" />
                </div>
               <p>Are You New??? <Link to={'/register'}><span>Register Here!!!</span></Link></p>
              </form>
              
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;