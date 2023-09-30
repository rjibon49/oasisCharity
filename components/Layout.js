import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div>
      {/* Add your header */}
      <Header />

      {/* Render the main content */}
      <main>{children}</main>

      {/* Add your footer */}
      <footer>
        <p>Your Footer</p>
      </footer>
    </div>
  );
};

export default Layout;