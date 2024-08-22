import React from "react";

export default function FormControl({ label, ...props }) {
  return (
    <p>
      <label>{label}</label>
      <input {...props} />
    </p>
  );
}
