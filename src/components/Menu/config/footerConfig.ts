import { FooterLinkType } from '@spurdex/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.spurdex.exchange/contact-us',
        isHighlighted: true,
      },
      {
        label: t('Brand'),
        href: 'https://docs.spurdex.exchange/brand',
      },
      {
        label: t('Blog'),
        href: 'https://medium.com/spurdex',
      },
      {
        label: t('Community'),
        href: 'https://docs.spurdex.exchange/contact-us/telegram',
      },
      {
        label: t('Litepaper'),
        href: 'https://v2litepaper.spurdex.exchange/',
      },
      {
        label: '—',
      },
      {
        label: t('Online Store'),
        href: 'https://spurdex.creator-spring.com/',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://docs.spurdex.exchange/contact-us/customer-support',
      },
      {
        label: t('Troubleshooting'),
        href: 'https://docs.spurdex.exchange/help/troubleshooting',
      },
      {
        label: t('Guides'),
        href: 'https://docs.spurdex.exchange/get-started',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/',
      },
      {
        label: t('Documentation'),
        href: 'https://docs.spurdex.exchange',
      },
      {
        label: t('Bug Bounty'),
        href: 'https://docs.spurdex.exchange/code/bug-bounty',
      },
      {
        label: t('Audits'),
        href: 'https://docs.spurdex.exchange/help/faq',
      },
      {
        label: t('Careers'),
        href: 'https://docs.spurdex.exchange/hiring/become-a-chef',
      },
    ],
  },
]
