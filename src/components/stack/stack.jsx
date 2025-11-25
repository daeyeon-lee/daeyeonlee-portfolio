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
						<div className="stacklist">
							{stack.skill &&
								Array.isArray(stack.skill) &&
								stack.skill.map((item, skillIndex) => (
									<li key={skillIndex}>{item}</li>
								))}
						</div>
					</div>
				))}
			</div>
		</React.Fragment>
	);
};

export default Stack;
