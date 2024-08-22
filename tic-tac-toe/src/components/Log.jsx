import React from "react";

export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map(({ square: { row, col }, player }, index) => (
        <li key={index}>{`${player} selected ${row},${col}`}</li>
      ))}
    </ol>
  );
}
