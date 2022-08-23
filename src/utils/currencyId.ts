import { Currency, ETHER, Token } from '@danielvindax/spurdexswap-sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'CREDIT'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}

export default currencyId
