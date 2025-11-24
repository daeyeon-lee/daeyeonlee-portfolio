import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/user";

import "./styles/socials.css";

const Socials = () => {
	return (
		<div className="socials">
			{INFO.socials.github && (
				<div className="social">
					<a
						href={INFO.socials.github}
						target="_blank"
						rel="noreferrer"
					>
						<div className="social-icon">
							<FontAwesomeIcon
								icon={faGithub}
								className="social-icon"
							/>
						</div>
						<div className="social-text">Follow on GitHub</div>
					</a>
				</div>
			)}

			{INFO.socials.blog && (
				<div className="social">
					<a
						href={INFO.socials.blog}
						target="_blank"
						rel="noreferrer"
					>
						<div className="social-icon">
							<FontAwesomeIcon
								icon={faLink}
								className="social-icon"
							/>
						</div>
						<div className="social-text">Visit Blog</div>
					</a>
				</div>
			)}

			{INFO.main.email && (
				<div className="email">
					<div className="email-wrapper">
						<a
							href={`mailto:${INFO.main.email}`}
							target="_blank"
							rel="noreferrer"
						>
							<div className="social-icon">
								<FontAwesomeIcon icon={faEnvelope} />
							</div>

							<div className="social-text">{INFO.main.email}</div>
						</a>
					</div>
				</div>
			)}
		</div>
	);
};

export default Socials;
