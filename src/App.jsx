import Player from "./components/Player"
import { useState } from "react"
import GameBoard from "./components/GameBoard"
function App() {
  
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initName="player 1" symbol="X"></Player>
          <Player initName="player 2" symbol="O"></Player>
        </ol>
        <GameBoard></GameBoard>
        
      </div>
      


      LOG
    </main>
  )
}

export default App
