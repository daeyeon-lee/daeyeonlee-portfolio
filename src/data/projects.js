import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React from "react";

function Project1() {
	return {
		period: "2025.10 ~ 2025.11 (7주)",
		title: "제리뽀",
		description: "하이브리드 앱 기반 반려동물 종합 관리 플랫폼",
		linkcolor: "#6ABFB8",
		hovercolor: "#4D8983",
		links: [
			{
				info: "Github URL",
				url: "https://github.com/dlsqja/jellypaw",
			},
		],
		stacks: {
			frontend: [
				"Framework: React, React Native",
				"Language: TypeScript",
				"UI/스타일링: TailwindCSS",
				"상태 관리: Zustand",
			],
			backend: [
				"Language: Java 17",
				"Framework: Spring, Spring Boot 3.3.2, Spring Batch, Spring Scheduler",
				"Database: MySQL 8.0, MongoDB 8, Redis 7",
				"ORM: JPA",
				"인증/보안: Spring Security",
				"Messaging & Search: Kafka 3.8.1, Elasticsearch 8.11.0",
				"AI : OpenCV, YOLOv8, DeltaE",
			],
			infra: [
				"Containerization: EC2, AWS S3, Docker, Docker Compose",
				"CI/CD: Jenkins",
			],
		},
		develop_role: [
			"React Native + React Webview 기반의 하이브리드 앱 개발",
			"단일 코드베이스 전략을 통해 개발 효율을 극대화하고, 웹과 앱 간의 WebView 통신 최적화",
			"카메라 / 갤러리, 푸시 알림 등 네이티브 기기 기능을 활용하기 위해 네이티브 브릿지를 활용해 연동",
			"Google Place API를 활용한 장소 검색 기능 구현",
			"Android 환경에서 FCM SDK를 연동하고 알림 메시지 전송 로직 구현",
		],
		role: "프론트엔드 개발, 디자인",
		team: "팀 프로젝트 (BE 3, FE 2, AI 1)",
		logo_image: "../jellypaw_icon.png",
		thumbnail_image: "../jellypaw_thumbnail.png",
		architecture_image: "../jellypaw_system_architecture.png",
		long_description:
			"제리뽀는 일기 형식으로 반려동물의 일상을 기록하고 공유할 수 있습니다. 반려동물 동반 가능 시설을 검색하고 예약할 수 있습니다. 또한  AI 기반 반려동물 건강 검사 및 검사 기록 관리 기능을 제공합니다.",
		develop_content: (
			<React.Fragment>
				<h3>React Native + React WebView 하이브리드 앱 개발</h3>
				<ul>
					<li>
						단일 코드베이스 전략을 통해 웹과 앱을 동시에 개발하여
						개발 효율을 극대화
					</li>
					<li>
						WebView를 통해 React로 개발한 웹 애플리케이션을 네이티브
						앱에 통합하고, Redis를 통해 웹과 앱 간의 양방향 통신을
						구현하여 데이터를 주고받을 수 있도록 최적화
					</li>
				</ul>

				<h3>알림 서비스를 위해 Firebase Cloud Messaging 사용</h3>
				<ul>
					<li>
						로그인 성공 시 디바이스 토큰을 저장 → 유저의 모든 기기에
						알림이 가도록 함
					</li>
					<li>
						백그라운드와 포그라운드 상태에서도 알림 기능을 구현하여
						사용자에게 실시간 알림을 제공
					</li>
				</ul>
			</React.Fragment>
		),
		review: (
			<React.Fragment>
				<h3>React Native WebView 통신 최적화</h3>
				<p>
					React Native와 WebView를 결합한 하이브리드 앱을 개발하면서,
					WebView 내부의 React 컴포넌트에서 발생한 데이터나 이벤트를
					React Native에서 실시간으로 받아와야 하는 상황이
					발생했습니다. 직접적인 통신 방식으로는 한계가 있어, React
					컴포넌트의 내용을 React Native에서 효율적으로 이용하기
					위해서는 Redis를 활용해야 한다는 것을 깨달았습니다. 이를
					통해 웹과 네이티브 간의 비동기 통신을 구현하고 데이터 동기화
					문제를 해결할 수 있었습니다.
				</p>
			</React.Fragment>
		),
		performance: null,
	};
}

