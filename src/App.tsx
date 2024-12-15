import Header from './components/Header/Header.tsx'
import Player from './components/Player/Player.tsx'
import GameBoard from './components/GameBoard/GameBoard.tsx'
import { useState } from 'react'
import { SymbolType } from './symbol-type.ts'
import Log from './components/Log/Log.tsx'
import { GameTurn } from './game-turn.ts'

const App = () => {
  const [gameTurns, setGameTurns] = useState<GameTurn[]>([])
  const [activePlayer, setActivePlayer] = useState<SymbolType>('X')

  const handleSelectSquare = (row: number, col: number) => {
    setActivePlayer(previous => previous === 'X' ? 'O' : 'X')

    setGameTurns(previous => {
      let symbol: SymbolType = 'X'

      if(previous.length && previous[0].symbol === 'X') {
        symbol = 'O'
      }

      const turn : GameTurn = {
        symbol: symbol,
        square: {
          row, col
        }
      }

      return [turn,...previous]
    })
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

          <GameBoard gameTurns={gameTurns} onSelectSquare={handleSelectSquare}/>
        </div>

        <Log />
      </main>
    </>
  )
}

export default App
