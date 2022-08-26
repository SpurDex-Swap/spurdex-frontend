import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { FacebookIcon, TwitterIcon, TelegramIcon, InstagramIcon, YoutubeIcon } from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.spurdex.exchange/contact-us",
      },
      {
        label: "Blog",
        href: "https://medium.com/spurdex",
      },
      {
        label: "Community",
        href: "https://docs.spurdex.exchange/contact-us/telegram",
      },
      {
        label: "SPDX",
        href: "https://docs.spurdex.exchange/tokenomics/spdx",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://spurdex.creator-spring.com/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.spurdex.exchange/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.spurdex.exchange/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.spurdex.exchange/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/spurdex",
      },
      {
        label: "Documentation",
        href: "https://docs.spurdex.exchange",
      },
      {
        label: "Bug Bounty",
        href: "https://app.gitbook.com/@spurdex-1/s/spurdex/code/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.spurdex.exchange/help/faq#is-spurdex-safe-has-spurdex-been-audited",
      },
      {
        label: "Careers",
        href: "https://docs.spurdex.exchange/hiring/become-a-chef",
      },
    ],
  },
];

export const socials = [
  {
    label: "Facebook",
    icon: FacebookIcon,
    href: "https://web.facebook.com/spurdex"
  },
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/SPURDEX1",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    href: "https://t.me/spurdexgroup",
  },
  {
    label: "Instagram",
    icon: InstagramIcon,
    href: "https://www.instagram.com/spur_dex/",
  },
  {
    label: "Youtube",
    icon: YoutubeIcon,
    href: "https://youtube.com/spurdex/",
  }
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
