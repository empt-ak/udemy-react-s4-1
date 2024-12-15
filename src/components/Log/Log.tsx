import { GameTurn } from '../../models/game-turn.ts'

export  interface LogProps {
  turns: GameTurn[]
}

const Log = ({turns}: LogProps) => {
  return (<ol id="log">
    {turns.map(turn => {
      return (<li key={`k-${turn.square.row} - ${turn.square.col}`}>
        {turn.symbol} selected [{turn.square.row}, {turn.square.col}]
      </li>)
    })}
  </ol>)
}

export default Log
