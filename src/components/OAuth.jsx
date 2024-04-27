import React from "react";
import { FcGoogle } from "react-icons/fc";

const OAuth = () => {
  return (
    <button className="flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 rounded uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md transition duration-150 ease-in-out">
      <FcGoogle className="text-xl bg-white rounded-full mr-2"/>
      continue with Google
    </button>
  ); 
};

export default OAuth;
