import React from "react";
import { AboutUs, BlogPage, FaqPage, Home, ServicePage } from "./screens";
import { Route, Routes } from "react-router-dom";
import ConactPage from "./screens/contact/ConactPage";
import ServiceDetails from "./screens/service-details/ServiceDetails";
import WhatWeDoPage from "./screens/what-we-do-page/WhatWeDoPage";
import BlogDetails from "./screens/blog-details/BlogDetails";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/what-we-do-at-vibrant/:id" element={<WhatWeDoPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ConactPage />} />
      </Routes>
    </>
  );
};

export default App;
