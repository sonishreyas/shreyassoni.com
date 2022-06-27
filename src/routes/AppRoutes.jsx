import {
	Blogs,
	Education,
	Experience,
	Home,
	PageNotFound,
	Projects,
	ProjectsDetailsPage,
	Publications,
} from "pages";
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/projects/:projectKey" element={<ProjectsDetailsPage />} />
			<Route path="/experience" element={<Experience />} />
			<Route path="/blogs" element={<Blogs />} />
			<Route path="/publications" element={<Publications />} />
			<Route path="/education" element={<Education />} />
			<Route path="*" element={<PageNotFound />} />
		</Routes>
	);
};

export { AppRoutes };
