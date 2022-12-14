import { LinkExternal } from '@spurdex/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config = (t: ContextApi['t']) => {
  return [
    {
      title: t('I sold an NFT, where’s my CREDIT?'),
      description: [
        t(
          'Trades are settled in WCREDIT, which is a wrapped version of CREDIT used on CREDIT Smart Chain. That means that when you sell an item, WCREDIT is sent to your wallet instead of CREDIT.',
        ),
        t('You can instantly swap your WCREDIT for CREDIT with no trading fees on SpurDex.'),
      ],
    },
    {
      title: t('How can I list my NFT collection on the Market?'),
      description: [
        t('In Phase 2 of the NFT Marketplace, collections must be whitelisted before they may be listed.'),
        t('We are now accepting applications from NFT collection owners seeking to list their collections.'),
        <LinkExternal href="https://docs.spurdex.exchange/contact-us/nft-market-applications">
          {t('Please apply here')}
        </LinkExternal>,
      ],
    },
    {
      title: t('What are the fees?'),
      description: [
        t(
          '100% of all platform fees taken by SpurDex from sales are used to buy back and BURN SPDX tokens in our weekly SPDX burns.',
        ),
        t(
          'Platform fees: 2% is subtracted from NFT sales on the market. Subject to change.Collection fees: Additional fees may be taken by collection creators, once those collections are live. These will not contribute to the SPDX burns.',
        ),
      ],
    },
  ]
}

export default config
