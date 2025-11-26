import React from "react";
import "./styles/stack.css";

const Stack = (props) => {
	const { stacks } = props;

	if (!stacks || !Array.isArray(stacks)) {
		return null;
	}

	return (
		<React.Fragment>
			<div className="all-stack-container">
				{stacks.map((stack, index) => (
					<div key={index} className="stack-container">
						<div className="stack-title">
							<span className="stack-name">{stack.title}</span>
						</div>
						<ul className="stack-list">
							{stack.skill &&
								Array.isArray(stack.skill) &&
								stack.skill.map((item, skillIndex) => {
									// 문자열 또는 객체 형태 모두 지원
									const skillName =
										typeof item === "string"
											? item
											: item.name || "";
									return (
										<li key={skillIndex}>{skillName}</li>
									);
								})}
						</ul>
					</div>
				))}
			</div>
		</React.Fragment>
	);
};

export default Stack;
