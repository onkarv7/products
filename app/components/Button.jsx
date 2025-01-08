import React from "react";

const Button = ({ label, id, placeholder, value, onChange }) => {
  return (
    <div className="text-input">
      <label htmlFor={id} className="text-label">{label}</label>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="text-field"
      />
    </div>
  );
};

export default Button;
