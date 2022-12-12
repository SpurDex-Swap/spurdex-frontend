const getTokenLogoURL = (address: string) => {
  // `https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/${address}/logo.png`
  return `images/tokens/${address}.png`
}

export default getTokenLogoURL
