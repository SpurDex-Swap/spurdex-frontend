import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'
import { CHAIN_ID } from './networks'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */
  {
    pid: 0,
    v1pid: 0,
    lpSymbol: 'SPDX',
    lpAddresses: {
      40627: '0xfdA0F4361258dFD4Cc7f936285874605e46a490D',
      13308: '0x0C609476442DC803721BD8F697609050CBbe814E',
    },
    token: serializedTokens.syrup,
    quoteToken: serializedTokens.wcredit,
  },
  {
    pid: 5,
    // v1pid: 1,
    lpSymbol: 'SPDX-CREDIT LP',
    lpAddresses: {
      40627: '0x04a87d67A487C38089736C738aEBc13D6B981c76',
      13308: '0xD5998D3502947092ED704A24a620f61136A8BF2f',
    },
    token: serializedTokens.spdx,
    quoteToken: serializedTokens.wcredit,
  },
  {
    pid: 3,
    // v1pid: 2,
    lpSymbol: 'CUSD-CREDIT LP',
    lpAddresses: {
      40627: '0xc8EdeC730CC6aBb57c213c840633071164357357',
      13308: '0x0a5f83aF1524936029d5F94Da306E62cbF851008',
    },
    token: serializedTokens.cusd,
    quoteToken: serializedTokens.wcredit,
  },
  //    * V3 by order of release (some may be out of PID order due to multiplier boost)
  {
    pid: 6,
    // v1pid: 3,
    lpSymbol: 'USDT-CREDIT LP',
    lpAddresses: {
      40627: '0x0DC8b02c393B3FD37dA5B3944Ad9d301377C5849',
      13308: '0x228c1F6daD6e2d2f82F9C048fe3F6249B4dFE2cE',
    },
    token: serializedTokens.usdt,
    quoteToken: serializedTokens.wcredit,
  },
  {
    pid: 7,
    lpSymbol: '	REDEFi-CREDIT LP',
    lpAddresses: {
      40627: '',
      13308: '0x4E00b29282f81603f6D55c34ecE5fEDa3B98a702',
    },
    token: serializedTokens.redefi,
    quoteToken: serializedTokens.wcredit,
  },
  // {
  //   pid: 5,
  //   lpSymbol: 'ETH-CREDIT LP',
  //   lpAddresses: {
  //     40627: '',
  //     13308: '0xD30916af2D1E8F5da477057A95958e724528bcCa',
  //   },
  //   token: serializedTokens.eth,
  //   quoteToken: serializedTokens.wcredit,
  // },
].filter((f) => !!f.lpAddresses[CHAIN_ID])

export default farms
