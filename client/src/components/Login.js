import React from "react";
import NavBar from "./NavBar";
//import Footer from "./Footer";
const Login = () => {
  return (
    <div>
      <NavBar />
      <div className="h-screen flex  justify-center items-center bg-gray-900 ">
        <div className="w-full max-w-xs">
          <a
            href="/login"
            className="flex ml-24 items-center mb-6 text-2xl font-semibold text-black dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Log In
          </a>
          <form className="bg-white shadow-lg border rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
              />
              {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="/forgotpassword"
              >
                Forgot Password?
              </a>
            </div>

            <p className="mt-6 text-sm font-light text-gray-500 dark:text-gray-400">
              Don't have account?{" "}
              <a
                href="/signup"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Sign Up here
              </a>
            </p>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2023 Mayur Corp. All rights reserved.
          </p>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Login;
