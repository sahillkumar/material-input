import React, { useState } from "react";
import "./index.css";

const InputBox = ({ placeholder, className = "" }) => {
  const [value, setValue] = useState("");
  return (
    <div className="input-container">
      <input
        type="text"
        id="inputBox"
        name="inputBox"
        value={value}
        aria-labelledby="label-inputBox"
        onChange={({ target: { value } }) => setValue(value)}
        className={className}
      />
      <label className="label" htmlFor="inputBox" id="label-inputBox">
        <div className="text">{placeholder}</div>
      </label>
    </div>
  );
};

export default InputBox;
