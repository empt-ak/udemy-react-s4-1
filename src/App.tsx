import Header from './components/Header/Header.tsx'
import Player from './components/Player/Player.tsx'
import GameBoard from './components/GameBoard/GameBoard.tsx'
import { useState } from 'react'
import { SymbolType } from './models/symbol-type.ts'
import Log from './components/Log/Log.tsx'
import { GameTurn } from './models/game-turn.ts'
import { WINNING_COMBINATIONS } from './data.ts'
import GameOver from './components/GameOver/GameOver.tsx'

const initialGameBoard: (SymbolType | null)[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

const getCurrentPlayer = (turns: GameTurn[]) : SymbolType => {
  if(turns.length && turns[0].symbol === 'X') {
    return 'O'
  }

  return 'X'
}

const App = () => {
  const [gameTurns, setGameTurns] = useState<GameTurn[]>([])

  const activePlayer = getCurrentPlayer(gameTurns)
  const gameBoard = [...initialGameBoard.map(e => [...e])]

  for (const turn of gameTurns) {
    const {square, symbol} = turn

    gameBoard[square.row][square.col] = symbol
  }

  let winner: SymbolType | null = null
  for(const combination of WINNING_COMBINATIONS) {
    const firstSquare= gameBoard[combination[0].row][combination[0].col]
    const secondSquare= gameBoard[combination[1].row][combination[1].col]
    const thirdSquare = gameBoard[combination[2].row][combination[2].col]

    if(firstSquare &&
      firstSquare === secondSquare &&
      firstSquare === thirdSquare) {
      winner = firstSquare
      break
    }
  }

  const hasDraw = !winner && gameTurns.length === 9

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

  const restartGame = () => {
    setGameTurns([])
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

          {(winner || hasDraw) && <GameOver symbol={winner} resetClicked={restartGame}/>}
          <GameBoard board={gameBoard} onSelectSquare={handleSelectSquare}/>
        </div>

        <Log turns={gameTurns}/>
      </main>
    </>
  )
}

export default App
