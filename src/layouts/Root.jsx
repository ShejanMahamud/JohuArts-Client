import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import useAuth from '../hooks/useAuth';
import Navbar from './../components/Navbar';

const Root = () => {

const {loading,pageLoader} = useAuth();

  return (
    <>
{
      loading ? <div className="w-full min-h-screen bg-transparent bg-[url('https://i.ibb.co/SvmndGX/laoding-bg.jpg')] bg-no-repeat bg-center bg-cover flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin  border-primary dark:border-primary bg-transparent"></div>
      </div>
      :
      <div>
      <Navbar/>
      {
        pageLoader ? <div className="w-full min-h-screen bg-transparent flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-dashed bg-transparent rounded-full animate-spin  border-primary dark:border-primary"></div>
      </div>
      : 
      <Outlet/>
      }
      <Footer/>
  </div>
    }
    </>
  )
}

export default Root