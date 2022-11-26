import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Contexts/AuthProvider";
import GoogleSignIn from "../../Share/GoogleSignIn";
import useToken from "../Hooks/useToken";

const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { createUser, nameUpdate } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  if (token) {
    navigate(from, { replace: true });
  }

  const handleSignUp = (data) => {
    setSignUpError("");
    // console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const userInfo = {
          displayName: data.name,
        };

        nameUpdate(userInfo)
          .then((result) => {
            userSaveToDb(data.name, data.email);
          })
          .catch((error) => console.log(error));
        // form.reset();
      })
      .catch((error) => {
        setSignUpError(error.message);
        // toast.error(error.message);
      });
  };
  const userSaveToDb = (name, email) => {
    const user = { name, email };
    fetch(`${process.env.REACT_APP_API_URL}/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
      });
  };

  return (
    <div className="hero-content text-center text-neutral-content py-16 bg-zinc-200">
      <div className="w-96 py-8 px-8 xl:col-span-2 dark:bg-secondary">
        <h1 className="text-5xl font-extrabold dark:text-gray-900 mb-8">
          Signup
        </h1>

        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text dark:text-gray-900"> Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Name Address is required" })}
              placeholder="Name"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <p role="alert" className="text-red-700">
                {errors.name?.message}
              </p>
            )}
          </div>
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
              Already have an account?<Link to="/login"> Please login</Link>
            </span>
          </label>
          <div>
            {signUpError && <p className="text-red-700">{signUpError}</p>}
          </div>
          <input
            type="submit"
            value="Signup"
            className="w-full py-2 font-semibold rounded btn btn-accent bg-red-500 text-white mb-4"
          />
        </form>
        <div className="divider">OR</div>
        <GoogleSignIn></GoogleSignIn>
      </div>
    </div>
  );
};

export default SignUp;
