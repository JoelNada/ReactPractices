import React, { useState, useRef } from "react";

export default function Player() {
  const playerInputRef = useRef(null);
  const [player, setPlayer] = useState(null);

  const handleSetName = () => {
    setPlayer(playerInputRef.current.value);
    playerInputRef.current.value = "";
  };
  return (
    <section id="player">
      <h2>Welcome {player ?? "unknown entity"}</h2>
      <p>
        <input ref={playerInputRef} type="text" />
        <button onClick={handleSetName}>Set Name</button>
      </p>
    </section>
  );
}
