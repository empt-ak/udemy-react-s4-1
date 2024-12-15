import { SymbolType } from '../../models/symbol-type.ts'

export interface GameOverProps {
  symbol: SymbolType | null
  resetClicked: () => void
}

const GameOver = ({symbol, resetClicked}: GameOverProps) => {
  return (
    <div id="game-over">
     <h2>Game over !</h2>
      {symbol && <p>{symbol} has won</p>}
      {!symbol && <p>It's a draw</p>}
      <button onClick={resetClicked}>Rematch!</button>
    </div>
  )
}


export default GameOver
