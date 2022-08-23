import { JSBI, Price, Token, Percent } from '@danielvindax/spurdexswap-sdk'
import getRatePercentageDifference from './getRatePercentageDifference'

const SPDX = new Token(13308, '0x0C609476442DC803721BD8F697609050CBbe814E', 18, 'SPDX', 'spurdex Token')
const CUSD = new Token(13308, '0xb30ebc0Ec978472B4a500a717880fE4D8f8c3288', 18, 'CUSD', 'Binance USD')
const DOGE = new Token(13308, '0xbA2aE424d960c26247Dd6c32edC70B295c744C43', 8, 'DOGE', 'Binance-Peg Dogecoin')

const EIGHTEEN_DECIMALS = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(18))
const FIVE = JSBI.multiply(JSBI.BigInt(5), EIGHTEEN_DECIMALS)
const TEN = JSBI.multiply(JSBI.BigInt(10), EIGHTEEN_DECIMALS)
const FIFTEEN = JSBI.multiply(JSBI.BigInt(15), EIGHTEEN_DECIMALS)

describe('limitOrders/utils/getRatePercentageDifference', () => {
  describe('18 decimal tokens', () => {
    const marketPrice = new Price(SPDX, CUSD, EIGHTEEN_DECIMALS, TEN) // 10 CUSD per 1 CAKE
    it('returns correct positive percentage', () => {
      const price = new Price(SPDX, CUSD, EIGHTEEN_DECIMALS, FIFTEEN) // 15 CUSD per 1 CAKE
      const rate = getRatePercentageDifference(marketPrice, price)
      const expectedRate = new Percent(50, 100)
      expect(expectedRate.equalTo(rate)).toBe(true)
    })
    it('returns correct negative percentage', () => {
      const price = new Price(SPDX, CUSD, EIGHTEEN_DECIMALS, FIVE) // 5 CUSD per 1 CAKE
      const rate = getRatePercentageDifference(marketPrice, price)
      const expectedRate = new Percent(-50, 100)
      expect(expectedRate.equalTo(rate)).toBe(true)
    })
    it('returns correct equal percentage', () => {
      const price = new Price(SPDX, CUSD, EIGHTEEN_DECIMALS, TEN) // 50 CUSD per 1 CAKE
      const rate = getRatePercentageDifference(marketPrice, price)
      const expectedRate = new Percent(0, 100)
      expect(expectedRate.equalTo(rate)).toBe(true)
    })
  })
  describe('18 decimal token and 8 decimal token', () => {
    const marketPrice = new Price(DOGE, CUSD, EIGHTEEN_DECIMALS, TEN) // 10 CUSD per 1 DOGE
    it('returns correct positive percentage', () => {
      const price = new Price(DOGE, CUSD, EIGHTEEN_DECIMALS, FIFTEEN) // 15 CUSD per 1 DOGE
      const rate = getRatePercentageDifference(marketPrice, price)
      const expectedRate = new Percent(50, 100)
      expect(expectedRate.equalTo(rate)).toBe(true)
    })
    it('returns correct negative percentage', () => {
      const price = new Price(DOGE, CUSD, EIGHTEEN_DECIMALS, FIVE) // 5 CUSD per 1 DOGE
      const rate = getRatePercentageDifference(marketPrice, price)
      const expectedRate = new Percent(-50, 100)
      expect(expectedRate.equalTo(rate)).toBe(true)
    })
    it('returns correct equal percentage', () => {
      const price = new Price(DOGE, CUSD, EIGHTEEN_DECIMALS, TEN) // 50 CUSD per 1 DOGE
      const rate = getRatePercentageDifference(marketPrice, price)
      const expectedRate = new Percent(0, 100)
      expect(expectedRate.equalTo(rate)).toBe(true)
    })
  })
  describe('gracefully handles undefined arguments', () => {
    it('with undefined market price', () => {
      const price = new Price(DOGE, CUSD, EIGHTEEN_DECIMALS, FIFTEEN) // 15 CUSD per 1 DOGE
      const rate = getRatePercentageDifference(undefined, price)
      expect(rate).toBeUndefined()
    })
    it('with undefined price', () => {
      const marketPrice = new Price(DOGE, CUSD, EIGHTEEN_DECIMALS, TEN) // 10 CUSD per 1 DOGE
      const rate = getRatePercentageDifference(marketPrice, undefined)
      expect(rate).toBeUndefined()
    })
    it('with both prices undefined', () => {
      const rate = getRatePercentageDifference(undefined, undefined)
      expect(rate).toBeUndefined()
    })
  })
})
