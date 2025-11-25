import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React from "react";

function summary() {
	return {
		body: (
			<React.Fragment>
				<div className="summary-title">
					<span className="summary-name">Frontend Engineering</span>
				</div>
				<div className="summary">
					<ul>
						<li>4개의 팀 프로젝트 개발 경험</li>
						<li>Swagger 기반 REST API 연동 개발 경험</li>
						<li>Vue 3 Composition API 기반 UI 컴포넌트 설계</li>
						<li>
							React + Zustand 기반 공통 UI 컴포넌트와 디자인
							시스템 구축
						</li>
						<li>
							Next.js 기반 공통 UI 컴포넌트와 디자인 시스템 구축
						</li>
						<li>
							React Native + React Webview 기반의 하이브리드 앱
							개발 경험
						</li>
						<li>FCM을 이용한 알림 기능 개발 경험</li>
					</ul>
				</div>
			</React.Fragment>
		),
	};
}

const mySummary = summary;

export default mySummary;
