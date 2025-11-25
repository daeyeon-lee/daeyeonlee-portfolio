import React from "react";
import { Link } from "react-router-dom";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, link, stack } = props;

	// stacks 배열의 각 항목에서 ":" 뒤의 값만 추출하고, 쉼표로 분리하여 개별 태그로 변환
	const tags = stack
		? stack.flatMap((item) => {
				// ":" 뒤의 부분만 추출
				const afterColon = item.includes(":")
					? item.split(":")[1].trim()
					: item.trim();
				// 쉼표로 분리하여 개별 태그로 변환
				return afterColon
					.split(",")
					.map((tag) => tag.trim())
					.filter((tag) => tag !== "");
		  })
		: [];

	// 외부 URL인지 확인
	const isExternalLink =
		link && (link.startsWith("http://") || link.startsWith("https://"));

	const projectContent = (
		<div className="project-container">
			<div className="project-logo">
				<img src={logo} alt={title} />
			</div>
			<div className="project-title">{title}</div>
			<div className="project-tags">
				{tags.map((tag, index) => (
					<span key={index} className="project-tag">
						{tag}
					</span>
				))}
			</div>
			<div className="project-description">{description}</div>
		</div>
	);

	return (
		<div className="project">
			{isExternalLink ? (
				<a href={link} target="_blank" rel="noreferrer">
					{projectContent}
				</a>
			) : (
				<Link to={link}>{projectContent}</Link>
			)}
		</div>
	);
};

export default Project;
