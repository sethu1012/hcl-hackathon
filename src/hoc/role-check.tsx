import { Navigate } from "@tanstack/react-router";
import React from "react";

export const ProtectRoutes = (
  WrappedComponent: React.ComponentType,
  allowedRoles: string[]
) => {
  console.log(allowedRoles);
  return function WithProtectedRoute(props: any) {
    const userStr = localStorage.getItem("user");
    if (!userStr) {
      return <Navigate to="/" replace />;
    }

    const user = JSON.parse(userStr);
    console.log(user.role, allowedRoles);

    if (allowedRoles.includes(user.role)) {
      return <WrappedComponent {...props} />;
    } else {
      return <Navigate to="/" replace />;
    }
  };
};

export default ProtectRoutes;
