import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Contexts/AuthProvider";
import GoogleSignIn from "../../Share/GoogleSignIn";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [data, setData] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogIn = (data) => {
    console.log(data);
    loginUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        toast.success("Successfully login");
        // form.reset();
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="hero-content text-center text-neutral-content py-16 bg-zinc-200">
      <div className="w-96 py-8 px-8 xl:col-span-2 dark:bg-secondary">
        <h1 className="text-5xl font-extrabold dark:text-gray-900 mb-8">
          Login
        </h1>

        <form onSubmit={handleSubmit(handleLogIn)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text dark:text-gray-900"> Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email Address is required" })}
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p role="alert" className="text-red-700">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text dark:text-gray-900"> Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password Address is required",
                minLength: {
                  value: 6,
                  message: "Password min 6 characters longer",
                },
              })}
              placeholder="Password"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p role="alert" className="text-red-700">
                {errors.password?.message}
              </p>
            )}
          </div>
          <label className="label">
            <span className="label-text dark:text-gray-900"> Select</span>
          </label>
          <select
            className="input input-bordered w-full max-w-xs mb-2"
            {...register("category", { required: true })}
          >
            <option value="B">Buyer</option>
            {/* <option value="A">Option A</option> */}
            <option value="S">Seller</option>
          </select>
          <label className="label">
            <span className="label-text dark:text-gray-900">
              Forget password
            </span>
          </label>
          <input
            type="submit"
            value="Login"
            className="w-full py-2 font-semibold rounded btn btn-accent bg-red-500 text-white mb-4"
          />
        </form>
        <p className="text-start">
          New in this website?
          <Link to="/signup" className="text-accent">
            Please register
          </Link>
        </p>
        <div className="divider">OR</div>
        <GoogleSignIn></GoogleSignIn>
      </div>
    </div>
  );
};

export default Login;
