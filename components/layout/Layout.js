import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className='screen'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
