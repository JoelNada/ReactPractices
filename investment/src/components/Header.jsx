import React from "react";
import investLogo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={investLogo} alt="Investment Logo" />
      <h1>Investment App</h1>
    </header>
  );
}
