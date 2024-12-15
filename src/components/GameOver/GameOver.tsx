export interface GameOverProps {
  name: string | null
  resetClicked: () => void
}

const GameOver = ({ name, resetClicked }: GameOverProps) => {
  return (
    <div id="game-over">
      <h2>Game over !</h2>
      {name && <p>{name} has won</p>}
      {!name && <p>It's a draw</p>}
      <button onClick={resetClicked}>Rematch!</button>
    </div>
  )
}


export default GameOver
