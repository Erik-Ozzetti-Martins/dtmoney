import React from "react";
import { GlobalStyles } from "./styles/global";
import Modal from "react-modal";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/auth/Login";
import { Home } from "./pages/home/Home";


Modal.setAppElement("#root");
export function App() {
 
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
