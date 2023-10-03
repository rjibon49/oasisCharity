import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      {/* Add your header */}
      <Header />

      {/* Render the main content */}
      <main>{children}</main>

      {/* Add your footer */}
      <Footer />
    </div>
  );
};

export default Layout;