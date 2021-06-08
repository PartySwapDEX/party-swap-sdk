import { ChainId, WAVAX, Token, Fetcher } from '../src'

// TODO: replace the provider in these tests
describe.skip('data', () => {
  it('Token', async () => {
    const token = await Fetcher.fetchTokenData(ChainId.AVALANCHE, '0x8cE2Dee54bB9921a2AE0A63dBb2DF8eD88B91dD9') // AAVE
    expect(token.decimals).toEqual(18)
  })

  it('Token:CACHE', async () => {
    const token = await Fetcher.fetchTokenData(ChainId.AVALANCHE, '0x53CEedB4f6f277edfDDEdB91373B044FE6AB5958') // COMP
    expect(token.decimals).toEqual(9)
  })

  it('Pair', async () => {
    const token = new Token(ChainId.AVALANCHE, '0x8cE2Dee54bB9921a2AE0A63dBb2DF8eD88B91dD9', 18) // AAVE
    const pair = await Fetcher.fetchPairData(WAVAX[ChainId.AVALANCHE], token)
    expect(pair.liquidityToken.address).toEqual('0xd7BB1DcDF30bDCf88E4AEE6f5B29fd8dB6bfbFf6')
  })
})
