import { Link, NavLink } from "react-router-dom";
import { useNavbar, useTheme } from "context";

const Header = () => {
	const { handleSetTheme, themeIcon } = useTheme();
	const { setShowNavbar } = useNavbar();
	const getActiveClass = ({ isActive }) =>
		isActive
			? "no-link cursor-pointer text-cta-color text-bold"
			: "no-link cursor-pointer";
	const handleShowNavbar = () => setShowNavbar(true);
	return (
		<header className="header header-shadow flex-column">
			<div className="flex-row justify-content-space-between align-center w-100">
				<div className="brand-info flex-row justify-content-center align-center flex-gap-1 m-5">
					<section>
						<i
							className="fas fa-bars header-nav-icon"
							onClick={handleShowNavbar}
						></i>
					</section>
					<Link to={"/"} className="no-link header-brand">
						<img
							src="https://raw.githubusercontent.com/sonishreyas/rippleUI/dev/components/media/images/ripple-logo.png"
							alt="Logo of ripple UI"
							className="brand-logo"
						/>
						<sub className="brand-name">Ripple Habits</sub>
					</Link>
				</div>
				<div className="social-icon-container flex-row align-center flex-gap-2">
					<ul className="no-list spaced-list flex-row align-center flex-gap-2 mx-5">
						<li className="header-nav-icons h-auto pr-2">
							<NavLink to={"/"} className={getActiveClass}>
								Home
							</NavLink>
						</li>
						<li className="header-nav-icons h-auto pr-2">
							<NavLink to={"/dashboard"} className={getActiveClass}>
								Dashboard
							</NavLink>
						</li>
						<li className="header-nav-icons h-auto pr-2">
							<NavLink to={"/habits/all"} className={getActiveClass}>
								My Habits
							</NavLink>
						</li>
						<li className="header-theme-small-icon h-auto pr-2">
							<span className="social">
								<i
									className={`fas fa-${themeIcon} theme-icon social`}
									aria-label="dark/light theme icon"
									onClick={handleSetTheme}
								></i>
							</span>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export { Header };
