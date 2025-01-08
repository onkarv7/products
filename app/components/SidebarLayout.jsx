"use client";

import React, { useState } from "react";
import "./sidebar.css"

const SidebarLayout = ({ children }) => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="sidebar-layout">
      {isSidebarVisible && <aside className="filter-sidebar">{children[0]}</aside>}
      <div className={`products-container ${isSidebarVisible ? "" : "full-width"}`}>
        <button className="toggle-sidebar-btn" onClick={toggleSidebar}>
          {isSidebarVisible ? "Hide Filters" : "Show Filters"}
        </button>
        {children[1]}
      </div>
    </div>
  );
};

export default SidebarLayout;
