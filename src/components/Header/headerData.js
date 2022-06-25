import { v4 as uuid } from "uuid";

export const headerData = [
	{
		id: uuid(),
		route: "/",
		name: "Home",
	},
	{
		id: uuid(),
		route: "/experience",
		name: "Experience",
	},
	{
		id: uuid(),
		route: "/projects",
		name: "Projects",
	},
	{
		id: uuid(),
		route: "/publications",
		name: "Publications",
	},
	{
		id: uuid(),
		route: "/blogs",
		name: "Blogs",
	},
];
