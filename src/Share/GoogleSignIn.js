import React from "react";
import { FaGoogle } from "react-icons/fa";

const GoogleSignIn = () => {
  const handleGoogle = () => {};
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
