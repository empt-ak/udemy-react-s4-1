import { FormEvent, useState } from 'react'

export interface PlayerProps {
  initialName: string
  symbol: string
}

const Player = ({ initialName, symbol }: PlayerProps) => {
  const [name, setName] = useState<string>(initialName)

  const [isEditing, setIsEditing] = useState<boolean>(false)

  const onClickHandler = () => {
    setIsEditing(previous => !previous)
  }

  const onNameChangeHandler = (x: FormEvent<HTMLInputElement>) => {
    setName(x.currentTarget.value)
  }

  return (
    <li>
      <span className="player">
        {isEditing
          ? <input type="text" required value={name} onChange={onNameChangeHandler} />
          : <span className="player-name">{name}</span>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={onClickHandler}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}


export default Player
