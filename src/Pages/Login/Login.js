import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const [data, setData] = useState("");

  const handleLogIn = (data) => {
    console.log(data);
  };

  const handleGoogle = () => {};

  return (
    <div className="hero-content text-center text-neutral-content my-16">
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
              {...register("email")}
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text dark:text-gray-900"> Password</span>
            </label>
            <input
              type="password"
              {...register("password")}
              placeholder="Password"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <label className="label">
            <span className="label-text dark:text-gray-900"> Select</span>
          </label>
          <select
            className="input input-bordered w-full max-w-xs mb-2"
            {...register("category", { required: true })}
          >
            <option value="A">Buyer</option>
            {/* <option value="A">Option A</option> */}
            <option value="B">Seller</option>
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
        <button
          onClick={handleGoogle}
          type="submit"
          className="w-full py-2 font-semibold rounded btn btn-accent bg-red-500 text-white"
        >
          {/* <FaGoogle></FaGoogle> With Google */}
        </button>
      </div>
    </div>
  );
};

export default Login;
