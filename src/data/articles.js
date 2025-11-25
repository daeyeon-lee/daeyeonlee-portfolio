import React from "react";

function article_1() {
	return {
		date: "2025.01. ~ 2025.12.",
		title: "삼성 청년 SW 아카데미",
		description: "삼성 청년 SW 아카데미 13기 활동",
		infos: [
			"삼성, 고용노동부 주관 SW 역량 향상 교육 프로그램",
			"Python, 알고리즘, Vue.js, HTML/CSS/JavaScript/TypeScript, React, Django기반 웹 서비스 구축 및 DB 설계에 대해서 학습했습니다.",
			"팀 프로젝트를 통한 협업 경험",
			"1학기 프로젝트 우수상, 2학기 프로젝트 우수상 수상",
			"우수 교육생 3회 선정",
		],
		style: ``,

		body: (
			<React.Fragment>
				<h1>Content of sdfsdf 2</h1>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "2017.03. ~ 2024.02. (졸업)",
		title: "가천대학교 응용통계학과, 경영학과",
		style: ``,
		style: ``,
		body: (
			<React.Fragment>
				<h1>Content of sdfsdf 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
