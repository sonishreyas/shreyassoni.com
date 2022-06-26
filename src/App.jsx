import { Footer, Header, NavBar } from "components";
import { useNavbar } from "context";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { AppRoutes } from "./routes";

function App() {
	const { showNavbar, setShowNavbar } = useNavbar();
	const location = useLocation();

	useEffect(() => window.scrollTo(0, 0), []);
	useEffect(() => {
		setShowNavbar(false);
	}, [location]);
	return (
		<div className="grid-container">
			<Header />
			<AppRoutes />
			{showNavbar && <NavBar />}
			<Outlet />
			{location.pathname !== "/" && <Footer />}
		</div>
	);
}

export default App;
