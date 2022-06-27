import { EducationContent } from "components";
import { useDocumentTitle } from "hooks";

const Education = () => {
	useDocumentTitle("Education | Shreyas Soni");
	return <EducationContent />;
};

export { Education };
