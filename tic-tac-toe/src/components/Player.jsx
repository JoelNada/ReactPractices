import React, { useState } from "react";

export default function Player({
  initialname,
  symbol,
  isActive,
  onChangeName,
}) {
  const [name, setName] = useState(initialname);
  const [isEdit, setIsEdit] = useState(false);
  const handleEdit = () => {
    setIsEdit((prevState) => !prevState);
    if (isEdit) {
      onChangeName(symbol, name);
    }
  };

  const changeName = (name) => {
    setName(name);
  };

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEdit ? (
          <input
            type="text"
            required
            value={name}
            onChange={(e) => changeName(e.target.value)}
          />
        ) : (
          <span className="player-name">{name}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{!isEdit ? "Edit" : "Save"}</button>
    </li>
  );
}
