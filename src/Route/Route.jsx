import React from 'react';
import {
  createBrowserRouter
} from "react-router-dom";
import Root from '../layouts/Root';
import AddArts from '../pages/AddArts';
import AllArts from '../pages/AllArts';
import ArtDetails from '../pages/ArtDetails';
import ErrorPage from '../pages/ErrorPage';
import Login from '../pages/Login';
import MyArts from '../pages/MyArts';
import Register from '../pages/Register';
import Home from './../pages/Home';

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: '/',
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
        element: <AddArts/>
      },
      {
        path: '/all_arts',
        element: <AllArts/>
      },
      {
        path: '/my_arts',
        element: <MyArts/>
      },
      {
        path: '/art',
        element: <ArtDetails/>
      }
    ],
    errorElement: <ErrorPage/>
  },
]);

export default Route