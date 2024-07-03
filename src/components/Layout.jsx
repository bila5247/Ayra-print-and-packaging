import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'; // Assuming you have a Footer component

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
