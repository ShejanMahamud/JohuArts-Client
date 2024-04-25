import React, { useEffect, useRef, useState } from "react";
import { FaGoogle, FaTwitter } from "react-icons/fa";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


const Login = () => {
    
const navigate = useNavigate();
const [show, setShow] = useState(false);
const inputRef = useRef(null)

useEffect(()=>{
  inputRef.current.focus();
},[])

  return (
    <div className="w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 row-auto items-center gap-10 border-t border-b border-[#CDD6E1] font-poppins">
    <div className="w-full bg-primary min-h-screen bg-[url('login-2.png')] bg-no-repeat bg-contain bg-center pt-10 lg:flex md:flex items-center justify-center hidden">
      {/* <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="loginSwiper"
      >
        <SwiperSlide>
          <div className="w-[50%] mx-auto">
            <img
              src="https://i.ibb.co/6gh94sW/login-1.jpg"
              alt="login.jpg"
              className="w-full mb-3"
              style={{ borderRadius: "50px 50px 10px 50px" }}
            />
            <h1 className="text-center text-white font-bold lg:text-2xl md:text-xl mb-5">
              Find Your Perfect Cottage With JohuHousing
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[50%] mx-auto">
            <img
              src="https://i.ibb.co/6gh94sW/login-1.jpg"
              alt="login.jpg"
              className="w-full h-full mb-3"
              style={{ borderRadius: "50px 50px 10px 50px" }}
            />
            <h1 className="text-center text-white font-bold lg:text-2xl md:text-xl">
              Find Your Perfect Place With JohuHousing
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[50%] mx-auto">
            <img
              src="https://i.ibb.co/6gh94sW/login-1.jpg"
              alt="login.jpg"
              className="w-full mb-3 h-full"
              style={{ borderRadius: "50px 50px 10px 50px" }}
            />
            <h1 className="text-center text-white font-bold lg:text-2xl md:text-xl">
              Find Your Apartments With JohuHousing
            </h1>
          </div>
        </SwiperSlide>
      </Swiper> */}
    </div>
    <div className="w-full h-full flex flex-col items-center justify-center lg:pt-20 py-10 md:pt-20">
      <div className="bg-[#E3B57766] rounded-full w-20 h-20 mx-auto flex items-center justify-center p-3 border border-[#E3B57780] mb-5">
        <img src="logo.png" alt="logo.png" className="p-1"/>
      </div>
      <h1 className="text-4xl font-bold mb-3 font-poppins">Login to JohuCoffee</h1>
      <p className="font-medium text-[#737D8C] mb-3 font-raleway">Not Registered? <span className="text-gray-800 hover:underline" onClick={()=>navigate('/register')}> Register Here</span></p>
<form className="flex flex-col items-center justify-center w-full  gap-5" >

<label className="input input-bordered flex items-center gap-2 lg:w-[60%] md:w-[70%] w-[80%] mx-auto">
  
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
<input ref={inputRef} type="text" className="grow w-full" name="email" placeholder="Enter your email" required/>
</label>
<label className="input input-bordered flex items-center gap-2 lg:w-[60%] md:w-[70%] w-[80%] mx-auto">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
<div className='flex items-center justify-between w-full'>
<input  type={show ? 'text' : 'password'} name='password' className="grow focus:outline-none focus:border-none" placeholder='Password' required/>
<button type='button' onClick={()=>setShow(!show)}>
{show ? <IoEyeOff/> : <IoEye />}
</button>
</div>
</label>
<button type="submit" className="lg:w-[60%] md:w-[70%] w-[80%] mx-auto bg-primary px-10 py-2 rounded-md text-white font-bold">LOGIN</button>
</form>
<div className="w-full">
  <div className="w-[60%] mx-auto flex items-center gap-5">
  <hr className="border border-[#CBD1DC] w-full border-opacity-50"/>
  <h1 className="text-[#737D8C] font-medium">Or</h1>
  <hr className="border border-[#CBD1DC] w-full border-opacity-50"/>
  </div>
<div className="w-[60%] mx-auto flex flex-col items-center gap-2 my-3">
<div className="flex items-center gap-5">
<button  className="bg-primary rounded-md px-3 py-3 flex items-center gap-3">
      <FaGoogle  className="lg:text-xl text-3xl text-white"/>
      </button>
      <button  className="bg-primary rounded-md px-3 py-3 flex items-center gap-3">
      <FaTwitter className="lg:text-xl text-3xl text-white"/>
      </button>
</div>
      
</div>
</div>

    </div>

  </div>
  )
}

export default Login