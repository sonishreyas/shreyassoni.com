import { projectsDetailsData } from "data";
import ReactPlayer from "react-player";
import { useParams } from "react-router";

export const ProjectsDetails = () => {
	const { projectKey } = useParams();
	const { title, description, techStack, githubURL, liveURL, demoURL } =
		projectsDetailsData[projectKey];
	return (
		<main className="main flex-column justify-content-start align-start">
			<div className="homepage-heading p-5 my-5 w-100 border-bottom">
				<i className="heading-color">
					{title.split(" ")[0]}{" "}
					<i className="text-cta-color">{title.split(" ")[1]}</i>
				</i>
			</div>
			<div className="my-10"></div>
			<article className="flex-column w-100 justidy-content-start align-start">
				<ReactPlayer url={demoURL} controls={true} />
			</article>
		</main>
	);
};
