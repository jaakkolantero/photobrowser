import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-100">
      {children}
    </div>
  );
};

export default Layout;
