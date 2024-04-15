import React from "react";
import goggleIcon from "../assets/google.webp";
import facebookIcon from "../assets/facebook.jpg";
import { Link } from "react-router-dom";

const SignupForm = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-2 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl pb-6 font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>
            <form className="space-y-4 md:space-y-6">
              <div>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  class="bg-slate-200 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="First Name"
                  required=""
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  class="bg-slate-200 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Last Name"
                  required=""
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-slate-200 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email"
                  required=""
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  class="bg-slate-200 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm mb-10">
                  <label
                    for="terms"
                    class="font-light text-gray-500 dark:text-gray-300"
                  >
                    By proceeding, I agree to all{" "}
                    <a
                      class="underline text-blue-600 dark:text-primary-500"
                      href="#"
                    >
                      T&C
                    </a>{" "}
                    and{" "}
                    <a
                      class="text-blue-600 underline dark:text-primary-500"
                      href="#"
                    >
                      Privacy Policy
                    </a>{" "}
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-[#7B91FF] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an account
              </button>

              <div className="flex flex-row gap-4 items-center">
                <hr className="w-[50%]" />
                <p>Or</p>
                <hr className="w-[50%]" />
              </div>

              <div className="flex justify-center items-center gap-4">
                <div className="border-2 cursor-pointer rounded-md flex justify-center items-center">
                  <img width={40} src={goggleIcon} />
                </div>
                <div className="border-2 cursor-pointer rounded-md flex justify-center items-center">
                  <img width={40} src={facebookIcon} />
                </div>
              </div>

              <p class="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                to='/login'
                  href="#"
                  class="text-blue-600 underline dark:text-primary-500"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
