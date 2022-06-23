import { projects } from "data";

export const ProjectCard = () => {
	return (
		<div className="products-container flex-row align-start flex-gap-2 flex-wrap">
			{projects.length ? (
				projects.map(
					({
						_id,
						title,
						description,
						techStack,
						githubURL,
						demoURL,
						liveURL,
					}) => (
						<article
							className="cursor-pointer basic-card project-card card-shadow b-radius-2"
							key={_id}
						>
							<article className="project-card-image-container card-image-container flex-row justify-content-center align-center flex-wrap b-radius-2 mx-5 mt-5">
								<img
									src={demoURL}
									alt={title}
									title={title}
									className="project-card-image b-radius-2"
								/>
							</article>
							<section className="flex-column justify-content-center align-center">
								<section className="p-5 pb-0 text-center w-100">
									<h3 className="text-bold text-cta-color " title={title}>
										{title}
									</h3>
									<p className="card-category py-5">{description}</p>
								</section>
								<section className="text-left">
									<h4 className="text-bold">Technology Stack: </h4>
								</section>
								<section className="flex-row w-100 justify-content-center align-center p-5 flex-gap-1 flex-wrap">
									<a
										className="no-link-decoration primary-btn p-5 b-radius-4 flex-grow-1 text-center"
										href={githubURL}
									>
										View Source
									</a>
									<a
										className="no-link-decoration outline-btn p-5 b-radius-4 flex-grow-1 text-center"
										href={liveURL}
									>
										Watch Live
									</a>
								</section>
							</section>
						</article>
					)
				)
			) : (
				<></>
			)}
		</div>
	);
};
