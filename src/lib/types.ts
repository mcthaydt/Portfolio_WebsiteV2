// types.ts

export interface BusinessCardInfo {
  firstName: string;
  lastName: string;
  title: string;
  role1: string;
  role2: string;
  socialHandle: string;
  workInquiries: string;
  projectName: string;
  projectLink: string;
  startDate: Date;
}

export interface HomelabLink {
	title: string;
	url: string;
}

export interface PortfolioLayer1Data {
	headline: string;
	imageUrl: string;
	imageAlt: string;
	homelabTitle: string;
	homelabDescription: string;
	videoUrl: string;
	tags: string[];
  homelabLinks: HomelabLink[];
}

export interface Project {
	title: string;
	description: string;
	video: string;
	sourceCode?: string;
	liveProject?: string;
	tags?: string[];
}

export interface ExtrasBlock {
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface FooterInfo {
  mainText: string;
  links: FooterLink[];
  endingMessage: string;
}

export interface FooterLink {
  label: 'LinkedIn' | 'GitHub' | 'Twitter' | 'Email';
  href: string;
}

