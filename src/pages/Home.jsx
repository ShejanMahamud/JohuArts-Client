import React, { createContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Arts from '../components/Arts';
import Speciality from '../components/Speciality';
import Banner from './../components/Banner';
export const DataContext = createContext(null)

const Home = () => {

const {data} = useLoaderData();


  return (
    <DataContext.Provider value={data}>
      <Banner/>
      <Speciality/>
      <Arts/>
    </DataContext.Provider>
  )
}

export default Home