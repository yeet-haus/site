import { Link } from './types/Link';
import { SectionProps } from './types/SectionProps';

export const sections: SectionProps[] = [
  {
    title: '',
    subtitles: [
      "Raise funds with your community by accepting tokens in exchange for loot. Provide your project's name, team, campaign duration, and fundraising goals. Contributors automatically get shares in a DAO.",
    ],
    contents: [],
  },
  {
    title: 'Launch Project',
    subtitles: [''],
    contents: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi ipsum, finibus vel maximus ut, dignissim in arcu. Proin viverra purus lectus, eget aliquet leo commodo ut. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent bibendum, metus non fermentum vehicula, arcu ligula facilisis lorem, in hendrerit mauris tortor sollicitudin lectus.',
    ],
  },
  {
    title: 'Fund Treasury',
    subtitles: [''],
    contents: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi ipsum, finibus vel maximus ut, dignissim in arcu. Proin viverra purus lectus, eget aliquet leo commodo ut. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent bibendum, metus non fermentum vehicula, arcu ligula facilisis lorem, in hendrerit mauris tortor sollicitudin lectus.',
    ],
  },
  {
    title: 'Grow Community',
    subtitles: [''],
    contents: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi ipsum, finibus vel maximus ut, dignissim in arcu. Proin viverra purus lectus, eget aliquet leo commodo ut. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent bibendum, metus non fermentum vehicula, arcu ligula facilisis lorem, in hendrerit mauris tortor sollicitudin lectus.',
    ],
  },
];

export const links: Link[] = [
  { title: 'FAQ', link: '/faq', isExternal: false },
  { title: 'DOCS', link: 'http://yeet.haus/docs', isExternal: false },
  { title: 'DISCORD', link: 'https://discord.gg/rE33sawCMz', isExternal: true },
  {
    title: 'YEETER DAO',
    link: 'https://admin.daohaus.club/#/molochv3/0x5/0xb7c9ff471731237e0139e120361fbc2efc0068ee',
    isExternal: true,
  },
  { title: 'BOOTLEGGERS', link: 'https://bootleggers.wtf/', isExternal: true },
  { title: 'DAOHAUS', link: 'https://daohaus.club/', isExternal: true },
];
