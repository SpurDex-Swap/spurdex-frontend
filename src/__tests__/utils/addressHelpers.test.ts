import { getAddress } from 'utils/addressHelpers'

describe('getAddress', () => {
  const address = {
    13308: '0x0C609476442DC803721BD8F697609050CBbe814E',
    40627: '0xfdA0F4361258dFD4Cc7f936285874605e46a490D',
  }

  it(`get address for mainnet (chainId 13308)`, () => {
    process.env.NEXT_PUBLIC_CHAIN_ID = '13308'
    const expected = address[13308]
    expect(getAddress(address)).toEqual(expected)
  })
  it(`get address for testnet (chainId 40627)`, () => {
    process.env.NEXT_PUBLIC_CHAIN_ID = '40627'
    const expected = address[40627]
    expect(getAddress(address)).toEqual(expected)
  })
  it(`get address for any other network (chainId 31337)`, () => {
    process.env.NEXT_PUBLIC_CHAIN_ID = '31337'
    const expected = address[13308]
    expect(getAddress(address)).toEqual(expected)
  })
})
