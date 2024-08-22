import React, { useState } from "react";

export default function Tab({ title, isSelected, ...props }) {
  return (
    <li>
      <button className={isSelected ? "active" : ""} {...props}>
        {title}
      </button>
    </li>
  );
}
