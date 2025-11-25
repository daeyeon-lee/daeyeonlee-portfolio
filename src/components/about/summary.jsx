import React from "react";
import "./styles/summary.css";
import mySummary from "../../data/summary";

const Summary = (props) => {
	const { frontend } = props;
	return (
		<React.Fragment>
			<div className="summary">
				<div className="summary-container">{mySummary().body}</div>
			</div>
		</React.Fragment>
	);
};

export default Summary;
