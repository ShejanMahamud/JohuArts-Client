import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-transparent font-poppins shadow-md px-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline decoration-primary decoration-2 underline-offset-8"
                : "no-underline"
            }
            to={"/update-profile"}
          >
            <li className="text-[#706F6F] font-medium text-sm cursor-pointer">
              Arts
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline decoration-primary decoration-2 underline-offset-8"
                : "no-underline"
            }
            to={"/update-profile"}
          >
            <li className="text-[#706F6F] font-medium text-sm cursor-pointer">
              Update Profile
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline decoration-primary decoration-2 underline-offset-8"
                : "no-underline"
            }
            to={"/update-profile"}
          >
            <li className="text-[#706F6F] font-medium text-sm cursor-pointer">
              Update Profile
            </li>
          </NavLink>
      </ul>
    </div>
    <div className='flex items-center gap-2'>
    <img src="logo.png" alt="logo.png" className='w-10'/>
    <span className='font-clickerScript text-3xl font-semibold'>JohuArts</span>
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
            <li className="text-[#706F6F] font-medium text-sm cursor-pointer">
              Home
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "underline decoration-primary decoration-2 underline-offset-8"
                : "no-underline"
            }
            to={"/arts"}
          >
            <li className="text-[#706F6F] font-medium text-sm cursor-pointer">
              Arts
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
            <li className="text-[#706F6F] font-medium text-sm cursor-pointer">
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
            <li className="text-[#706F6F] font-medium text-sm cursor-pointer">
              My Arts
            </li>
          </NavLink>
    </ul>
  </div>
  <div className="navbar-end flex items-center gap-2">
  {/* <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div> */}
    <button className="hover:bg-primary border border-primary duration-700 hover:text-white px-4 py-2 rounded-md font-medium flex items-center gap-1 uppercase text-primary">
      Register</button>
      <button className="bg-primary text-white px-4 py-2 hover:border-primary hover:border hover:bg-transparent hover:text-primary rounded-md font-medium flex items-center gap-1 uppercase border border-primary duration-700">
      Login</button>
  </div>
</div>
  )
}

export default Navbar