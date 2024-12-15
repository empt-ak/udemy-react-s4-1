import { SymbolType } from '../../models/symbol-type.ts'

export interface GameOverProps {
  symbol: SymbolType | null
}

const GameOver = ({symbol}: GameOverProps) => {
  return (
    <div id="game-over">
     <h2>Game over !</h2>
      {symbol && <p>{symbol} has won</p>}
      {!symbol && <p>It's a draw</p>}
      <button>Rematch!</button>
    </div>
  )
}


export default GameOver
