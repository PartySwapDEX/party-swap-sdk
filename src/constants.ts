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
  [ChainId.FUJI]: '0x146484CA5CAE42c58632817D74b5930172a4e044',
  [ChainId.AVALANCHE]: '0xd7BB1DcDF30bDCf88E4AEE6f5B29fd8dB6bfbFf6'
}

export const INIT_CODE_HASH: { [chainId in ChainId]: string } = {
  [ChainId.FUJI]: '0x1cb42ce668d8169bbcb5133235f4e3555e827bdcb65fcd07d3cb2f636c7b5dde',
  [ChainId.AVALANCHE]: '0x6a724fbf1bda25096504385dba68554a1569e634dacd57b788009cf25173ded7'
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
