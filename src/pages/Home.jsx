import React, { createContext } from 'react';
import { Helmet } from 'react-helmet-async';
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
    <Helmet>
      <title>JohuArts | Home</title>
        <link rel="canonical" href="https://johuarts.netlify.app/" />
      </Helmet>
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