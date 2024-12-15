import { SymbolType } from './symbol-type.ts'
import { Square } from './square.ts'

export interface GameTurn {
  symbol: SymbolType,
  square : Square
}
