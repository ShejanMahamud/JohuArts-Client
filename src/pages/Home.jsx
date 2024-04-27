import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Arts from '../components/Arts';
import Speciality from '../components/Speciality';
import Subcategories from '../components/Subcategories';
import Banner from './../components/Banner';
export const DataContext = createContext(null)

const Home = () => {
const [categories, setCategories] = useState([])
const {data} = useLoaderData();

useEffect(()=>{
  axios.get(`https://johuarts-backend.vercel.app/categories`)
  .then(res =>{
    setCategories(res.data)
  })
  .catch(error => console.log(error))
},[])

const dataInfo = {data,categories}

  return (
    <DataContext.Provider value={dataInfo}>
      <Banner/>
      <Speciality/>
      <Subcategories/>
      <Arts/>
    </DataContext.Provider>
  )
}

export default Home