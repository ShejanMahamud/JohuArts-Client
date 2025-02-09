import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Footer = () => {

const navigate = useNavigate();

  return (
    <footer className="w-full bg-[#FF5733] md:px-10 px-5 lg:px-40 py-5 flex flex-col gap-8 bg-opacity-5 font-poppins">
      <div className="flex justify-between items-center">
	  <div className='w-full flex items-center'>
        <img src="https://i.ibb.co/2YWcrgN/art-and-design.png" alt="logo.png" className='w-12 '/>
        <span className='text-xl font-medium'>JohuArts</span>
    </div>
        <div className="flex gap-3 lg:gap-10 items-center flex-col lg:flex-row w-full lg:justify-end justify-center">
          <p className=" font-medium lg:text-base text-sm text-center">
            Ready to explore houses?
          </p>
          <button onClick={()=>window.scroll(0,0)} className="bg-primary lg:px-6 px-4 lg:py-3 py-3 text-white text-sm font-extrabold rounded-lg inline-block">
            Get Started
          </button>
        </div>
      </div>
      <div className="lg:grid-cols-4 md:grid-cols-2 grid-cols-1 row-auto grid items-center justify-center gap-10">
        <div>
          <h1 className=" text-xl font-semibold mb-4">Quick Links</h1>
          <ul className="flex flex-col gap-2  font-medium">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
            <li><NavLink to="/all_arts">Arts</NavLink></li>
          </ul>
        </div>
        <div>
          <h1 className=" text-xl font-semibold mb-4">Our Services</h1>
          <ul className="flex flex-col gap-2  font-medium">
            <li><a href="/add_arts">Sell</a></li>
            <li><a href="/all_arts">Buy</a></li>
            <li><a href="/add_arts">Add Art</a></li>
            <li><a href="/">Art Competition</a></li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-semibold mb-4">Help</h1>
          <ul className="flex flex-col gap-2 font-medium">
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/policy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 w-[70%] lg:w-full">
          <h1 className=" text-xl font-semibold mb-3">Subscribe to our newsletter</h1>
          <div className="flex flex-col gap-8">
            <div className="flex items-start flex-col gap-3">
              <div className="flex items-center justify-between w-full">
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="bg-transparent focus:outline-none placeholder:font-medium placeholder:text-[#494949]"
                />
                <div className="bg-primary rounded-full h-6 w-6 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M6.91406 3.92432L12.1315 9.14171L6.91406 14.3591"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <hr className="h-[3px] w-full bg-[#494949] rounded-full opacity-30" />
            </div>
            <div className="flex items-center gap-6">
              <Link to={'https://www.facebook.com'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M14 13.6411H16.5L17.5 9.64111H14V7.64111C14 6.61111 14 5.64111 16 5.64111H17.5V2.28111C17.174 2.23811 15.943 2.14111 14.643 2.14111C11.928 2.14111 10 3.79811 10 6.84111V9.64111H7V13.6411H10V22.1411H14V13.6411Z"
                  fill="#494949"
                />
              </svg>
              </Link>
              <Link to={'https://www.twitter.com'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M22.1623 5.79802C21.3989 6.13571 20.5893 6.35749 19.7603 6.45602C20.634 5.93345 21.288 5.11103 21.6003 4.14202C20.7803 4.63002 19.8813 4.97202 18.9443 5.15702C18.3149 4.4836 17.4807 4.03698 16.5713 3.8866C15.6618 3.73622 14.7282 3.89051 13.9156 4.32547C13.1029 4.76043 12.4567 5.4517 12.0774 6.29181C11.6981 7.13192 11.607 8.0738 11.8183 8.97102C10.1554 8.88767 8.52863 8.45554 7.04358 7.70268C5.55854 6.94982 4.24842 5.89306 3.1983 4.60102C2.82659 5.23947 2.63125 5.96524 2.6323 6.70402C2.6323 8.15402 3.3703 9.43502 4.4923 10.185C3.82831 10.1641 3.17893 9.9848 2.5983 9.66202V9.71402C2.5985 10.6797 2.93267 11.6156 3.54414 12.3631C4.15562 13.1105 5.00678 13.6235 5.9533 13.815C5.33691 13.9821 4.6906 14.0067 4.0633 13.887C4.33016 14.7183 4.8503 15.4452 5.55089 15.9661C6.25147 16.487 7.09742 16.7758 7.9703 16.792C7.10278 17.4733 6.10947 17.977 5.04718 18.2742C3.98488 18.5714 2.87442 18.6563 1.7793 18.524C3.69099 19.7534 5.91639 20.4061 8.1893 20.404C15.8823 20.404 20.0893 14.031 20.0893 8.50402C20.0893 8.32402 20.0843 8.14202 20.0763 7.96402C20.8952 7.37218 21.6019 6.63904 22.1633 5.79902L22.1623 5.79802Z"
                  fill="#494949"
                />
              </svg>
              </Link>
              <Link to={'https://www.instagram.com'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M12 2.14111C14.717 2.14111 15.056 2.15111 16.122 2.20111C17.187 2.25111 17.912 2.41811 18.55 2.66611C19.21 2.92011 19.766 3.26411 20.322 3.81911C20.8305 4.31901 21.224 4.9237 21.475 5.59111C21.722 6.22811 21.89 6.95411 21.94 8.01911C21.987 9.08511 22 9.42411 22 12.1411C22 14.8581 21.99 15.1971 21.94 16.2631C21.89 17.3281 21.722 18.0531 21.475 18.6911C21.2247 19.3589 20.8311 19.9637 20.322 20.4631C19.822 20.9714 19.2173 21.3649 18.55 21.6161C17.913 21.8631 17.187 22.0311 16.122 22.0811C15.056 22.1281 14.717 22.1411 12 22.1411C9.283 22.1411 8.944 22.1311 7.878 22.0811C6.813 22.0311 6.088 21.8631 5.45 21.6161C4.78233 21.3656 4.17753 20.9721 3.678 20.4631C3.16941 19.9633 2.77593 19.3586 2.525 18.6911C2.277 18.0541 2.11 17.3281 2.06 16.2631C2.013 15.1971 2 14.8581 2 12.1411C2 9.42411 2.01 9.08511 2.06 8.01911C2.11 6.95311 2.277 6.22911 2.525 5.59111C2.77524 4.92329 3.1688 4.31843 3.678 3.81911C4.17767 3.31034 4.78243 2.91684 5.45 2.66611C6.088 2.41811 6.812 2.25111 7.878 2.20111C8.944 2.15411 9.283 2.14111 12 2.14111ZM12 7.14111C10.6739 7.14111 9.40215 7.6679 8.46447 8.60558C7.52678 9.54326 7 10.815 7 12.1411C7 13.4672 7.52678 14.739 8.46447 15.6766C9.40215 16.6143 10.6739 17.1411 12 17.1411C13.3261 17.1411 14.5979 16.6143 15.5355 15.6766C16.4732 14.739 17 13.4672 17 12.1411C17 10.815 16.4732 9.54326 15.5355 8.60558C14.5979 7.6679 13.3261 7.14111 12 7.14111ZM18.5 6.89111C18.5 6.55959 18.3683 6.24165 18.1339 6.00723C17.8995 5.77281 17.5815 5.64111 17.25 5.64111C16.9185 5.64111 16.6005 5.77281 16.3661 6.00723C16.1317 6.24165 16 6.55959 16 6.89111C16 7.22263 16.1317 7.54058 16.3661 7.775C16.6005 8.00942 16.9185 8.14111 17.25 8.14111C17.5815 8.14111 17.8995 8.00942 18.1339 7.775C18.3683 7.54058 18.5 7.22263 18.5 6.89111ZM12 9.14111C12.7956 9.14111 13.5587 9.45718 14.1213 10.0198C14.6839 10.5824 15 11.3455 15 12.1411C15 12.9368 14.6839 13.6998 14.1213 14.2624C13.5587 14.825 12.7956 15.1411 12 15.1411C11.2044 15.1411 10.4413 14.825 9.87868 14.2624C9.31607 13.6998 9 12.9368 9 12.1411C9 11.3455 9.31607 10.5824 9.87868 10.0198C10.4413 9.45718 11.2044 9.14111 12 9.14111Z"
                  fill="#494949"
                />
              </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <span className="mt-5 text-center font-medium  tracking-wide">
        © 2024 - All rights reserved By JohuArts
      </span>
    </footer>
  );
}

export default Footer;