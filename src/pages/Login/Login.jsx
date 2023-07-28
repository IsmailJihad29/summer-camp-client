import Lottie from "lottie-react";
import loginAnnimation from "../../../public/login.json";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {

  const { logIn } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/'

  const [show, setShow] = useState(false);
  

  const handleLogin = event => { 
    event.preventDefault();
    const form = event.target
    const email = form.email.value;
    const password = form.password.value;
    logIn(email, password)
      .then(result => {
        const user = result.user 
        console.log(user)
        Swal.fire({
          position: 'top-middle',
          icon: 'success',
          title: 'Successfully Login',
          showConfirmButton: false,
          timer: 1500
        })
        navigate(from, {replace: true})
    })
  }
    return (
        <div>
            <div className="hero min-h-screen loginBg">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center w-6/12 lg:text-left">
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
          <input  type={show ? "text" : "password"} placeholder="Type Your Password" name="password" className="input input-bordered required" />
          <label className="label">
                  <input
                    onClick={() => setShow(!show)}
                    type="checkbox"
                    className="checkbox checkbox-md"
                  />
                  <p>Show Password</p>
                </label>
        </div>
        <div className="form-control mt-6">
          <input type="submit" value="login" className="btn btn-outline border-0 border-l-4 border-sky-400 text-sky-400 hover:bg-sky-400 hover:border-cyan-400 hover:text-white font-cinzel" />
                </div>
                <p>Are You New??? <Link to={'/register'}><span className="text-sky-400">Register Here!!!</span></Link></p>
                <SocialLogin/>
              </form>
              
              
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;