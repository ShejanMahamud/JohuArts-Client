import React, { createContext } from 'react';
import Artists from '../components/Artists';
import Arts from '../components/Arts';
import Frames from '../components/Frames';
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
      <Frames/>
      <Subcategories/>
      <Arts/>
      <Artists/>
      <WhyUs/>
      <Reviews/>
    </>
  )
}

export default Home