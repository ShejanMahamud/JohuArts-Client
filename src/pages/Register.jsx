import axios from "axios";
import { updateProfile } from "firebase/auth";
import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { MdOutlineInsertPhoto } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../config/firebase.config";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const from = location?.state || "/";
  const inputRef = useRef(null);

  const { emailPassRegister } = useAuth();

  const handleEmailPassRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const artist_type = e.target.artist.value;
    const password = e.target.password.value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).*$/;

    if (password.length < 6) {
      toast.error("Password must be 6 characters long!");
      return;
    }

    if (!passwordRegex.test(password)) {
      toast.error("Password must be strong!");
      return;
    }

    emailPassRegister(email, password)
      .then((res) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        }).then((res) => {
          axios.post('https://johuarts-backend.vercel.app/users',{
            user_name: name,
            user_photo: photo,
            artist_type: artist_type
          })
          .then(res => {
            if(res.data.insertedId){
              toast.success("Successfully Registered!");
              e.target.reset();
              navigate("/");
            }
          })
        });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          toast.error("User already exist!");
          return;
        }
        toast.error("Something went wrong!");
      });
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="w-[80%] mx-auto grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 row-auto items-center gap-10 py-10 font-poppins">
      <Helmet>
      <title>Register | JohuArts</title>
        <link rel="canonical" href="https://johuarts.netlify.app/register" />
      </Helmet>
      <div className="w-full lg:flex items-center justify-center py-20 hidden">
        <img
          src="https://i.ibb.co/7YSz5Ps/login-3.png"
          alt=""
          className="w-80"
        />
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center py-20 lg:py-0 ">
        {/* <div className="bg-[#E3B57766] rounded-full w-20 h-20 mx-auto flex items-center justify-center p-3 border border-[#E3B57780] mb-5">
        <img src="logo.png" alt="logo.png" className="p-1"/>
      </div> */}
        <h1 className="lg:text-3xl text-2xl font-bold font-poppins uppercase mb-6">
          Register To Johuart
        </h1>
        <form
          onSubmit={handleEmailPassRegister}
          className="flex flex-col items-center justify-center w-full  gap-5"
        >
          <label class="input input-bordered flex items-center gap-2 lg:w-[80%] md:w-[70%] w-[90%] mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              name="name"
              class="grow"
              placeholder="Name"
              required
              ref={inputRef}
            />
          </label>

          <label class="input input-bordered flex items-center gap-2 lg:w-[80%] md:w-[70%] w-[90%] mx-auto">
            <MdOutlineInsertPhoto />
            <input
              type="text"
              class="grow"
              name="photo"
              placeholder="Photo URL"
              required
            />
          </label>

          <label className="input input-bordered flex items-center gap-2 lg:w-[80%] md:w-[70%] w-[90%] mx-auto">
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
              type="text"
              className="grow w-full"
              name="email"
              placeholder="Enter your email"
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 lg:w-[80%] md:w-[70%] w-[90%] mx-auto">
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
          <select name="artist" className="select select-bordered lg:w-[80%] md:w-[70%] w-[90%] mx-auto">
  <option disabled selected className="text-gray-400">Artist Type</option>
  <option>Landscape Artist</option>
  <option>Watercolour Artist</option>
  <option>Portrait Artist</option>
  <option>Oil Painting Artist</option>
  <option>Charcoal Sketching Artist</option>
  <option>Cartoon Drawing Artist</option>
</select>
          <div className="lg:w-[80%] md:w-[70%] w-[90%] mx-auto flex items-center justify-start gap-3">
            <input type="checkbox" name="terms" class="checkbox" />
            <span className="">
              Accept our terms and conditions
            </span>
          </div>
          <button
            type="submit"
            className="lg:w-[80%] md:w-[70%] w-[90%] mx-auto bg-primary px-10 py-2 rounded-md text-white font-bold font-raleway"
          >
            REGISTER
          </button>
          <p className="w-[90%] lg:w-[80%] md:w-[70%] mx-auto font-medium  mb-3 font-raleway text-xs">
            By continuing, you agree JohuArt's
            <span
              className=" hover:underline"
              onClick={() => navigate("/")}
            >
              Terms of Service and Privacy Policy.
            </span>
          </p>
        </form>

        <p className="font-medium text-[#737D8C] mb-10 font-raleway text-sm py-3">
          Already Registered?
          <span
            className="hover:underline"
            onClick={() => navigate("/login")}> Login Here</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