function Project2() {
	return {
		period: "2025.09 (4주)",
		title: "씨네모아",
		description:
			"Next.js를 활용한 크라우드 펀딩 기반 영화관 대관 자동화 서비스",
		linkcolor: "#fdc3c4",
		hovercolor: "#FF533B",
		links: [
			{
				info: "Github URL",
				url: "https://github.com/daeyeon-lee/Cinemoa",
			},
		],
		stacks: {
			frontend: [
				"Framework: Next.js",
				"Language: TypeScript",
				"UI/스타일링: TailwindCSS",
				"상태 관리: Zustand",
			],
			backend: [
				"Language: Java 17",
				"Framework: Spring Boot 3.5.5",
				"Database: MySQL, Redis",
				"ORM: JPA",
				"인증/보안:Spring Security",
				"AI : Google Colab(모델 서빙 환경), Wan 2.2(모델)",
			],
			infra: ["Containerization: Docker", "CI/CD: Jenkins"],
		},
		develop_role: [
			"Next.js 기반 공통 UI 컴포넌트와 디자인 시스템을 구축",
			"반응형 디자인을 고려한 마크업 UI 개발",
			"역할별 페이지 접근 권한 분리 및 navbar 조건부 렌더링 UX 구현",
		],
		role: "프론트엔드 개발, 발표",
		team: "팀 프로젝트 (BE 2, FE 2, FS 2)",
		logo_image: "../cinemoa_icon.png",
		thumbnail_image: "../cienmoa-thumbnail.png",
		architecture_image: "../cinemoa_system_architecture.png",
		long_description:
			"씨네모아는 영화관 대관 신청부터 관객 모집, 결제, 정산까지 모든 과정을 하나의 플랫폼에서 처리할 수 있는 서비스입니다. 대관 수요자들이 안전하고 편리하게 원하는 영화를 함께 모여 볼 수 있는 환경을 제공합니다.",
		develop_content: (
			<React.Fragment>
				<h3>
					Next.js App Router를 활용한 서버 사이드 렌더링 웹사이트 개발
				</h3>
				<ul>
					<li>
						Next.js App Router를 활용하여 폴더 구조로 라우트를
						정의하고, 동적 라우팅으로 상영회 조회 / 상세 페이지
						구조를 체계적으로 관리
					</li>
					<li>
						서버 컴포넌트를 기본으로 사용하여 서버에서 데이터를
						페칭하고 렌더링함으로써 초기 페이지 로딩 속도를 개선하고
						번들 크기를 최적화
					</li>
					<li>
						펀딩 목록, 실시간 인기 목록 등 수시로 변경되는 동적
						데이터는 서버 컴포넌트에서 직접 API를 호출하여 서버
						사이드에서 렌더링하여 최신 데이터를 제공
					</li>
					<li>
						예약, 결제 등 상호작용이 필요한 부분은 'use client'
						지시어를 사용하여 클라이언트 컴포넌트로 분리하고, 정적
						콘텐츠는 서버 컴포넌트로 유지하여 성능 최적화와 사용자
						경험을 향상
					</li>
				</ul>

				<h3>
					React + Zustand 기반 공통 UI 컴포넌트와 디자인 시스템 구축
				</h3>
				<ul>
					<li>
						React + Zustand 기반 공통 UI 컴포넌트와 디자인 시스템을
						구축
					</li>
					<li>
						사용자 역할 상태에 따른 UI 흐름 설계 및 조건부 메뉴
						렌더링
					</li>
					<li>REST API 연동 개발</li>
				</ul>
			</React.Fragment>
		),
		review: (
			<React.Fragment>
				<h3>GA 분석을 통한 서비스 성과 측정</h3>
				<p>
					GA 분석을 통해 서비스 성과를 측정하고, 사용자 행동 패턴을
					분석하여 서비스 개선 방향을 도출할 수 있었습니다. 특히 펀딩
					목록, 실시간 인기 목록 등 수시로 변경되는 동적 데이터의
					성과를 측정하여 서비스 개선 방향을 도출할 수 있었습니다.
				</p>
			</React.Fragment>
		),
		performance: "삼성 청년 SW-AI 아카데미 핀테크 경진대회 우수상",
	};
}

