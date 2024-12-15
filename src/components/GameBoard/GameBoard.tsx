
interface GameBoardProps {
  symbol: string
}

const initialGameBoard: (string | null)[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]
const GameBoard = () => {
  return (
    <ol id="game-board">
      {initialGameBoard.map((row, r) => {
        return <li key={'r-' + r}>
          <ol>
            {
              row.map((cell, c) => {
                return (<li key={'c-' + c}>
                  <button>
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
