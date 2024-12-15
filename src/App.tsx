import Header from './components/Header/Header.tsx'
import Player from './components/Player/Player.tsx'
import GameBoard from './components/GameBoard/GameBoard.tsx'
import { useState } from 'react'
import { SymbolType } from './symbol-type.ts'
import Log from './components/Log/Log.tsx'

const App = () => {
  const [activePlayer, setActivePlayer] = useState<SymbolType>('X')

  const handleSelectSquare = () => {
    setActivePlayer(previous => previous === 'X' ? 'O' : 'X')
  }

  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
            <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
          </ol>

          <GameBoard activeSymbol={activePlayer} onSelectSquare={handleSelectSquare}/>
        </div>

        <Log />
      </main>
    </>
  )
}

export default App
