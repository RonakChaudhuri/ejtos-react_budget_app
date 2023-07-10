import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const options = [
  {
    value: "$",
    label: "$ Dollar",
  },
  {
    value: "£",
    label: "£ Pound",
  },
  {
    value: "€",
    label: "€ Euro",
  },
  {
    value: "₹",
    label: "₹ Rupee",
  },
];

export const Currencies = () => {
  const { dispatch, currency } = useContext(AppContext);

  const handleChange = (e) => {
    dispatch({
        type: 'CHG_CURRENCY',
        payload: currency
    });
  };

  return (
    <select
      className="form-select select"
      aria-label="Default select example"
      onChange={handleChange}
      value={currency}
      style={{ backgroundColor: 'green', color: 'white' }}
    >
      {options.map(({ value, label }) => {
        return (
          <option key={value} value={value}>
            {label}
          </option>
        );
      })}
    </select>
  );
};