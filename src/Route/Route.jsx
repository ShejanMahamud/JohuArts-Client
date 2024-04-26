import axios from 'axios';
import React from 'react';
import {
  createBrowserRouter
} from "react-router-dom";
import Root from '../layouts/Root';
import AddArts from '../pages/AddArts';
import AllArts from '../pages/AllArts';
import ArtDetails from '../pages/ArtDetails';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Login from '../pages/Login';
import MyArts from '../pages/MyArts';
import Register from '../pages/Register';
import PrivateRoute from './../private/PrivateRoute';
import UpdateArt from './../pages/UpdateArt';
const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: '/',
        loader: ()=> axios.get(`http://localhost:7284/arts`),
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
        loader: ()=> axios.get(`http://localhost:7284/arts`),
        element: <AllArts/>
      },
      {
        path: '/my_arts',
        element: <MyArts/>
      },
      {
        path: '/art/:id',
        loader: ({params})=> axios.get(`http://localhost:7284/art/${params.id}`),
        element: <ArtDetails/>
      },
      {
        path: '/update/:id',
        loader: ({params})=> axios.get(`http://localhost:7284/art/${params.id}`),
        element: <UpdateArt/>
      }
    ],
    errorElement: <ErrorPage/>
  },
]);

export default Route