import React from "react";

export default function GameOver({ winner, restart }) {
  return (
    <div id="game-over">
      <h2>GameOver</h2>
      {winner && <p>{`${winner} Won !`}</p>}
      {!winner && <p>Draw !</p>}
      <button /*onClick={() => window.location.reload()} */ onClick={restart}>
        Rematch !
      </button>
    </div>
  );
}
