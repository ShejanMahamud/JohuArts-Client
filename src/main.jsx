import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import AuthProvider from "./providers/AuthProvider";
import Route from "./route/Route.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={Route} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
