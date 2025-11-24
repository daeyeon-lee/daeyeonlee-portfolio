import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faMailBulk, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Article from "../components/homepage/article";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/homepage.css";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>
					{INFO.main.title}
					{INFO.main.jobTitle}
				</title>
				<meta name="author" content={INFO.main.jobTitle} />
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									{INFO.homepage.title}
								</div>

								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description}
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="homepage.jpg"
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="homepage-socials">
							{INFO.socials.github && (
								<a
									href={INFO.socials.github}
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon
										icon={faGithub}
										className="homepage-social-icon"
									/>
								</a>
							)}
							{INFO.socials.blog && (
								<a
									href={INFO.socials.blog}
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon
										icon={faLink}
										className="homepage-social-icon"
									/>
								</a>
							)}
							{INFO.main.email && (
								<a
									href={`mailto:${INFO.main.email}`}
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon
										icon={faMailBulk}
										className="homepage-social-icon"
									/>
								</a>
							)}
						</div>
						{/* 기술 스택 */}
						<div className="homepage-stacks">
							<div className="homepage-section-title">Stacks</div>
							<div className="homepage-stacks-list">
								{INFO.stacks.map((category, index) => (
									<div
										key={index}
										className="homepage-stack-item"
									>
										<div className="homepage-stack-category-title">
											{category.name}
										</div>
										<ul className="homepage-stack-list">
											{category.items.map(
												(stack, stackIndex) => (
													<li key={stackIndex}>
														•{stack}
													</li>
												)
											)}
										</ul>
									</div>
								))}
							</div>
						</div>

						{/* 스킬 */}
						<div className="homepage-skills">
							<div className="homepage-section-title">Skills</div>
							<div className="homepage-skills-content">
								{INFO.skills.backend && (
									<div className="homepage-skill-category">
										<div className="homepage-skill-category-title">
											Backend Engineering
										</div>
										<ul className="homepage-skill-list">
											{INFO.skills.backend.map(
												(skill, index) => (
													<li key={index}>
														• {skill}
													</li>
												)
											)}
										</ul>
									</div>
								)}
								{INFO.skills.software && (
									<div className="homepage-skill-category">
										<div className="homepage-skill-category-title">
											Software Development
										</div>
										<ul className="homepage-skill-list">
											{INFO.skills.software.map(
												(skill, index) => (
													<li key={index}>
														•{skill}
													</li>
												)
											)}
										</ul>
									</div>
								)}
								{INFO.skills.frontend && (
									<div className="homepage-skill-category">
										<div className="homepage-skill-category-title">
											Frontend Engineering
										</div>
										<ul className="homepage-skill-list">
											{INFO.skills.frontend.map(
												(skill, index) => (
													<li key={index}>
														•{skill}
													</li>
												)
											)}
										</ul>
									</div>
								)}
							</div>
						</div>

						{/* 경험 */}
						<div className="homepage-activities">
							<div className="homepage-section-title">
								Activities
							</div>
							<div className="homepage-activities-content">
								{INFO.activities.map((activity, index) => (
									<div
										key={index}
										className="homepage-activity-item"
									>
										<div className="homepage-activity-period">
											{activity.period}
										</div>
										<div className="homepage-activity-details">
											<div className="homepage-activity-title">
												{activity.title}
											</div>
											{activity.subtitle && (
												<div className="homepage-activity-subtitle">
													{activity.subtitle}
												</div>
											)}
											{activity.description &&
												activity.description.length >
													0 && (
													<ul className="homepage-activity-description">
														{activity.description.map(
															(
																desc,
																descIndex
															) => (
																<li
																	key={
																		descIndex
																	}
																>
																	•{desc}
																</li>
															)
														)}
													</ul>
												)}
										</div>
									</div>
								))}
							</div>
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
