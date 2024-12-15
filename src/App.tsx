import Header from './components/Header/Header.tsx'

const App = () => {

  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players">
            <li><span className="player-name">player1</span><span className="player-symbol">X</span></li>
            <li><span className="player-name">player2</span><span className="player-symbol">O</span></li>
          </ol>

          game board
        </div>

        log
      </main>
    </>
  )
}

export default App
