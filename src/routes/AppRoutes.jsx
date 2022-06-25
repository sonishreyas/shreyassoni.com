import {
	Blogs,
	Experience,
	Home,
	PageNotFound,
	Projects,
	Publications,
} from "pages";
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/experience" element={<Experience />} />
			<Route path="/blogs" element={<Blogs />} />
			<Route path="/publications" element={<Publications />} />
			<Route path="*" element={<PageNotFound />} />
		</Routes>
	);
};

export { AppRoutes };
