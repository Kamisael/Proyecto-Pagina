import React from "react";
import Routers from "../../routes/Routers.js";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

const Layout = () => {
  return (
    <div>
      <Header />
      <Routers/>
      <Footer />
    </div>
  );
};

export default Layout;
