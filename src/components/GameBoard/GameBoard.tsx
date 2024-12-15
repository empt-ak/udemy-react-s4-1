import { SymbolType } from '../../models/symbol-type.ts'

interface GameBoardProps {
  onSelectSquare: (row: number, column: number) => void
  board: (SymbolType | null)[][]
}


const GameBoard = ({ onSelectSquare, board }: GameBoardProps) => {
  return (
    <ol id="game-board">
      {board.map((row, r) => {
        return <li key={'r-' + r}>
          <ol>
            {
              row.map((cell, c) => {
                return (<li key={'c-' + c}>
                  <button onClick={() => onSelectSquare(r, c)} disabled={!!cell}>
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
