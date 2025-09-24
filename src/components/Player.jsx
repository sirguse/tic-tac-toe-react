import { useState } from "react";

export default function Player({ initName, symbol }) {
  // 1) Stan z aktualną nazwą gracza.
  const [playerName, setPlayerName] = useState(initName);

  // 2) Stan: czy jesteśmy w trybie edycji?
  const [isEditing, setIsEditing] = useState(false);

  // 3) Funkcja przełączająca tryb edycji <-> podgląd
  function toggleEdit() {
    setIsEditing((editing) => !editing);
  }

  // 4) Domyślnie pokazujemy zwykły tekst z nazwą.
  let editablePlayerName = <span className="player-name">{playerName}</span>;

  // 5) Jeśli edytujemy — zamiast tekstu pokaż input.
  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        // "value" sprawia, że to kontrolowany input (wartość zawsze z "playerName")
        value={playerName}
        // przy wpisywaniu aktualizujemy stan (i od razu widać zmianę)
        onChange={(e) => setPlayerName(e.target.value)}
        // opcjonalnie: autofocus ułatwia edycję
        autoFocus
      />
    );
  }

  // 6) Render: nazwa/input + symbol + przycisk
  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>

      {/* Kliknięcie przełącza tryb. Napis zależy od trybu. */}
      <button onClick={toggleEdit}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