function Project3() {
	return {
		period: "2025.07 ~ 2025.08 (7주)",
		title: "토닥",
		description: "WebRTC를 활용한 반려동물 비대면 진료 서비스",
		linkcolor: "#d6f0ff",
		hovercolor: "#6cb5f9",
		links: [
			{
				info: "Github URL",
				url: "https://github.com/daeyeon-lee/todak",
			},
		],
		stacks: {
			frontend: [
				"Framework: React",
				"Language: TypeScript",
				"UI/스타일링: TailwindCSS",
				"상태 관리: Zustand",
				"라우팅: React Router Dom",
				"개발 도구: Vit",
			],
			backend: [
				"Language: Java 17",
				"Framework: Spring Boot 3.3.3",
				"Database: MySQL, Redis, Elasticsearch",
				"ORM: Spring Data JPA",
				"인증/보안: JWT (jjwt), Spring Security",
				"메시징 서비스: RabbitMQ",
				"API 문서화: Swagger",
				"웹소켓: Spring WebSocket",
				"개발 도구: Lombok, Devtools",
				"AI : GMS",
			],
			infra: [
				"Containerization: Docker",
				"CI/CD: Jenkins",
				"Cloud: AWS ,S3 Bucket",
			],
		},
		develop_role: [
			"React + Zustand 기반 공통 UI 컴포넌트와 디자인 시스템을 구축",
			"사용자 역할 상태에 따른 UI 흐름 설계 및 조건부 메뉴 렌더링",
			"REST API 연동 개발",
		],
		role: "팀장, 프론트엔드 개발, 디자인",
		team: "팀 프로젝트 (BE 3, FE 3)",
		logo_image: "../todak_icon.png",
		thumbnail_image: "../todak-thumbnail.png",
		architecture_image: "../todak_system_architecture.png",
		long_description:
			"병원 방문이 어려운 바쁜 반려인들을 위한 반려동물 비대면 의료 서비스입니다.",
		develop_content: (
			<React.Fragment>
				<h3>공통 UI 컴포넌트와 디자인 시스템 구축</h3>
				<ul>
					<li>
						Shadcn 라이브러리를 활용해 재사용 가능한 공통 UI
						컴포넌트를 설계하고 구현하여 일관된 디자인 언어를
						적용하고 개발 효율성을 향상
					</li>

					<li>
						TailwindCSS의 커스텀 변수 설정 기능을 활용하여 색상,
						타이포그래피, 간격 등을 일관되게 적용하여 유지보수성과
						가독성을 향상
					</li>
				</ul>

				<h3>Zustand를 활용한 사용자 역할 상태 관리</h3>
				<ul>
					<li>
						반려인, 수의사, 병원 관계자 등 3가지의 사용자 역할에
						따라 접근 가능한 페이지와 기능을 분리하여 권한 기반 UI
						흐름 설계
					</li>
					<li>
						Zustand를 활용하여 전역 상태 관리를 구현하여 사용자 인증
						정보, 역할 상태 등을 중앙에서 관리하여 컴포넌트 간
						데이터 공유를 효율적으로 처리
					</li>
					<li>
						사용자 역할 상태를 기반으로 navbar의 메뉴 항목을 조건부
						렌더링하여 역할에 맞는 메뉴만 표시
					</li>
				</ul>
			</React.Fragment>
		),
		review: (
			<React.Fragment>
				<h3>프로젝트 관리와 커뮤니케이션, 코드 리뷰</h3>
				<p>
					팀장을 맡아 Jira의 사용법을 익히며 프로젝트 관리 방법을
					학습하였습니다. 그라운드 룰을 정하고, 데일리 스크럼을
					지속적으로 수행하여 팀원들과 상호 신뢰를 쌓고
					프로젝트가 문제없이 진행되도록 노력했습니다. 브랜치에
					Merge하기 전 MR을 올려서 전체 BE 팀원들의 코드 리뷰를 받아야
					했기 때문에 그 과정에서 퀄리티 있고 깔끔한 코드 작성법에
					대해서 배울 수 있었습니다.
				</p>
			</React.Fragment>
		),
		performance: "삼성 청년 SW-AI 아카데미 웹디자인 경진대회 우수상",
	};
}

