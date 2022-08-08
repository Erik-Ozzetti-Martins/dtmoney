import React from "react";
import { GlobalStyles } from "./styles/global";
import Modal from "react-modal";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/auth/Login";
import { Home } from "./pages/home/Home";
import { UserStorage } from "./context/useContext";
import { SendForgotPasswordEmail } from "./pages/auth/SendForgotPasswordEmail";
import { ProtectedRouter } from "./components/Helps/ProtectedRouter";
import { ResetPassword } from "./pages/auth/ResetPassword";
import { Not404 } from "./pages/not404/Not404";

Modal.setAppElement("#root");
export function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <UserStorage>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/sendForgotPassword"
              element={<SendForgotPasswordEmail />}
            />
            <Route path="/password/reset" element={<ResetPassword />} />
            <Route
              path="/home"
              element={
                
                  <Home />
                
              }
            />
            <Route path="*" element={<Not404 />} />
          </Routes>
        </UserStorage>
      </BrowserRouter>
    </>
  );
}
