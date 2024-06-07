import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import axios from 'axios';
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from "react-router-dom";
import Route from './Route/Route';
import "./index.css";
import AuthProvider from "./providers/AuthProvider";

const queryClient = new QueryClient();
axios.defaults.withCredentials = true

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={Route} />
      </AuthProvider>
    </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);
