import { projectsDetailsData } from "data";
import ReactPlayer from "react-player";
import { useParams } from "react-router";
import { v4 as uuid } from "uuid";
export const ProjectsDetails = () => {
	const { projectKey } = useParams();
	const {
		title,
		description,
		techStack,
		githubURL,
		liveURL,
		demoURL,
		features,
	} = projectsDetailsData[projectKey];
	return (
		<main className="main flex-column justify-content-start align-start">
			<div className="homepage-heading p-5 my-5 w-100 border-bottom">
				<i className="heading-color">
					{title.split(" ")[0]}{" "}
					<i className="text-cta-color">{title.split(" ")[1]}</i>
				</i>
			</div>
			<div className="my-5"></div>
			<article className="flex-column w-100 justify-content-start align-start">
				<article className="card-image-container flex-row justify-content-center align-center flex-wrap b-radius-2 w-100 p-5">
					<iframe
						src={demoURL}
						frameBorder="0"
						className="w-100 h-auto b-radius-2 detail-video-demo"
					></iframe>
				</article>
				<article className="card-image-container flex-column justify-content-center align-start flex-wrap b-radius-2 p-5 details-container w-100">
					<p className="py-5 h4">{description}</p>
					<h2 className="text-bold heading-color border-bottom w-100 my-5 py-5">
						Features
					</h2>
					<ul className="flex-column justify-content-start align-start">
						{features.map((item, index) => (
							<li className="h4 my-2 mx-10 text-limit" key={uuid()}>
								{item}
							</li>
						))}
					</ul>
					<h2 className="text-bold heading-color border-bottom w-100 my-5 py-5">
						Technology Stack
					</h2>
					<div className="flex-column justify-content-start align-start">
						<section className="flex-row justify-content-center align-center flex-wrap flex-gap-1">
							{techStack?.map((name) => (
								<section
									className="basic-chip secondary-chip-color"
									key={uuid()}
								>
									<p className="basic-chip-content p-2 h5">{name}</p>
								</section>
							))}
						</section>
					</div>
					<h2 className="text-bold heading-color border-bottom w-100 my-5 py-5"></h2>
					<section className="flex-row justify-content-center align-center py-5 flex-gap-1 flex-wrap">
						<a
							className="no-link-decoration primary-btn p-6 b-radius-4 flex-row justify-content-center align-center"
							href={githubURL}
							target="_blank"
						>
							View Source
						</a>
						<a
							className="no-link-decoration outline-btn p-6 b-radius-4 flex-row justify-content-center align-center"
							href={liveURL}
							target="_blank"
						>
							Watch Live
						</a>
					</section>
				</article>
			</article>
		</main>
	);
};
