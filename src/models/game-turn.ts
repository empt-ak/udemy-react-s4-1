import { SymbolType } from './symbol-type.ts'

export interface GameTurn {
  symbol: SymbolType,
  square : {
    row: number
    col: number
  }
}
