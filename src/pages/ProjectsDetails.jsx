import { ProjectsDetails } from "components";
import { useDocumentTitle } from "hooks";

const ProjectsDetailsPage = () => {
	useDocumentTitle("Project Detail | Shreyas Soni");
	return <ProjectsDetails />;
};

export { ProjectsDetailsPage };
