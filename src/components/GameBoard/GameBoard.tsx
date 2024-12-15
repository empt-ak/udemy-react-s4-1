import { useState } from 'react'

interface GameBoardProps {
  symbol: string
}

const initialGameBoard: (string | null)[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]
const GameBoard = () => {
  const [board, setBoard] = useState<(string | null)[][]>(initialGameBoard)

  const onClickHandler = (x: number, y: number) => {
    setBoard(previous => {
      const next = [...previous.map(oldRow => [...oldRow])]

      next[x][y] = 'X'

      return next
    })
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
