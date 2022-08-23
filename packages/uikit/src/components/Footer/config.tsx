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
    href: "https://facebook.com/spurdex"
  },
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/spurdex",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    items: [
      {
        label: "English",
        href: "https://t.me/spurdex",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/SpurDexIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/SpurDex_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/SpurDexVN",
      },
      {
        label: "Italiano",
        href: "https://t.me/SpurDex_ita",
      },
      {
        label: "русский",
        href: "https://t.me/SpurDex_ru",
      },
      {
        label: "Türkiye",
        href: "https://t.me/SpurDexturkiye",
      },
      {
        label: "Português",
        href: "https://t.me/SpurDexPortuguese",
      },
      {
        label: "Español",
        href: "https://t.me/SpurDexEs",
      },
      {
        label: "日本語",
        href: "https://t.me/SpurDexjp",
      },
      {
        label: "Français",
        href: "https://t.me/SpurDexfr",
      },
      {
        label: "Deutsch",
        href: "https://t.me/SpurDex_DE",
      },
      {
        label: "Filipino",
        href: "https://t.me/SpurDex_Ph",
      },
      {
        label: "ქართული ენა",
        href: "https://t.me/SpurDexGeorgia",
      },
      {
        label: "Announcements",
        href: "https://t.me/SpurDexAnn",
      },
    ],
  },
  {
    label: "Instagram",
    icon: InstagramIcon,
    href: "https://instagram.com/SpurDex_official",
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
