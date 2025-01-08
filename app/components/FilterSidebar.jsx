import React from "react";

const FilterSidebar = () => {
  return (
    <div className="filter-sidebar">
      <label className="checkbox-container">
        <input type="checkbox" />
        CUSTOMIZABLE
      </label>
      <div>
        <h4>IDEAL FOR</h4>
        <span>All</span>
        <div>
          <a href="#" className="unselect-link">
            Unselect all
          </a>
        </div>

        <ul>
          <li>
            <input type="checkbox" id="men" />
            <label htmlFor="men">Men</label>
          </li>
          <li>
            <input type="checkbox" id="women" />
            <label htmlFor="women">Women</label>
          </li>
          <li>
            <input type="checkbox" id="kids" />
            <label htmlFor="kids">Baby &amp; Kids</label>
          </li>
        </ul>
      </div>
      <div className="filter-section">
        <h4>OCCASION</h4>
        <span>All</span>
      </div>
      <div className="filter-section">
        <h4>WORK</h4>
        <span>All</span>
      </div>
      <div className="filter-section">
        <h4>FABRIC</h4>
        <span>All</span>
      </div>
      <div className="filter-section">
        <h4>SEGMENT</h4>
        <span>All</span>
      </div>
      <div className="filter-section">
        <h4>SUITABLE FOR</h4>
        <span>All</span>
      </div>
      <div className="filter-section">
        <h4>RAW MATERIALS</h4>
        <span>All</span>
      </div>
      <div className="filter-section">
        <h4>PATTERN</h4>
        <span>All</span>
      </div>
    </div>
  );
};

export default FilterSidebar;
