import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import useAuth from '../hooks/useAuth';
import Navbar from './../components/Navbar';

const Root = () => {

  const [pageLoader, setPageLoader] = useState(true);

const {loading} = useAuth();

useEffect(()=>{
  setTimeout(()=>{
    setPageLoader(false)
  },2000)
},[])

  return (
    <>
{
      loading || pageLoader ? <div className="w-full min-h-screen bg-transparent bg-[url('https://i.ibb.co/SvmndGX/laoding-bg.jpg')] bg-no-repeat bg-center bg-cover flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin  border-primary dark:border-primary bg-transparent"></div>
      </div>
      :
      <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
  </div>
    }
    </>
  )
}

export default Root