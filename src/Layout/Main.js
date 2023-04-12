import React from "react";
import Header from "../Components/Shared/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer";
import ScrollToTop from "../Components/Home/ScrollToTop/ScrollToTop";

const Main = ({ children }) => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Main;
