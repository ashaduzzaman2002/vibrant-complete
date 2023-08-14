import React, { useEffect } from "react";
import { Footer, Navbar } from "../components";
import { useLocation } from "react-router-dom";
import "./layout.css";

const Layout = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <Navbar />
      <div className="layout">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
