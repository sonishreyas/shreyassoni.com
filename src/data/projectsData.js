import { v4 as uuid } from "uuid";
export const projects = [
	{
		_id: uuid(),
		title: "Ripple Social",
		description: "Ripple is a social media app.",
		techStack: [
			"ReactJS",
			"Redux Toolkit",
			"Firebase",
			"React Router v6",
			"HTML",
			"CSS",
			"RippleUI",
		],
		githubURL: "https://github.com/sonishreyas/ripple-social",
		liveURL: "https://ripple-social.netlify.app/",
		demoURL:
			"https://raw.githubusercontent.com/sonishreyas/shreyassoni.com/main/src/media/demo/ripple-social-preview.gif",
		key: "ripple-social",
	},
	{
		_id: uuid(),
		title: "Ripple Store",
		description: "Ripple Store is an e-commerce app.",
		techStack: [
			"ReactJS",
			"React Context API + useReducers",
			"Razorpay API",
			"React Router v6",
			"HTML",
			"CSS",
			"RippleUI",
		],
		githubURL: "https://github.com/sonishreyas/ripple-store-app",
		liveURL: "https://ripple-store-app.netlify.app/",
		demoURL:
			"https://raw.githubusercontent.com/sonishreyas/shreyassoni.com/main/src/media/demo/ripple-store-desktop-preview.gif",
		key: "ripple-store",
	},

	{
		_id: uuid(),
		title: "Ripple Play",
		description: "Ripple Play is a video library",
		techStack: [
			"ReactJS",
			"React Context API + useReducers",
			"React Router v6",
			"HTML",
			"CSS",
			"RippleUI",
		],
		githubURL: "https://github.com/sonishreyas/ripple-video-library",
		liveURL: "https://ripple-video-library.netlify.app/",
		demoURL:
			"https://raw.githubusercontent.com/sonishreyas/shreyassoni.com/main/src/media/demo/ripple-social-preview.gif",
		key: "ripple-play",
	},
	{
		_id: uuid(),
		title: "Ripple Quiz",
		description: "Ripple Quiz is a fun quiz app",
		techStack: [
			"TypeScript",
			"ReactJS",
			"React Context API + useReducers",
			"React Router v6",
			"HTML",
			"CSS",
			"RippleUI",
		],
		githubURL: "https://github.com/sonishreyas/ripple-quiz-app",
		liveURL: "https://ripple-quiz-app.netlify.app/",
		demoURL:
			"https://raw.githubusercontent.com/sonishreyas/shreyassoni.com/main/src/media/demo/ripple-quiz-app-desktop-preview.gif",
		key: "ripple-quiz",
	},
	{
		_id: uuid(),
		title: "Ripple UI",
		description: "Ripple UI is a minimal, customizable component library",
		techStack: ["HTML", "CSS", "JavaScript"],
		githubURL: "https://github.com/sonishreyas/ripple-ui",
		liveURL: "https://ripple-ui.netlify.app/",
		demoURL:
			"https://raw.githubusercontent.com/sonishreyas/shreyassoni.com/main/src/media/demo/ripple-ui-preview-desktop.gif",
		key: "ripple-ui",
	},
];
