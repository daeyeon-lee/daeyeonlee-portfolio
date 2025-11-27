import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Summary from "../components/about/summary";

import INFO from "../data/user";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description.map(
										(desc, index) => (
											<div key={index}>{desc}</div>
										)
									)}
								</div>
								{/* 기술 스택 리스트 */}
								<div className="stacks-section">
									<div className="section-title"></div>
									<div className="stacks-list">
										{(INFO.stacks || []).map(
											(category, index) => (
												<div
													key={index}
													className="stack-item"
												>
													<div className="stack-category-title">
														{category.title}
													</div>
													<ul className="stack-list">
														{category.skill.map(
															(
																stack,
																stackIndex
															) => {
																// 배열 형태와 객체 형태 모두 지원
																const stackName =
																	typeof stack ===
																	"string"
																		? stack
																		: stack.name;
																const score =
																	typeof stack ===
																	"string"
																		? category
																				.scores?.[
																				stackIndex
																		  ] || 0
																		: stack.score ||
																		  0;
																const description =
																	typeof stack ===
																	"object"
																		? stack.description
																		: "";
																const descriptionList =
																	Array.isArray(
																		description
																	)
																		? description
																		: description
																		? [
																				description,
																		  ]
																		: [];
																return (
																	<li
																		key={
																			stackIndex
																		}
																		className="stack-item-with-score"
																	>
																		<div className="stack-header">
																			<span className="stack-name">
																				{
																					stackName
																				}
																			</span>
																			<div className="score-blocks">
																				{[
																					1,
																					2,
																					3,
																					4,
																					5,
																				].map(
																					(
																						level
																					) => (
																						<div
																							key={
																								level
																							}
																							className={`score-block ${
																								level <=
																								score
																									? "filled"
																									: "empty"
																							}`}
																						/>
																					)
																				)}
																			</div>
																		</div>
																		{descriptionList.length >
																			0 && (
																			<div className="stack-description">
																				{descriptionList.map(
																					(
																						desc,
																						descIndex
																					) => (
																						<div
																							key={
																								descIndex
																							}
																							className="stack-description-item"
																						>
																							{
																								desc
																							}
																						</div>
																					)
																				)}
																			</div>
																		)}
																	</li>
																);
															}
														)}
													</ul>
												</div>
											)
										)}
									</div>
								</div>
								<div>
									<Summary frontend={INFO.about.frontend} />
								</div>
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
