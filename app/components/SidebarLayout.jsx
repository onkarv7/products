
import React from "react";


const SidebarLayout = ({ children, isSidebarVisible }) => {
    return (
      <div className="sidebar-layout">
        {isSidebarVisible && <aside className="filter-sidebar">{children[0]}</aside>}
        <div className={`products-container ${isSidebarVisible ? "" : "full-width"}`}>
          {children[1]}
        </div>
      </div>
    );
  };

export default SidebarLayout;
