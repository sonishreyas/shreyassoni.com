import { HomeContent } from "components";
import { useDocumentTitle } from "hooks";

const Home = () => {
	useDocumentTitle("Home | Shreyas Soni");
	return <HomeContent />;
};

export { Home };
