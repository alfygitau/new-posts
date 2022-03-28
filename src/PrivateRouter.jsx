import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {
  const isLogged = true;

  // If authorized, return a component that will render child elements
  // If not, return element that will navigate to login page
  return isLogged ? <Component /> : <Navigate to="/login" />;
}
