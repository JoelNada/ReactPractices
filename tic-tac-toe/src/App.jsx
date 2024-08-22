import { useState } from "react";
import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";
import Log from "./components/Log";
import Player from "./components/Player";
import { WINNING_COMBINATIONS } from "./winning-combinations";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const derrivedActivePlayer = (gameTurns) => {
  let turnedPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    turnedPlayer = "O";
  }
  return turnedPlayer;
};

function App() {
  const [Playername, setPlayerName] = useState({
    X: "player one",
    Y: "player two",
  });

  // const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = derrivedActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map((innerArrays) => [...innerArrays])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = Playername[firstSquareSymbol];
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  const handleSelectSquare = (rowIndex, colIndex) => {
    // setActivePlayer((prev) => (prev === "X" ? "O" : "X"));

    setGameTurns((prevTurns) => {
      const turnedPlayer = derrivedActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: turnedPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  };

  const handleRematch = () => {
    setGameTurns([]);
  };

  const handleChangePlayerName = (symbol, newName) => {
    setPlayerName((prev) => ({ ...prev, [symbol]: newName }));
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialname={"Player 1"}
            symbol={"X"}
            isActive={activePlayer === "X"}
            onChangeName={handleChangePlayerName}
          />
          <Player
            initialname={"Player 2"}
            symbol={"O"}
            isActive={activePlayer === "O"}
            onChangeName={handleChangePlayerName}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} restart={handleRematch} />
        )}

        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
