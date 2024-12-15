import { useState } from 'react'
import { SymbolType } from '../../symbol-type.ts'

interface GameBoardProps {
  activeSymbol: SymbolType
  onSelectSquare: () => void
}

const initialGameBoard: (SymbolType | null)[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]
const GameBoard = ({onSelectSquare, activeSymbol} : GameBoardProps) => {
  const [board, setBoard] = useState<(SymbolType | null)[][]>(initialGameBoard)

  const onClickHandler = (x: number, y: number) => {
    setBoard(previous => {
      const next = [...previous.map(oldRow => [...oldRow])]

      next[x][y] = activeSymbol

      return next
    })

    onSelectSquare()
  }

  return (
    <ol id="game-board">
      {board.map((row, r) => {
        return <li key={'r-' + r}>
          <ol>
            {
              row.map((cell, c) => {
                return (<li key={'c-' + c}>
                  <button onClick={() => onClickHandler(r, c)}>
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
