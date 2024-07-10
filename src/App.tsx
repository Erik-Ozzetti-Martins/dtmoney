import React from "react";
import { GlobalStyles } from "./styles/global";
import Modal from "react-modal";

import { BrowserRouter, Route, Routes } from "react-router-dom";



import { ViewLogin } from "./Presentation/views/auth/login/LoginView";
import { ProtectedRouter } from "./Presentation/Shared/components/Helps/ProtectedRouter";
import { SendForgotPasswordEmailView } from "./Presentation/views/auth/sendForgotPasswordEmail/SendForgotPasswordEmailView";
import { ResetPasswordView } from "./Presentation/views/auth/resetPassword/ResetPasswordView";
import { NotFoundViw } from "./Presentation/views/notFound/NotFoundView";
import { UserStorage } from "./Domain/auth/useContext";
import { HomeView } from "./Presentation/views/home/HomeView";

Modal.setAppElement("#root");
export function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <UserStorage>
          <Routes>
            <Route path="/" element={<ViewLogin />} />
            <Route
              path="/sendForgotPassword"
              element={<SendForgotPasswordEmailView />}
            />
            <Route path="/password/reset" element={<ResetPasswordView />} />
            <Route
              path="/home"
              element={
                <ProtectedRouter>
                  <HomeView />
                </ProtectedRouter>
              }
            />
            <Route path="*" element={<NotFoundViw />} />
          </Routes>
        </UserStorage>
      </BrowserRouter>
    </>
  );
}
