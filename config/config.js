
import profile from './profile.png';
import { faGlobe, faLinkedIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Karim",
	links: [
		{
			title: "Projects",
			link: "/projects",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hey, I'm Karim",
	description: "A Software Developer creating video games in Unity.",
	image: profile.src,
	buttons: [
		{
			title: "Resume",
			link: "https://resume.io/r/FE1q6AxWO",
			isPrimary: true,
		},
		{
			title: "LinkedIn",
			link: "https://www.linkedin.com/in/karim-ramy-boshra-botros-643163275/",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"I graduated from Concordia University at Montreal in 2023 with a bachelor's degree in Computer Science. I aspire to become a game developer who can create worlds and experiences for players to enjoy.",
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Unity Game Development",
			description: "I use Unity to make small-scale video games.",
			icons: null,
		},
		{
			title: "Software Development",
			description: "I create robust applications using Java and C++.",
			icons: null,
		}
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Exodus",
			description: "A 2.5D dungeon crawler made in Unity for a university course, made in conjunction with 2 other team members.",
			icons: [
				{
					icon: faGithub,
					link: "/projects",
				},
				{
					icon: faGithub,
					link: "https://github.com/karimboshra/exodus",
				},
			]
		},
		{
			title: "Billiards",
			description: "A physics-based simulation of billiards made using Java. Built on a custom physics engine with the purpose of demonstrating what we've learned in cegep relating to Physics.",
			icons: [
				{
					icon: faGithub,
					link: "/projects",
				},
				{
					icon: faGithub,
					link: "https://github.com/karimboshra/billiards",
				},
			]
		},
	],
}

export const contact = {
	title: "Get in touch",
	description: "Feel free to reach out directly by email at karimboshra@yahoo.com.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:karimboshra@yahoo.com",
			isPrimary: true,
		},
		{
			title: "LinkedIn",
			link: "https://www.linkedin.com/in/karim-ramy-boshra-botros-643163275/",
			isPrimary: false,
		},
		{
			title: "Resume",
			link: "https://resume.io/r/FE1q6AxWO",
			isPrimary: false,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Software Developer | Unity | C++ | Java",
	description: "I graduated from Concordia University at Montreal in 2023 with a bachelor's degree in Computer Science. I aspire to become a game developer who can create worlds and experiences for players to enjoy.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@karimboshra",
	description: "Software Developer | Unity | C++ | Java",
	cards: [
		{
			title: "My GitHub",
			link: "https://github.com/karimboshra/",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/karim-ramy-boshra-botros-643163275/",
		},
	]
}