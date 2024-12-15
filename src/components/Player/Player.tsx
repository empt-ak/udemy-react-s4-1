import { FormEvent, useState } from 'react'
import { SymbolType } from '../../models/symbol-type.ts'

export interface PlayerProps {
  initialName: string
  symbol: SymbolType
  isActive: boolean
}

const Player = ({ initialName, symbol, isActive }: PlayerProps) => {
  const [name, setName] = useState<string>(initialName)

  const [isEditing, setIsEditing] = useState<boolean>(false)

  const onClickHandler = () => {
    setIsEditing(previous => !previous)
  }

  const onNameChangeHandler = (x: FormEvent<HTMLInputElement>) => {
    setName(x.currentTarget.value)
  }

  return (
    <li className={isActive ? 'active' : undefined}>
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
