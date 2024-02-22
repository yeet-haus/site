import { Link } from './types/Link';
import { SectionProps } from './types/SectionProps';

export const sections: SectionProps[] = [
  {
    title: 'Launch Project',
    subtitles: [''],
    contents: [
      "Transform how your project raises funds with unprecedented ease and efficiency. Launching your project with Yeeter is as simple as it gets. Provide your project's name, team members, campaign duration, fundraising goal, and the minimum contribution, and you're gtg.",
    ],
  },
  {
    title: 'Fund Treasury',
    subtitles: [''],
    contents: [
      "Your project's treasury is safeguarded by the battle-tested Moloch DAO v3 contracts, ensuring unparalleled security and transparency. Contributors yeet funds into your project, receiving loot shares and the option to ragequit if the project doesn't follow through, protecting everyone involved.",
    ],
  },
  {
    title: 'Grow Community',
    subtitles: [''],
    contents: [
      "With Yeeter, you're not just raising funds; you're cultivating a community of individuals passionate about your project's success. Initiating a Yeeter campaign summons a new DAO governed by your team and supported by your contributors. We make it easy for project teams to connect with their supporters, track progress, and fulfill commitments. Join our Discord to build a future where purpose-driven initiatives thrive.",
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
