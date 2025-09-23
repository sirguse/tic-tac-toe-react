import { useState } from "react"
export default function Player({initName, symbol}){
    const [playerName, setPlayerName] = useState(initName)
    const [isEditing, setIsEditing] = useState(false);
    function Edit(){
        setIsEditing((editing) => !editing)
    }
    let editablePlayerName = <span className="player-name">{name}</span>;

    if (isEditing) {
      editablePlayerName = <input type="text" required defaultValue={name}></input>
    }
    function handleChange(){
      
    }
    return (
        <li>
            <span className="player">
              {playerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={Edit}>{isEditing ? 'Save' : "Edit"}</button>
            
          </li>
    )
}