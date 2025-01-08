import React from "react";

const FilterSidebar = () => {
  return (
    <div>
      <h3>Filters</h3>
      <div className="filter-item">
        <label>
          <input type="checkbox" />
          Customizable
        </label>
      </div>
      <ul>
        {[
          "Ideal For",
          "Occasion",
          "Work",
          "Fabric",
          "Segment",
          "Suitable For",
          "Raw Materials",
          "Pattern",
        ].map((filter, index) => (
          <li key={index} className="filter-item">
            <button className="filter-button">
              {filter}
              <span>All</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterSidebar;
