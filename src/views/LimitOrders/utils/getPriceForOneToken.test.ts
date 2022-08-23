import { JSBI, Token, TokenAmount } from '@danielvindax/spurdexswap-sdk'
import getPriceForOneToken from './getPriceForOneToken'

const SPDX = new Token(13308, '0x0C609476442DC803721BD8F697609050CBbe814E', 18, 'SPDX', 'spurdexoken')
const CUSD = new Token(13308, '0xb30ebc0Ec978472B4a500a717880fE4D8f8c3288', 18, 'CUSD', 'Binance USD')
const DOGE = new Token(13308, '0xbA2aE424d960c26247Dd6c32edC70B295c744C43', 8, 'DOGE', 'Binance-Peg Dogecoin')

const EIGHT_DECIMALS = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(8))
const EIGHTEEN_DECIMALS = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(18))
const ZERO = JSBI.multiply(JSBI.BigInt(0), EIGHTEEN_DECIMALS)
const ONE = JSBI.multiply(JSBI.BigInt(1), EIGHTEEN_DECIMALS)
const ONE_EIGHT_DEC = JSBI.multiply(JSBI.BigInt(1), EIGHT_DECIMALS)
const FIVE = JSBI.multiply(JSBI.BigInt(5), EIGHTEEN_DECIMALS)
const FIVE_EIGHT_DEC = JSBI.multiply(JSBI.BigInt(5), EIGHT_DECIMALS)

describe('limitOrders/utils/getPriceForOneToken', () => {
  describe.each([
    [new TokenAmount(SPDX, ONE), new TokenAmount(CUSD, ONE), '1'],
    [new TokenAmount(SPDX, FIVE), new TokenAmount(CUSD, FIVE), '1'],
    [new TokenAmount(SPDX, ONE), new TokenAmount(CUSD, FIVE), '5'],
    [new TokenAmount(SPDX, FIVE), new TokenAmount(CUSD, ONE), '0.2'],
    [new TokenAmount(DOGE, ONE_EIGHT_DEC), new TokenAmount(CUSD, ONE), '1'],
    [new TokenAmount(DOGE, FIVE_EIGHT_DEC), new TokenAmount(CUSD, FIVE), '1'],
    [new TokenAmount(DOGE, ONE_EIGHT_DEC), new TokenAmount(CUSD, FIVE), '5'],
    [new TokenAmount(DOGE, FIVE_EIGHT_DEC), new TokenAmount(CUSD, ONE), '0.2'],
    [new TokenAmount(SPDX, ZERO), new TokenAmount(CUSD, ONE), undefined],
    [new TokenAmount(SPDX, ONE), new TokenAmount(CUSD, ZERO), undefined],
  ])(`returns correct price`, (input, output, expected) => {
    it(`for ${input.toSignificant(6)} ${input.currency.symbol} -> ${output.toSignificant(6)} ${
      output.currency.symbol
    }`, () => {
      const price = getPriceForOneToken(input, output)
      expect(price?.toSignificant(6)).toBe(expected)
    })
  })
})
