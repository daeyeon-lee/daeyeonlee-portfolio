import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faMailBulk, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
// import Article from "../components/homepage/article";
// import Works from "../components/homepage/works";
// import AllProjects from "../components/projects/allProjects";

import HomepageInfo from "../data/user";
import SEO from "../data/seo";
// import myArticles from "../data/articles";

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
			{/* SEO */}
			{/* <Helmet>
				<title>
					{HomepageInfo.main.title} - {HomepageInfo.main.jobTitle}
				</title>
				<meta name="robots" content="noindex, nofollow" />
			</Helmet> */}
			{/* 로고 */}
			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>
					{/* 자기 소개 영역 */}
					<div className="homepage-container">
						<div className="intro-area">
							<div className="intro-content">
								<div className="title intro-title">
									{HomepageInfo.profiles.title}
								</div>
								<div className="title intro-job-title">
									{HomepageInfo.profiles.jobTitle}
								</div>

								<div className="subtitle intro-subtitle">
									{HomepageInfo.profiles.description}
								</div>
							</div>
							{/* 자기 소개 이미지 */}
							<div className="intro-image-wrapper">
								<div className="intro-image-container">
									<div className="intro-image">
										<img
											src="homepage.jpg"
											alt="about"
											className="intro-img"
										/>
									</div>
								</div>
							</div>
						</div>
						{/* 소셜 링크 */}
						<div className="social-links">
							{/* GitHub */}
							{HomepageInfo.socials.github && (
								<a
									href={HomepageInfo.socials.github}
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon
										icon={faGithub}
										className="social-icon"
									/>
								</a>
							)}
							{/* Blog */}
							{HomepageInfo.socials.blog && (
								<a
									href={HomepageInfo.socials.blog}
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon
										icon={faLink}
										className="social-icon"
									/>
								</a>
							)}
							{/* Email */}
							{HomepageInfo.main.email && (
								<a
									href={`mailto:${HomepageInfo.main.email}`}
									target="_blank"
									rel="noreferrer"
								>
									<FontAwesomeIcon
										icon={faMailBulk}
										className="social-icon"
									/>
								</a>
							)}
						</div>
						{/* 기술 스택 리스트 */}
						<div className="stacks-section">
							<div className="section-title">Stacks</div>
							<div className="stacks-list">
								{HomepageInfo.stacks.map((category, index) => (
									<div key={index} className="stack-item">
										<div className="stack-category-title">
											{category.name}
										</div>
										<ul className="stack-list">
											{category.items.map(
												(stack, stackIndex) => (
													<li key={stackIndex}>
														{stack}
													</li>
												)
											)}
										</ul>
									</div>
								))}
							</div>
						</div>

						{/* 스킬 */}
						<div className="skills-section">
							<div className="section-title">Skills</div>
							<div className="skills-content">
								{HomepageInfo.skills.backend && (
									<div className="skill-category">
										<div className="skill-category-title">
											Backend Engineering
										</div>
										<ul className="skill-list">
											{HomepageInfo.skills.backend.map(
												(skill, index) => (
													<li key={index}>
														• {skill}
													</li>
												)
											)}
										</ul>
									</div>
								)}
								{HomepageInfo.skills.software && (
									<div className="skill-category">
										<div className="skill-category-title">
											Software Development
										</div>
										<ul className="skill-list">
											{HomepageInfo.skills.software.map(
												(skill, index) => (
													<li key={index}>
														•{skill}
													</li>
												)
											)}
										</ul>
									</div>
								)}
								{HomepageInfo.skills.frontend && (
									<div className="skill-category">
										<div className="skill-category-title">
											Frontend Engineering
										</div>
										<ul className="skill-list">
											{HomepageInfo.skills.frontend.map(
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
						<div className="activities-section">
							<div className="section-title">Activities</div>
							<div className="activities-content">
								{HomepageInfo.activities.map(
									(activity, index) => (
										<div
											key={index}
											className="activity-item"
										>
											<div className="activity-period">
												{activity.period}
											</div>
											<div className="activity-details">
												<div className="activity-title">
													{activity.title}
												</div>
												{activity.subtitle && (
													<div className="activity-subtitle">
														{activity.subtitle}
													</div>
												)}
												{activity.description &&
													activity.description
														.length > 0 && (
														<ul className="activity-description">
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
									)
								)}
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
