import React from 'react';
import {
  createBrowserRouter
} from "react-router-dom";
import Root from '../layouts/Root';
import ErrorPage from '../pages/ErrorPage';
import Home from './../pages/Home';

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: '/',
        element: <Home/>
      }
    ],
    errorElement: <ErrorPage/>
  },
]);

export default Route