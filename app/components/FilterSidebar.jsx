import React from "react";

const FilterSidebar = () => {
  return (
    <div classname="filter-sidebar">
      <label classname="checkbox-container">
        <input type="checkbox" />
        CUSTOMIZABLE
      </label>
      <div classname="filter-section">
        <h4>IDEAL FOR</h4>
        <span>All</span>
        <div>
          <a href="#" classname="unselect-link">
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
      <div classname="filter-section">
        <h4>OCCASION</h4>
        <span>All</span>
      </div>
      <div classname="filter-section">
        <h4>WORK</h4>
        <span>All</span>
      </div>
      <div classname="filter-section">
        <h4>FABRIC</h4>
        <span>All</span>
      </div>
      <div classname="filter-section">
        <h4>SEGMENT</h4>
        <span>All</span>
      </div>
      <div classname="filter-section">
        <h4>SUITABLE FOR</h4>
        <span>All</span>
      </div>
      <div classname="filter-section">
        <h4>RAW MATERIALS</h4>
        <span>All</span>
      </div>
      <div classname="filter-section">
        <h4>PATTERN</h4>
        <span>All</span>
      </div>
    </div>
  );
};

export default FilterSidebar;
