import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaUserCircle } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink, useNavigate } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import Typewriter from 'typewriter-effect';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  const handleToggle = e => {
    if (e.target.checked) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  useEffect(() => {
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')

    // add custom data-theme attribute
    document.querySelector('html').setAttribute('data-theme', localTheme)
  }, [theme])


  const {user,logOut} = useAuth();

  const handleLogOut = () => {
    logOut()
    .then(res => {
      toast.success('Successfully Logged Out!')
    })
    .catch(error => {
      toast.error('Something Went Wrong!')
    })
  }


  return (
    <div className="navbar bg-transparent font-poppins shadow-md lg:px-10 relative z-50">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden -ml-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-y-5">
      <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline decoration-primary decoration-2 underline-offset-8"
                : "no-underline"
            }
            to={"/"}
          >
            <li className=" font-medium text-sm cursor-pointer">
              Home
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline decoration-primary decoration-2 underline-offset-8"
                : "no-underline"
            }
            to={"/all_arts"}
          >
            <li className=" font-medium text-sm cursor-pointer">
             All Arts
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline decoration-primary decoration-2 underline-offset-8"
                : "no-underline"
            }
            to={"/add_arts"}
          >
            <li className=" font-medium text-sm cursor-pointer">
              Add Arts
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline decoration-primary decoration-2 underline-offset-8"
                : "no-underline"
            }
            to={"/my_arts"}
          >
            <li className=" font-medium text-sm cursor-pointer">
              My Arts
            </li>
          </NavLink>
      </ul>
    </div>
    <div onClick={()=>navigate('/')} className='flex items-center gap-2 cursor-pointer'>
    <img src="https://i.ibb.co/2YWcrgN/art-and-design.png" alt="logo.png" className='lg:w-10 md:w-10 w-8'/>
    <span className='font-clickerScript lg:text-3xl md:text-3xl text-2xl font-semibold flex items-center gap-1'>Johu
<Typewriter
  options={{
    strings: ['Arts','Crafts'],
    autoStart: true,
    loop: true,
  }}
/>
    </span>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-x-5">
    <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline decoration-primary decoration-2 underline-offset-8"
                : "no-underline"
            }
            to={"/"}
          >
            <li className=" font-medium text-sm cursor-pointer">
              Home
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline decoration-primary decoration-2 underline-offset-8"
                : "no-underline"
            }
            to={"/all_arts"}
          >
            <li className=" font-medium text-sm cursor-pointer">
             All Arts
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline decoration-primary decoration-2 underline-offset-8"
                : "no-underline"
            }
            to={"/add_arts"}
          >
            <li className=" font-medium text-sm cursor-pointer">
              Add Arts
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline decoration-primary decoration-2 underline-offset-8"
                : "no-underline"
            }
            to={"/my_arts"}
          >
            <li className=" font-medium text-sm cursor-pointer">
              My Arts
            </li>
          </NavLink>
    </ul>
  </div>
  <div className="navbar-end flex items-center gap-1 lg:gap-2 md:gap-2">
  {
  user && <div className="dropdown dropdown-end flex items-center lg:gap-2 md:gap-2 gap-1" >
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
    <div className="lg:w-12 md:w-12 w-10 rounded-full border-2 border-primary" data-tooltip-id="name" data-tooltip-content={user?.displayName}>
      <img alt="user.png" src={user?.photoURL || 'https://i.ibb.co/Lxvz266/user-1.png'} />
    </div>
  </div>
  <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 relative top-10">
  <li className="font-bold py-2 px-4">Hi! {user?.displayName || "User"}</li>
            <button onClick={() => navigate("/profile")} className="flex items-center gap-2 font-medium hover:bg-gray-200 py-2 px-4 hover:rounded-lg">
              <FaUserCircle className="text-xl text-gray-400" />
              <span>Profile</span>
            </button>
            <button
              // onClick={() => navigate("/update-profile")}
              className="flex items-center gap-2 font-medium hover:bg-gray-200 py-2 px-4 hover:rounded-lg"
            >
              <IoSettingsOutline className="text-xl" />
              <span>Settings</span>
            </button>
            <button
              onClick={handleLogOut}
              className="flex items-center gap-2 font-medium hover:bg-gray-200 py-2 px-4 hover:rounded-lg text-red-500"
            >
              <IoIosLogOut className="text-xl" />
              <span>Logout</span>
            </button>
  </ul>
</div>
}
    {
      user ? <button onClick={handleLogOut} className="hover:bg-primary border border-primary duration-700 hover:text-white lg:text-base md:text-base text-sm lg:px-4 md:px-4 px-2 lg:py-2 md:py-2 py-[6px] rounded-md font-medium flex items-center gap-1 uppercase text-primary">
      Logout</button>
      : 
      <div className='flex items-center gap-2'>
    <button onClick={()=>navigate('/register')} className="hover:bg-primary border border-primary duration-700 hover:text-white lg:text-base md:text-base text-sm lg:px-4 md:px-4 px-2 lg:py-2 md:py-2 py-[6px] rounded-md font-medium flex items-center gap-1 uppercase text-primary">
      Register</button>
      <button onClick={()=>navigate('/login')} className="bg-primary text-white lg:text-base md:text-base text-sm lg:px-4 md:px-4 px-2 lg:py-2 md:py-2 py-[6px] hover:border-primary hover:border hover:bg-transparent hover:text-primary rounded-md font-medium flex items-center gap-1 uppercase border border-primary duration-700">
      Login</button>
    </div>
    }
<label className="swap swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" className="theme-controller" onChange={handleToggle} />
  
  {/* sun icon */}
  <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
  </div>
  <Tooltip id="name" />
</div>
  )
}

export default Navbar