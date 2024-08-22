// import React, { useState } from "react";

export default function GameBoard({ onSelectSquare, board }) {
  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //   const handleSelectSquare = (rowIndex, colIndex) => {
  //     setGameBoard((prevGameboard) => {
  //       const updatedBoard = [...prevGameboard.map((row) => [...row])];
  //       updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //       return updatedBoard;
  //     });

  //     onSelectSquare();
  //   };

  return (
    <ol id="game-board">
      {board.map((row, i) => (
        <ol key={i}>
          {row.map((playerSymbol, j) => (
            <button
              key={j}
              className="cell"
              onClick={() => onSelectSquare(i, j)}
              disabled={playerSymbol !== null}
            >
              {playerSymbol}
            </button>
          ))}
        </ol>
      ))}
    </ol>
  );
}
