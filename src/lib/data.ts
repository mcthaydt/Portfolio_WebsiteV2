import type { BusinessCardInfo, ExtrasBlock, FooterInfo, PortfolioLayer1Data, Project } from '../lib/types';

export const businessCardInfo: BusinessCardInfo = {
	firstName: 'Dawson',
	lastName: 'McThay',
	title: 'IT Analyst',
	role1: 'Game Developer',
	role2: 'Gen-Z Indie Hacker',
	socialHandle: '@mcthaydt',
	workInquiries: 'Work with me?',
	projectName: 'OSAS',
	projectLink: 'https://testing-osas.netlify.app/',
	startDate: new Date(2023, 8, 1)
};


export const certs = [
	'In Progress: CompTIA Network+',
	'Future: CompTIA Security+',
	'Future: AWS Cloud Practitioner',
	'Future: ITIL Foundation',
	'Future: LPI Linux Essentials',
	'Future: CCNA',
	'Future: CISSP',
	'Future: PMI CAPM',
	'Future: AZ-900'
];

export const portfolioLayer1Data: PortfolioLayer1Data = {
	headline:
		'Optimizing IT support through automation: enhancing efficiency, resolving issues, and elevating user experiences across platforms.',
	imageUrl: 'Picture.JPG',
	imageAlt: 'IT Support Automation',
	homelabTitle: 'Homelab',
	homelabDescription:
		'Designed and implemented a comprehensive homelab environment to simulate enterprise-level infrastructure, featuring virtualization, networking, and storage solutions for continuous skill development and real-world problem-solving.',
	videoUrl: 'Homelab Video.mp4',
	tags: ['Virtualization', 'Linux (Ubuntu)'],
	homelabLinks: [
		{
			title: 'Linux VM (on my M1 Mac) - October 2024',
			url: ''
		},
	]
};

export const portfolioLayer3Data: Project[] = [
	{
		title: 'League Highlights',
		description:
			'Capture and share your best League of Legends moments - also featuring a Python CLI for cloud-based storage uploads.',
		video: 'League.mp4',
		sourceCode: '',
		liveProject: '',
		tags: [
			'SvelteKit',
			'TypeScript',
			'TailwindCSS',
			'Python CLI',
			'Supabase (PostgreSQL)',
			'AWS S3',
			'Kinde API'
		]
	},
	{
		title: 'IT Blog',
		description: 'Discussing my experiences and insights as a IT professional.',
		video: 'Blog.mp4',
		liveProject: ''
	},
	{
		title: 'OSAS - Open Source Asset Store',
		description:
			'A serverless community-driven platform for sharing game assets - hosted on Linux virtual machine.',
		video: 'OSAS.mp4',
		sourceCode: 'https://github.com/mcthaydt/testing_osas',
		liveProject: 'https://osas.dev',
		tags: [
			'SvelteKit',
			'TypeScript',
			'TailwindCSS',
			'Supabase (PostgreSQL)',
			'AWS S3',
			'Linux VM (Apache)',
			'Kinde API',
			'Stripe API'
		]
	}
];

export const extrasBlock: ExtrasBlock[] = [
	{
		title: 'My Games',
		description: 'SOS Interactive - Making systemic arthouse games.',
		image: 'Games.jpeg',
		link: 'https://tropicalsos.itch.io/'
	},
	{
		title: 'My Apps',
		description: 'SOS Holdings Company - Making niche micro-saases.',
		image: 'Apps.png',
		link: 'https://linktr.ee/mcthaydt'
	},
	{
		title: 'My Non-Profit Organization',
		description: 'TropicalSOS - Pairing game studios with freelance developers and students.',
		image: 'Nonprofit.jpeg',
		link: 'https://tropicalsos-website.netlify.app/'
	},
	{
		title: 'My Consulting Services',
		description: 'Helping game developers and product teams.',
		image: 'Consulting.jpeg',
		link: 'https://mcthaydt.trafft.com/'
	}
];

export const footerInfo: FooterInfo = {
	mainText:
		'Dawson is an experienced Service Desk Analyst specializing in automation and delivering exceptional customer support. He excels in troubleshooting diverse IT systems, managing high-volume support requests, and maintaining critical technical infrastructure. With a strong background in communication and problem-solving, Dawson works effectively with cross-functional teams to streamline IT operations and enhance user experiences across multiple platforms and technologies.',
	links: [
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/dawsonmcthay/' },
		{ label: 'GitHub', href: 'https://github.com/mcthaydt' },
		{ label: 'Twitter', href: 'https://x.com/mcthaydt' },
		{ label: 'Email', href: 'mailto:mcthaydawson@gmail.com' }
	],
	endingMessage: "Let's chat 👋"
};
