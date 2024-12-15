import Header from './components/Header/Header.tsx'
import Player from './components/Player/Player.tsx'
import GameBoard from './components/GameBoard/GameBoard.tsx'
import { useState } from 'react'
import { SymbolType } from './models/symbol-type.ts'
import Log from './components/Log/Log.tsx'
import { GameTurn } from './models/game-turn.ts'

const getCurrentPlayer = (turns: GameTurn[]) : SymbolType => {
  if(turns.length && turns[0].symbol === 'X') {
    return 'O'
  }

  return 'X'
}

const App = () => {
  const [gameTurns, setGameTurns] = useState<GameTurn[]>([])

  const activePlayer = getCurrentPlayer(gameTurns)

  const handleSelectSquare = (row: number, col: number) => {
    setGameTurns(previous => {
      const symbol = getCurrentPlayer(previous)

      const turn : GameTurn = {
        symbol,
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

        <Log turns={gameTurns}/>
      </main>
    </>
  )
}

export default App
