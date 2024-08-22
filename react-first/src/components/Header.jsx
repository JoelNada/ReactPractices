import React from "react";
import "./css/Header.css";
import reactcore from "../assets/react-core-concepts.png";

export default function Header() {
  return (
    <header className="flex justify-center items-center flex-col">
      <img src={reactcore} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
