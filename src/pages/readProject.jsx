import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import myProjects from "../data/projects";

import "./styles/readProject.css";

import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

let ArticleStyle = styled.div``;

const ReadProject = () => {
	const navigate = useNavigate();
	let { id } = useParams();

	const projectIndex = parseInt(id) - 1;
	const projectFunction = myProjects[projectIndex];
	const project = projectFunction ? projectFunction() : null;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [id]);

	if (!project) {
		return (
			<div className="page-content">
				<NavBar />
				<div className="content-wrapper">
					<div className="project-not-found">
						<h2>프로젝트를 찾을 수 없습니다.</h2>
						<button onClick={() => navigate("/projects")}>
							프로젝트 목록으로 돌아가기
						</button>
					</div>
				</div>
			</div>
		);
	}

	const StyledLink = styled.a`
		padding-left: 5px;
		font-size: 16px;
		font-weight: 600;
		text-decoration-line: none;
		color: #52525b;
		display: inline;
		box-shadow: inset 0 -10px 0 ${project.linkcolor || "#d6f0ff"};

		&:hover {
			color: ${project.hovercolor || "#6cb5f9"};
			transition: color 0.3s ease-in-out;
		}
	`;

	ArticleStyle = styled.div`
		${project.style || ""}
	`;

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${project.title} | ${INFO.main.title}`}</title>
				<meta name="description" content={project.description} />
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />

				<div className="content-wrapper">
					<div className="read-article-logo-container">
						<div className="read-article-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="read-article-container">
						<div className="read-article-wrapper">
							<div className="title read-article-title">
								{project.title}
							</div>
							<div className="read-article-info-container">
								{project.period && (
									<div className="read-article-date">
										{project.period}
									</div>
								)}
								{project.team && (
									<div className="read-article-date">
										{project.team}
									</div>
								)}
								{project.role && (
									<div className="read-article-date">
										{project.role}
									</div>
								)}
							</div>
							<div className="read-article-body">
								{project.thumbnail_image && (
									<img
										src={project.thumbnail_image}
										alt="project thumbnail"
										className="project-image"
									/>
								)}
								{project.links && project.links.length > 0 && (
									<div className="links">
										{project.links.map((data, index) => (
											<div key={index}>
												<StyledLink
													href={data.url}
													target="_blank"
													rel="noreferrer"
												>
													<FontAwesomeIcon
														icon={faLink}
													/>{" "}
													{data.info}
												</StyledLink>
											</div>
										))}
									</div>
								)}

								{project.long_description && (
									<div className="project-description">
										{project.long_description}
									</div>
								)}
								{project.stacks &&
									typeof project.stacks === "object" &&
									!Array.isArray(project.stacks) && (
										<>
											<h2>🛠️ 기술 스택</h2>
											{project.stacks.frontend &&
												project.stacks.frontend.length >
													0 && (
													<div className="stacks-section">
														<h3>Frontend</h3>
														<ul className="stacks">
															{project.stacks.frontend.map(
																(
																	data,
																	index
																) => (
																	<li
																		key={
																			index
																		}
																	>
																		{data}
																	</li>
																)
															)}
														</ul>
													</div>
												)}
											{project.stacks.backend &&
												project.stacks.backend.length >
													0 && (
													<div className="stacks-section">
														<h3>Backend</h3>
														<ul className="stacks">
															{project.stacks.backend.map(
																(
																	data,
																	index
																) => (
																	<li
																		key={
																			index
																		}
																	>
																		{data}
																	</li>
																)
															)}
														</ul>
													</div>
												)}
											{project.stacks.infra &&
												project.stacks.infra.length >
													0 && (
													<div className="stacks-section">
														<h3>Infra</h3>
														<ul className="stacks">
															{project.stacks.infra.map(
																(
																	data,
																	index
																) => (
																	<li
																		key={
																			index
																		}
																	>
																		{data}
																	</li>
																)
															)}
														</ul>
													</div>
												)}
										</>
									)}
								{project.stacks &&
									Array.isArray(project.stacks) &&
									project.stacks.length > 0 && (
										<>
											<h2>🛠️ 기술 스택</h2>
											<div className="stacks">
												{project.stacks.map(
													(data, index) => (
														<li key={index}>
															{data}
														</li>
													)
												)}
											</div>
										</>
									)}
								{project.architecture_image && (
									<>
										<h2>👨‍🔧 아키텍처 다이어그램</h2>
										<img
											className="architecture-image"
											src={project.architecture_image}
											alt="아키텍처 다이어그램"
										/>
									</>
								)}
								{project.develop_role &&
									project.develop_role.length > 0 && (
										<>
											<h2>🙋‍♀️ 맡은 역할</h2>
											{project.develop_role.map(
												(data, index) => (
													<li key={index}>{data}</li>
												)
											)}
										</>
									)}
								{project.develop_content && (
									<>
										<h2>💻 개발 내용</h2>
										<ArticleStyle>
											{project.develop_content}
										</ArticleStyle>
									</>
								)}
								{project.review && (
									<>
										<h2>✍️ 회고</h2>
										<ArticleStyle>
											{project.review}
										</ArticleStyle>
									</>
								)}
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

export default ReadProject;
