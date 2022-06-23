import { Home, PageNotFound } from "pages";
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="*" element={<PageNotFound />} />
		</Routes>
	);
};

export { AppRoutes };
