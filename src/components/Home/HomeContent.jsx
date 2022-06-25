export const HomeContent = () => {
	return (
		<main className="main flex-row justify-content-center home-container flex-wrap">
			<div className="flex-column align-center justify-content-start text-center">
				<section className="image-container">
					<img
						className="b-radius-circle round-image"
						src="https://shreyassoni.netlify.app/images/profile.jpeg"
					/>
				</section>
				<div className="homepage-heading">
					Hi! I am <i className="text-cta-color">Shreyas Soni</i>
				</div>
				<div className="homepage-heading">
					<i className="text-cta-color">Software Developer</i>
				</div>
				<p className="h3 my-5">
					I am a software developer currently working with Barclays and learning
					full stack development from neogCamp 2022
				</p>
				<a
					href="https://drive.google.com/file/d/1JVIsDB8WGaK1tTH7Zt71KlAPncTraaO-/view"
					target="_blank"
					className="no-link-decoration primary-btn p-5 b-radius-4 text-bold h3 my-5"
					aria-label="Resume"
				>
					Resume
				</a>
				<div className="flex-column justify-content-center align-center flex-gap-1 my-10">
					<h3>Connect with me</h3>
					<div className="flex-row justify-content-center align-center flex-gap-2 my-5 connect-container">
						<a
							href="https://www.linkedin.com/in/shreyas-soni-00752618b/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="View LinkedIn Profile"
							className="no-link"
						>
							<i className="fab fa-linkedin-in social"></i>
						</a>
						<a
							href="https://twitter.com/ShreyasSoni0204"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="View Twitter Profile"
							className="no-link"
						>
							<i className="fab fa-twitter social"></i>
						</a>

						<a
							href="https://github.com/sonishreyas"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="View Github Profile"
							className="no-link"
						>
							<i className="fab fa-github social"></i>
						</a>
					</div>
				</div>
			</div>
			<svg
				width="459"
				height="459"
				viewBox="0 0 459 459"
				class="svg left"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M0 0C63.5 3.4 127 6.79999 175.7 34.9C224.3 63.1 258.2 116.1 299.1 159.9C340 203.7 387.9 238.5 415.7 286.8C443.6 335.1 451.3 397.1 459 459H0V0Z"
					fill="#F2FDF6"
				/>
				<path
					d="M0 153C42.3 155.3 84.6 157.5 117.1 176.3C149.6 195.1 172.1 230.4 199.4 259.6C226.7 288.8 258.6 312 277.2 344.2C295.7 376.4 300.9 417.7 306 459H0V153Z"
					fill="#C6F6D5"
				/>
				<path
					d="M0 306C21.2 307.1 42.3 308.3 58.6 317.6C74.8 327 86.1 344.7 99.7 359.3C113.3 373.9 129.3 385.5 138.6 401.6C147.9 417.7 150.4 438.4 153 459H0V306Z"
					fill="#3BB77E"
				/>
			</svg>

			<svg
				width="460"
				height="459"
				viewBox="0 0 460 459"
				class="svg right"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M0.999784 459C-0.900216 390.6 -2.80022 322.1 35.8998 283.3C74.6998 244.6 154.2 235.5 199.8 198.8C245.3 162 257 97.6 294.7 59.9C332.4 22.1 396.2 11.1 460 0V459H0.999784Z"
					fill="#F2FDF6"
				/>
				<path
					d="M154 459C152.7 413.4 151.4 367.7 177.3 341.9C203.2 316.1 256.1 310 286.5 285.5C316.9 261 324.6 218.1 349.8 192.9C374.9 167.8 417.5 160.4 460 153V459H154Z"
					fill="#C6F6D5"
				/>
				<path
					d="M307 459C306.4 436.2 305.7 413.4 318.6 400.4C331.6 387.5 358.1 384.5 373.3 372.3C388.4 360 392.3 338.5 404.9 326C417.5 313.4 438.7 309.7 460 306V459H307Z"
					fill="#3BB77E"
				/>
			</svg>
		</main>
	);
};
