import React, { createContext } from 'react';
import AboutUs from '../components/AboutUs';
import Artists from '../components/Artists';
import Arts from '../components/Arts';
import NewsLetter from '../components/NewsLetter';
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
      <AboutUs/>
      <Subcategories/>
      <Arts/>
      <Artists/>
      <WhyUs/>
      <Reviews/>
      <NewsLetter/>
    </>
  )
}

export default Home