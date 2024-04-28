import React, { createContext } from 'react';
import Arts from '../components/Arts';
import Reviews from '../components/Reviews';
import Speciality from '../components/Speciality';
import Subcategories from '../components/Subcategories';
import WhyUs from '../components/WhyUs';
import Banner from './../components/Banner';
export const DataContext = createContext(null)

const Home = () => {

  return (
    <>
      <Banner/>
      <Speciality/>
      <Subcategories/>
      <Arts/>
      <WhyUs/>
      <Reviews/>
    </>
  )
}

export default Home