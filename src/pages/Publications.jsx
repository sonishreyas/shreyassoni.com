import { PublicationsContent } from "components";
import { useDocumentTitle } from "hooks";

const Publications = () => {
	useDocumentTitle("Publications | Shreyas Soni");
	return <PublicationsContent />;
};

export { Publications };
