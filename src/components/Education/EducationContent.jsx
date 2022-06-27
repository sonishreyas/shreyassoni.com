import { educationData } from "data";

export const EducationContent = () => {
	return (
		<main className="main flex-column justify-content-start align-start">
			<div className="homepage-heading p-5 my-5 w-100 border-bottom">
				<i className="heading-color">Education</i>
			</div>
			<div className="my-5"></div>
			<div className="flex-column justify-content-center align-start flex-gap-2 w-100">
				{educationData?.length &&
					educationData.map(
						({
							institute,
							course,
							location,
							startDate,
							endDate,
							result,
							resultType,
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
									{course?.length ? (
										<h2 className="heading-color text-bold">{course}</h2>
									) : (
										<></>
									)}
									<h3 className="text-secondary-cta-color">{institute}</h3>
									<div className="flex-column justify-content-start align-start">
										{result?.length ? (
											<p className="h4 no-list pt-5">
												<h3 className="bold">
													{resultType} : {result}
												</h3>
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
