import { v4 as uuid } from "uuid";
export const projects = [
	{
		_id: uuid(),
		title: "Ripple Social",
		description: "Ripple is a social media app",
		techStack: ["ReactJS", "Redux Toolkit", "Firebase"],
		githubURL: "https://github.com/sonishreyas/ripple-social",
		liveURL: "https://ripple-social.netlify.app/",
		demoURL:
			"https://raw.githubusercontent.com/sonishreyas/shreyassoni.com/feat/react-portfolio/src/media/demo/ripple-social-preview.gif",
	},
];