function Project4() {
	return {
		period: "2023.10 ~ 2023.11 (7주)",
		title: "금쪼기",
		description: "Vue.js를 활용한 금융 챌린지 어플리케이션",
		linkcolor: "#e8fd8b",
		hovercolor: "#cbf58c",
		links: [
			{
				info: "Github URL",
				url: "https://github.com/daeyeon-lee/geumjjoki",
			},
		],
		stacks: {
			frontend: [
				"Language: TypeScript",
				"Framework: Vue.js",
				"UI/스타일링: TailwindCSS",
				"상태 관리: Pinia",
				"라우팅: Vue Router",
			],
			backend: [
				"Language: Python",
				"Framework: Django",
				"Database: MySQL",
				"인증/보안: JWT",
			],
			infra: ["Containerization: Docker", "Cloud: AWS"],
		},
		develop_role: [
			"Vue 3 Composition API 기반 UI 컴포넌트 설계",
			"Pinia 기반 상태 관리",
			"Swagger 기반 REST API 연동 개발",
			"서비스 전체 목업 및 디자인 기획/설계",
		],
		role: "프론트엔드 개발, 디자인",
		team: "팀 프로젝트 (BE 2, FE 2)",
		logo_image: "../guemjjoki_icon.png",
		thumbnail_image: "../guemjjoki-thumbnail.png",
		architecture_image: "../guemjjoki_system_architecture.png",
		long_description:
			"금쪼기는 챌린지, 가계부, 금융상품을 하나의 플랫폼으로 합쳐 소비습관 개선을 위한 챌린지를 통해 금융상품을 리워드로 제공하는 서비스",
		develop_content: (
			<React.Fragment>
				<h3>Swagger 기반 REST API 연동 개발</h3>
				<p>
					Swagger를 활용하여 백엔드 API 문서를 참고하며 REST API
					연동을 개발했습니다. Swagger UI를 통해 API 엔드포인트,
					요청/응답 형식을 명확히 파악할 수 있어 개발 효율성이 크게
					향상되었습니다. TypeScript를 활용하여 API 응답 타입을
					정의하고, Axios를 통해 API를 호출하여 데이터를 처리했습니다.
					이를 통해 타입 안정성을 보장하고 개발 생산성을 높일 수
					있었습니다.
				</p>
			</React.Fragment>
		),
		review: (
			<React.Fragment>
				<h3>첫 프론트엔드 개발</h3>
				<p>
					프론트엔드 개발을 처음으로 경험하며 많은 것을 배울 수
					있었습니다. API 요청과 응답 처리, 데이터 출력 방식 등
					프론트엔드의 기본 동작 원리를 이해하게 되었습니다. 특히
					TypeScript를 처음 사용하면서 데이터를 받을 때마다 정확한
					타입을 설정하는 것이 추후 유지보수에 얼마나 중요한지
					깨달았습니다. 백엔드에서 어떤 형태로 데이터를 전달해야
					프론트엔드에서 효율적으로 처리할 수 있는지에 대해서도 깊이
					이해할 수 있었습니다.
				</p>
			</React.Fragment>
		),
		performance: "삼성 청년 SW-AI 아카데미 웹앱 경진대회 우수상",
	};
}

const myProjects = [Project1, Project2, Project3, Project4];

export default myProjects;
