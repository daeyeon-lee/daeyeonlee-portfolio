import React from "react";
import Project from "./project";
import myProjects from "../../data/projects";

import "./styles/allProjects.css";

const AllProjects = () => {
	return (
		<div className="all-projects-container">
			{myProjects.map((ProjectInfo, index) => {
				const project = ProjectInfo();
				// stackTags가 있으면 우선 사용, 없으면 기존 방식으로 처리
				let stackArray = project.stacks;
				if (
					project.stacks &&
					typeof project.stacks === "object" &&
					!Array.isArray(project.stacks)
				) {
					stackArray = project.stacks.frontend || [];
				}
				return (
					<div className="all-projects-project" key={index}>
						<Project
							logo={project.logo_image || project.thumbnail_image}
							team={project.team}
							title={project.title}
							description={project.description}
							stack={stackArray}
							stackTags={project.stackTags}
							link={`/project/${index + 1}`}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default AllProjects;
