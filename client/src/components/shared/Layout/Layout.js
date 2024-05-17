import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="header sticky-top">
        <Header />
      </div>
      <div className="row g-0">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-9">{children}</div>
      </div>
    </>
  );
};

export default Layout;