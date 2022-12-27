import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { MoviesContext } from '../contexts/moviesContext.js'
import AlertPage from "./alertPage.js";

const ProtectedRoutes = () => {

  const context = useContext(MoviesContext);
  const location = useLocation();

  return context.isAuthenticated === true ? (
    <Outlet /> 
  ) : (
    <AlertPage/>
  );
};

export default ProtectedRoutes;