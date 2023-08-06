import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
const SocialLogin = () => {

    const { googleLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || "/";
    
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const loggedInUser = result.user
                console.log(loggedInUser)

                fetch(`https://summer-camp-server-ismailjihad29.vercel.app/users`, {
            method: "POST",
            headers: {
              "content-Type": "application/json",
            },
            body: JSON.stringify({
              name: loggedInUser.displayName,
              email: loggedInUser.email,
            }),
          })
            .then(res => res.json())
          .then(() => {
            navigate(from, {replace: true})
            })
              
        })
    }

    return (
        <div>
            <div className="divider"></div> 
            <div className="w-full text-center my-4"> 
            <button onClick={handleGoogleLogin} className="btn btn-outline btn-circle"><FcGoogle /></button>
            </div>

        </div>
    );
};

export default SocialLogin;