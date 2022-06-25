import { publicationsData } from "data";

export const PublicationsContent = () => {
	return (
		<main className="main flex-column justify-content-start align-start">
			<div className="homepage-heading p-5 my-5 w-100 border-bottom">
				<i className="heading-color">Publication</i>
			</div>
			<div className="my-5"></div>
			<div className="flex-column justify-content-center align-start flex-gap-2">
				{publicationsData?.length &&
					publicationsData.map(
						({ title, publishedDate, paperURL, description, codeURL }) => (
							<article className="flex-row justify-content-space-between align-start flex-gap-2 flex-wrap">
								<article className="flex-column justify-content-center align-start flex-gap-half p-5 date-container">
									{publishedDate?.length ? (
										<p className="h4">{publishedDate}</p>
									) : (
										<></>
									)}
								</article>
								<article className="flex-column justify-content-center align-start flex-gap-1 p-5 info-container">
									{title?.length ? (
										<h1 className="heading-color text-bold">{title}</h1>
									) : (
										<></>
									)}
									<ul>
										<li className="h4 no-list my-2 text-limit">
											{description}
										</li>
										{paperURL?.length ? (
											<li className="h4 no-list mt-5 pt-5">
												<a
													className="no-link-decoration link-btn"
													href={paperURL}
													target="_blank"
												>
													Read
												</a>
												<i> | </i>
												<a
													className="no-link-decoration link-btn"
													href={codeURL}
													target="_blank"
												>
													View Code
												</a>
											</li>
										) : (
											<></>
										)}
									</ul>
								</article>
							</article>
						)
					)}
			</div>
			<div className="my-5"></div>
		</main>
	);
};
