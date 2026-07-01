import React, { useState } from "react";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router";
import Footer from "./components/Footer";
import ThemeProvider from "./store/useContex";
import "./App.css";

function App() {
  return (
    <>
      <ThemeProvider>
        <NavBar />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
