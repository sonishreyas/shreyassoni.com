import { ProjectCard } from "./ProjectCard";

export const ProjectsContent = () => {
	return (
		<main className="main flex-column justify-content-start align-start">
			<div className="homepage-heading border-bottom p-5 my-5 w-100 text-shadow box-shadow">
				Projects
			</div>
			<div className="my-10"></div>
			<ProjectCard />
		</main>
	);
};
