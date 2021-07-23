import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  FUJI = 43113,
  AVALANCHE = 43114
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0x8d375aEF8FDe14951b9B3B169A0E02f31f1634D2',
  [ChainId.AVALANCHE]: '0x7aA32b4C676B2C99F28dD257741c5cFAF1cF3354'
}

export const INIT_CODE_HASH: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0x70b87c353c4c3fc263074ac4cd6669c4f67dffaf7638b82430aca673a6b2ae88', //init code pair hash from factory
  [ChainId.AVALANCHE]: '0xe1e9461caebef1b14301d343fb06be84a6abb3f69f4fbb98f81f45bfe14b165d'
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
