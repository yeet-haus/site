import { Link } from './types/Link';
import { SectionProps } from './types/SectionProps';

export const sections: SectionProps[] = [
  {
    title: 'Launch Project',
    subtitles: [''],
    contents: [
      "Launching your project with Yeeter is simple. Provide your project's name, team members, campaign duration, fundraising goal, minimum contribution, and you're gtg.",
    ],
  },
  {
    title: 'Fund Treasury',
    subtitles: [''],
    contents: [
      'Funding your treasury with Yeeter is fast. Contributors yeet funds into your project, scoring loot and leveling up your capital formation game.',
    ],
  },
  {
    title: 'Protect Community',
    subtitles: [''],
    contents: [
      'Protecting your community with Yeeter is easy. Launching a project deploys a DAO governed by your team. Members retain exit rights to ragequit if you do not follow through.',
    ],
  },
];

export const answers: SectionProps[] = [
  {
    title: 'Why Unruggable?',
    subtitles: [''],
    contents: [
      'Every campaign is a step towards building a transparent, accountable, and scam-free crypto world. With Yeeter, launching your project means starting a new Moloch DAO—ensuring that every contributor becomes an integral part of your journey, without the fear of rug pulls.',
    ],
  },
  {
    title: 'What Settings?',
    subtitles: [''],
    contents: [
      'To make transforming your idea into a project on Yeeter effortless we make some assumptions. Your DAO is configured with a voting period of 12 hours and grace period of 6 hours ensuring swift decision-making. The minimum retention is 66% and the sponsor threshold is 1 voting token providing accessibility to all contributors. These settings are customizable with proposals after the DAO is summoned.',
    ],
  },
  {
    title: 'How Much?',
    subtitles: [''],
    contents: [
      "The Yeeter protocol fee is 3%. Yeeters receive the full amount of loot from their contribution. Fees in the network's native token are sent to the Yeeter safe. These funds are used to maintain and enhance the platfrom while suppoting the DAOhaus community.",
    ],
  },
  {
    title: 'Which Networks?',
    subtitles: [''],
    contents: [
      "The Yeeter v2 MVP was enabled by an $ARB grant. We are impressed by the Arbitrum Foundation's support for the DAO community and hope this tool encourages the proliferation of DAOs on Arbitrum. Yeeter is also available on Optimism, Base, Gnosis Chain, and ready for testing on Sepolia.",
    ],
  },
];

export const links: Link[] = [
  { title: 'FAQ', link: '/faq', isExternal: false },
  { title: 'DISCORD', link: 'https://discord.gg/rE33sawCMz', isExternal: true },
  {
    title: 'DAO',
    link: 'https://dao.yeet.haus/#/molochv3/0xa4b1/0x61fcfe0bfadc00a7ae7b3523ae4602ae373e62b9',
    isExternal: true,
  },
];
