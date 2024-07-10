import React from "react";
import { Navigate } from "react-router-dom";
import { useContextUser } from "../../../../Domain/auth/useContext";

interface ProtextedRouterPros {
  children: any;
}

export function ProtectedRouter({ children }: ProtextedRouterPros) {
  const { login } = useContextUser();

  return login ? children : <Navigate to="/" />;
}
