import { Experience, Home, PageNotFound, Projects } from "pages";
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/experience" element={<Experience />} />
			<Route path="*" element={<PageNotFound />} />
		</Routes>
	);
};

export { AppRoutes };
