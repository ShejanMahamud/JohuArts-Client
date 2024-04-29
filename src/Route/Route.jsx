import axios from 'axios';
import React from 'react';
import {
  createBrowserRouter
} from "react-router-dom";
import Root from '../layouts/Root';
import AddArts from '../pages/AddArts';
import AllArts from '../pages/AllArts';
import ArtDetails from '../pages/ArtDetails';
import ArtsByCategories from '../pages/ArtsByCategories';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Login from '../pages/Login';
import MyArts from '../pages/MyArts';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import UpdateArt from '../pages/UpdateArt';
import PrivateRoute from '../private/PrivateRoute';

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: '/',
        loader: ()=> axios.get(`https://johuarts-backend.vercel.app/arts`),
        element: <Home/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: '/add_arts',
        element: <PrivateRoute><AddArts/></PrivateRoute>
      },
      {
        path: '/all_arts',
        // loader: ()=> axios.get(`https://johuarts-backend.vercel.app/arts`),
        element: <AllArts/>
      },
      {
        path: '/my_arts',
        element: <PrivateRoute><MyArts/></PrivateRoute>
      },
      {
        path: '/art/:id',
        loader: ({params})=> axios.get(`https://johuarts-backend.vercel.app/art/${params.id}`),
        element: <PrivateRoute><ArtDetails/></PrivateRoute>
      },
      {
        path: '/update/:id',
        loader: ({params})=> axios.get(`https://johuarts-backend.vercel.app/art/${params.id}`),
        element: <PrivateRoute><UpdateArt/></PrivateRoute>
      },
      {
        path: '/category/:subcategory_name',
        loader: ({params})=> axios.get(`https://johuarts-backend.vercel.app/category/${params.subcategory_name}`),
        element: <ArtsByCategories/>
      },
      {
        path: '/profile',
        element: <Profile/>
      }
    ],
    errorElement: <ErrorPage/>
  },
]);

export default Route