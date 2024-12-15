import Header from './components/Header/Header.tsx'
import Player from './components/Player/Player.tsx'
import GameBoard from './components/GameBoard/GameBoard.tsx'
import { useState } from 'react'
import { SymbolType } from './models/symbol-type.ts'
import Log from './components/Log/Log.tsx'
import { GameTurn } from './models/game-turn.ts'
import { WINNING_COMBINATIONS } from './data.ts'
import GameOver from './components/GameOver/GameOver.tsx'

type Board = (SymbolType | null)[][]
type Players = Record<SymbolType, string>

const INITIAL_BOARD: Board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

const INITIAL_PLAYERS: Players = {
  'X': 'Player1',
  'O': 'Player2',
}

const getCurrentPlayer = (turns: GameTurn[]): SymbolType => {
  if (turns.length && turns[0].symbol === 'X') {
    return 'O'
  }

  return 'X'
}

const determineWinner = (board: Board, players: Players): string | null => {

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = board[combination[0].row][combination[0].col]
    const secondSquare = board[combination[1].row][combination[1].col]
    const thirdSquare = board[combination[2].row][combination[2].col]

    if (firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare) {
      return players[firstSquare]
    }
  }

  return null
}

const createGameBoard = (turns: GameTurn[]): Board => {
  const gameBoard = [...INITIAL_BOARD.map(e => [...e])]

  for (const turn of turns) {
    const { square, symbol } = turn

    gameBoard[square.row][square.col] = symbol
  }

  return gameBoard
}

const App = () => {
  const [players, setPlayers] = useState<Players>(INITIAL_PLAYERS)

  const [gameTurns, setGameTurns] = useState<GameTurn[]>([])

  const activePlayer = getCurrentPlayer(gameTurns)
  const gameBoard = createGameBoard(gameTurns)
  const winner = determineWinner(gameBoard, players)
  const hasDraw = !winner && gameTurns.length === 9

  const handleSelectSquare = (row: number, col: number) => {
    setGameTurns(previous => {
      const symbol = getCurrentPlayer(previous)

      const turn: GameTurn = {
        symbol,
        square: {
          row, col,
        },
      }

      return [turn, ...previous]
    })
  }

  const restartGame = () => {
    setGameTurns([])
  }

  const handlePlayerNameChange = (symbol: SymbolType, name: string) => {
    setPlayers(old => {
      return { ...old, [symbol]: name }
    })
  }

  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player initialName={INITIAL_PLAYERS.X} symbol="X" isActive={activePlayer === 'X'} nameChanged={handlePlayerNameChange} />
            <Player initialName={INITIAL_PLAYERS.O} symbol="O" isActive={activePlayer === 'O'} nameChanged={handlePlayerNameChange} />
          </ol>

          {(winner || hasDraw) && <GameOver name={winner} resetClicked={restartGame} />}
          <GameBoard board={gameBoard} onSelectSquare={handleSelectSquare} />
        </div>

        <Log turns={gameTurns} />
      </main>
    </>
  )
}

export default App
