import { v4 as uuid } from "uuid";

export const navData = [
	{
		id: uuid(),
		route: "/",
		name: "Home",
		icon: "fa-solid fa-house-chimney",
	},
	{
		id: uuid(),
		route: "/experience",
		name: "Experience",
		icon: "fa-solid fa-building",
	},
	{
		id: uuid(),
		route: "/projects",
		name: "Projects",
		icon: "fa-solid fa-bars-progress",
	},
	{
		id: uuid(),
		route: "/publications",
		name: "Publications",
		icon: "fa-solid fa-book",
	},
	{
		id: uuid(),
		route: "/blogs",
		name: "Blogs",
		icon: "fa-brands fa-blogger",
	},
	{
		id: uuid(),
		route: "/education",
		name: "Education",
		icon: "fa-solid fa-graduation-cap",
	},
];
