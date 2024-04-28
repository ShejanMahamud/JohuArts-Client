import React, { createContext } from 'react';
import Arts from '../components/Arts';
import Speciality from '../components/Speciality';
import Subcategories from '../components/Subcategories';
import Banner from './../components/Banner';
export const DataContext = createContext(null)

const Home = () => {

  return (
    <>
      <Banner/>
      <Speciality/>
      <Subcategories/>
      <Arts/>
    </>
  )
}

export default Home