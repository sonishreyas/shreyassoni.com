import { experienceData } from "data";

export const ExperienceContent = () => {
	return (
		<main className="main flex-column justify-content-start align-start">
			<div className="homepage-heading p-5 my-5 w-100 border-bottom">
				<i className="heading-color">Work</i>{" "}
				<i className="text-cta-color">Experience</i>
			</div>
			<div className="my-5"></div>
			<div className="flex-column justify-content-center align-start flex-gap-2">
				{experienceData?.length &&
					experienceData.map(
						({
							company,
							position,
							location,
							startDate,
							endDate,
							description,
							codeURL,
						}) => (
							<article className="flex-row justify-content-space-between align-start flex-gap-2 flex-wrap w-100">
								<article className="flex-column justify-content-center align-start flex-gap-half p-5 date-container">
									{startDate?.length ? (
										<p className="h4">
											{startDate} - {endDate}
										</p>
									) : (
										<></>
									)}
									<p className="h4">{location}</p>
								</article>
								<article className="flex-column justify-content-center align-start flex-gap-1 p-5 info-container">
									{company?.length ? (
										<h1 className="heading-color text-bold">{company}</h1>
									) : (
										<></>
									)}
									<h3 className="text-secondary-cta-color">{position}</h3>
									<div className="flex-column justify-content-start align-start">
										{description.map((item, index) => (
											<p className="h4 no-list my-2 text-limit" key={index}>
												{item}
											</p>
										))}
										{codeURL?.length ? (
											<p className="h4 no-list mt-5 pt-5">
												<a
													className="no-link-decoration link-btn"
													href={codeURL}
													target="_blank"
												>
													View Code
												</a>
											</p>
										) : (
											<></>
										)}
									</div>
								</article>
							</article>
						)
					)}
			</div>
			<div className="my-5"></div>
		</main>
	);
};
