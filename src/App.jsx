import { Footer, Header, NavBar } from "components";
import { useNavbar } from "context";
import { Outlet } from "react-router";
import { AppRoutes } from "./routes";

function App() {
	const { showNavbar } = useNavbar();
	return (
		<div className="grid-container">
			<Header />
			<AppRoutes />
			{showNavbar && <NavBar />}
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
