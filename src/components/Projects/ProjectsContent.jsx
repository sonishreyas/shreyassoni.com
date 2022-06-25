import { ProjectCard } from "./ProjectCard";

export const ProjectsContent = () => {
	return (
		<main className="main flex-column justify-content-start align-start">
			<div className="homepage-heading p-5 my-5 w-100 border-bottom">
				<i className="heading-color">Projects</i>
			</div>
			<div className="my-10"></div>
			<ProjectCard />
		</main>
	);
};
