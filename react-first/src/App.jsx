import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ReactEssentials from "./pages/ReactEssentials";

function App() {
  return (
    <Routes>
      <Route exact path="/react-essentials" element={<ReactEssentials />} />
      <Route exact path="/tic-tac-toe" element={""} />
    </Routes>
  );
}

export default App;
