import React from "react";
import Project from "./project";
import myProjects from "../../data/projects";

import "./styles/allProjects.css";

const AllProjects = () => {
	return (
		<div className="all-projects-container">
			{myProjects.map((ProjectInfo, index) => {
				const project = ProjectInfo();
				// stacks가 객체인 경우 frontend만 추출
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
							link={`/project/${index + 1}`}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default AllProjects;
