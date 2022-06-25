import { ProjectsContent } from "components";
import { useDocumentTitle } from "hooks";

const Projects = () => {
	useDocumentTitle("Projects | Shreyas Soni");
	return <ProjectsContent />;
};

export { Projects };
