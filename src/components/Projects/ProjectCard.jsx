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
							className="cursor-pointer card video-card card-shadow b-radius-2"
							key={_id}
						>
							<article className="video-card-image-container card-image-container flex-row justify-content-center align-center flex-wrap b-radius-2 mx-5 mt-5">
								<img
									src={demoURL}
									alt={title}
									title={title}
									className="video-card-image b-radius-2"
								/>
							</article>
							<section className="flex-row justify-content-start align-start mx-5 ">
								<section className="card-content p-5 pb-0 mx-5">
									<p
										className="card-title text-wrap text-bold h5"
										title={title}
									>
										{title}
									</p>
									<p className="card-category py-5">{description}</p>
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
