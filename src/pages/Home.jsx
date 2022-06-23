import { HomeContent } from "components";
import { useDocumentTitle } from "hooks";

const Home = () => {
	useDocumentTitle("Home");
	return <HomeContent />;
};

export { Home };
