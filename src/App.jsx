import Player from "./components/Player"
import { useState } from "react"
function App() {
  
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initName="player 1" symbol="X"></Player>
          <Player initName="player 2" symbol="O"></Player>
        </ol>

        GAME BOARD
      </div>
      


      LOG
    </main>
  )
}

export default App
