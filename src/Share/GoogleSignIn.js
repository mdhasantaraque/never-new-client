import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../Contexts/AuthProvider";

const GoogleSignIn = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        const setUser = {
          email: user.email,
          role: "buyer",
        };
        fetch(`${process.env.REACT_APP_API_URL}/users`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(setUser),
        })
          .then((res) => res.json())
          .then((data) => {
            navigate(from, { replace: true });
            toast.success("Successfully sign up");
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div>
      <button
        onClick={handleGoogle}
        type="submit"
        className="w-full py-2 font-semibold rounded btn btn-accent bg-red-500 text-white"
      >
        <FaGoogle></FaGoogle> With Google
      </button>
    </div>
  );
};

export default GoogleSignIn;
