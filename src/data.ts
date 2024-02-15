import { Link } from './types/Link';
import { SectionProps } from './types/SectionProps';

export const sections: SectionProps[] = [
	{
		title: 'WELCOME TO YEETER!',
		subtitles: ['The future of crowdfunding in the web3 space.'],
		contents: [
			'Where every campaign is a step towards building a transparent, accountable, and scam-free crypto world. With Yeeter, launching your project means starting a new Moloch DAO—ensuring that every contributor becomes an integral part of your journey, without the fear of rug pulls.',
		],
	},
	{
		title: 'WTF IS A YEETER?',
		subtitles: ['Unique Accountability with Moloch DAO v3:', 'Start Your Campaign in Minutes:'],
		contents: [
			'Our platform leverages the power of Moloch DAO v3 contracts, featuring a clear distinction between voting shares for decision-making and loot shares for economic interest. Supporters can "yeet" funds into your project, receiving loot shares and the option to "ragequit" if the project doesn\'t follow through, protecting everyone involved.',
			"Launching your project with Yeeter is as simple as it gets. Just provide your project's name, team members, campaign duration, fundraising goal, and the minimum contribution. By initiating a Yeeter campaign, you're not just raising funds; you're creating a new DAO governed by your team and supported by your community.",
		],
	},
	{
		title: 'PROVEN SUCCESS',
		subtitles: ['Real Impact, Real Projects:'],
		contents: [
			"From DAOhaus's own fundraising success to RaidBrood's decentralized beer brewing, Yeeter has already empowered projects to achieve their goals with the backing of their communities. Your project could be next.",
		],
	},
	{
		title: 'PURPOSE-DRIVEN ENGAGEMENT',
		subtitles: ['Built on Transparency:'],
		contents: [
			"Yeeter is more than a platform; it's a community. Operated by Bootleggers, part of the DAOhaus ecosystem, we make all our decisions in public, on-chain. Join our Discord to be part of the conversation and see governance in action.",
		],
	},
	{
		title: 'YEET THE FUTURE!',
		subtitles: ['Today and Tomorrow:', "Expand Your Project's Reach:"],
		contents: [
			'Built on the robust foundation of Moloch DAO contracts and the DAOhaus SDK, Yeeter is committed to integrating cutting-edge web3 functionalities, including Gitcoin Grant Stack and Hypercerts for public goods funding, and exploring collaborations with Hats Protocol and Smart Invoice for even greater security and utility.',
			"With plans to enhance in-app communications, activity tracking, and feedback mechanisms, we're making it easier for project teams to connect with their supporters, track progress, and fulfill commitments.",
		],
	},
	{
		title: 'LET’S FUCKING YEEEEEEEET!',
		subtitles: ['Start Your Yeeter Campaign Today:', 'Join a yeeter:'],
		contents: [
			'Transform how your project raises funds with unparalleled security, transparency, and community engagement. Launch your Yeeter campaign now.',
			'Be part of a project you believe in. Yeet funds into a campaign and take your place in a community driving real, positive change in the web3 space.',
		],
	},
	{
		title: 'LEARN MORE',
		subtitles: ['Dive deeper'],
		contents: [
			'into how Yeeter and Moloch DAO v3 are changing the crowdfunding landscape Visit our FAQ, join our Discord, or check out our on-chain decisions to see governance in action.',
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
