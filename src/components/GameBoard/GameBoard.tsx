import { SymbolType } from '../../symbol-type.ts'
import { GameTurn } from '../../game-turn.ts'

interface GameBoardProps {
  gameTurns: GameTurn[]
  onSelectSquare: (row: number, column: number) => void
}

const initialGameBoard: (SymbolType | null)[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]
const GameBoard = ({onSelectSquare, gameTurns} : GameBoardProps) => {
  const gameBoard = initialGameBoard

  for (const turn of gameTurns) {
    const {square, symbol} = turn

    gameBoard[square.row][square.col] = symbol
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, r) => {
        return <li key={'r-' + r}>
          <ol>
            {
              row.map((cell, c) => {
                return (<li key={'c-' + c}>
                  <button onClick={() => onSelectSquare(r, c)}>
                    {cell}
                  </button>
                </li>)
              })
            }
          </ol>
        </li>
      })}
    </ol>
  )
}

export default GameBoard
