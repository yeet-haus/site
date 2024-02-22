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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi ipsum, finibus vel maximus ut, dignissim in arcu. Proin viverra purus lectus, eget aliquet leo commodo ut. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent bibendum, metus non fermentum vehicula, arcu ligula facilisis lorem, in hendrerit mauris tortor sollicitudin lectus.',
    ],
  },
  {
    title: 'What Settings?',
    subtitles: [''],
    contents: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi ipsum, finibus vel maximus ut, dignissim in arcu. Proin viverra purus lectus, eget aliquet leo commodo ut. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent bibendum, metus non fermentum vehicula, arcu ligula facilisis lorem, in hendrerit mauris tortor sollicitudin lectus.',
    ],
  },
  {
    title: 'How Much?',
    subtitles: [''],
    contents: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi ipsum, finibus vel maximus ut, dignissim in arcu. Proin viverra purus lectus, eget aliquet leo commodo ut. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent bibendum, metus non fermentum vehicula, arcu ligula facilisis lorem, in hendrerit mauris tortor sollicitudin lectus.',
    ],
  },
  {
    title: 'Which Networks?',
    subtitles: [''],
    contents: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi ipsum, finibus vel maximus ut, dignissim in arcu. Proin viverra purus lectus, eget aliquet leo commodo ut. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent bibendum, metus non fermentum vehicula, arcu ligula facilisis lorem, in hendrerit mauris tortor sollicitudin lectus.',
    ],
  },
];

export const links: Link[] = [
  { title: 'FAQ', link: '/faq', isExternal: false },
  { title: 'DOCS', link: 'http://docs.yeet.haus', isExternal: true },
  { title: 'DISCORD', link: 'https://discord.gg/rE33sawCMz', isExternal: true },
  {
    title: 'DAO',
    link: 'https://dao.yeet.haus/#/molochv3/0xa4b1/0x61fcfe0bfadc00a7ae7b3523ae4602ae373e62b9',
    isExternal: true,
  },
];
