import Header from './components/Header/Header.tsx'
import Player from './components/Player/Player.tsx'

const App = () => {

  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players">
            <Player initialName="Player 1" symbol="X" />
            <Player initialName="Player 2" symbol="O" />
          </ol>

          game board
        </div>

        log
      </main>
    </>
  )
}

export default App
