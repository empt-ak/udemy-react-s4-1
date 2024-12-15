import { useState } from 'react'

export interface PlayerProps {
  name: string
  symbol: string
}

const Player = ({name, symbol}: PlayerProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false)

  const onClickHandler = () => {
    setIsEditing(true)
  }

  return (
    <li>
      <span className="player">
        {isEditing ? <input  type="text" required /> : <span className="player-name">{name}</span>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={onClickHandler}>Edit</button>
    </li>
  )
}


export default Player
