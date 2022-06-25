import { BlogsContent } from "components";
import { useDocumentTitle } from "hooks";

const Blogs = () => {
	useDocumentTitle("Blogs | Shreyas Soni");
	return <BlogsContent />;
};

export { Blogs };
