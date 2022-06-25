import { blogsData, experienceData } from "data";

export const BlogsContent = () => {
	return (
		<main className="main flex-column justify-content-start align-start">
			<div className="homepage-heading p-5 my-5 w-100 border-bottom">
				<i className="heading-color">Blogs</i>
			</div>
			<div className="my-5"></div>
			<div className="flex-column justify-content-center align-start flex-gap-2">
				{blogsData?.length &&
					blogsData.map(
						({ title, publishedDate, readTime, blogURL, description }) => (
							<article className="flex-row justify-content-space-between align-start flex-gap-2 flex-wrap">
								<article className="flex-column justify-content-center align-start flex-gap-half p-5 date-container">
									{publishedDate?.length ? (
										<p className="h4">{publishedDate}</p>
									) : (
										<></>
									)}
									<p className="h4">{readTime}</p>
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
										{blogURL?.length ? (
											<li className="h4 no-list mt-5 pt-5">
												<a
													className="no-link-decoration link-btn"
													href={blogURL}
													target="_blank"
												>
													Read
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
