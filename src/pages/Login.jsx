import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaGithubAlt } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "./../hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const inputRef = useRef(null);
  const location = useLocation();
  const from = location?.state ? location.state : "/";
  const { googleLogin, githubLogin } = useAuth();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        toast.success("Successfully Logged In!");
        setTimeout(() => {
          navigate(from);
        }, 1000);
      })
      .catch((error) => {
        toast.error("Something Went Wrong!");
      });
  };

  const handleGithubLogin = () => {
    githubLogin()
    .then(res => {
      toast.success("Successfully Logged In!");
      setTimeout(()=>{
        navigate(from)
      },1000)
    })
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="w-[80%] mx-auto grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 row-auto items-center gap-10 font-poppins">
      <div className="w-full lg:flex items-center justify-center py-20 hidden">
        <img src="https://i.ibb.co/qdgQrt1/login-2.png" alt="" className="w-96"/>
      </div>
      <div className="w-full flex flex-col items-center justify-center py-10  rounded-lg my-10">
        {/* <div className="bg-[#E3B57766] rounded-full w-20 h-20 mx-auto flex items-center justify-center p-3 border border-[#E3B57780] mb-5">
          <img src="logo.png" alt="logo.png" className="p-1" />
        </div> */}
        <h1 className="lg:text-3xl text-2xl font-bold font-poppins uppercase mb-5">
          Login To JohuArt
        </h1>
        <form className="flex flex-col items-center justify-center w-full gap-5">
          <label className="input input-bordered flex items-center gap-2 lg:w-[80%] md:w-[70%] w-[80%] mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              className="grow w-full"
              name="email"
              placeholder="Enter your email"
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 lg:w-[80%] md:w-[70%] w-[80%] mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <div className="flex items-center justify-between w-full">
              <input
                type={show ? "text" : "password"}
                name="password"
                className="grow focus:outline-none focus:border-none"
                placeholder="Password"
                required
              />
              <button type="button" onClick={() => setShow(!show)}>
                {show ? <IoEyeOff /> : <IoEye />}
              </button>
            </div>
          </label>
          <button
            type="submit"
            className="lg:w-[80%] md:w-[70%] w-[80%] mx-auto bg-primary px-10 py-2 rounded-md text-white font-bold"
          >
            LOGIN
          </button>
          <p className="w-[80%] lg:w-[80%] md:w-[70%] mx-auto font-medium text-[#737D8C] mb-3 font-raleway text-xs">By continuing, you agree JohuArt's<span className="text-gray-800 hover:underline" onClick={()=>navigate('/')}> Terms of Service and Privacy Policy.</span></p>
        </form>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-[60%] mx-auto flex items-center gap-5 my-2">
            <hr className="border border-[#CBD1DC] w-full border-opacity-50" />
            <h1 className="text-[#737D8C] font-medium">Or</h1>
            <hr className="border border-[#CBD1DC] w-full border-opacity-50" />
          </div>
          <div className="w-[60%] mx-auto flex flex-col items-center gap-2 my-3">
            <div className="flex items-center gap-5">
              <button className="bg-gray-100 rounded-full px-3 py-3 flex items-center gap-3">
                <FcGoogle
                  onClick={handleGoogleLogin}
                  className="text-2xl"
                />
              </button>
              <button onClick={handleGithubLogin} className="bg-gray-100 rounded-full px-3 py-3 flex items-center gap-3">
                <FaGithubAlt className="text-2xl" />
              </button>
            </div>
          </div>
          <p className="font-medium text-[#737D8C] mb-10 font-raleway text-sm py-3">
          Not Registered?
          <span
            className="text-gray-800 hover:underline"
            onClick={() => navigate("/register")}
          >
            Register Here
          </span>
        </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
