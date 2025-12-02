import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import VelogIcon from "./velog";
import INFO from "../../data/user";

const SocialLinks = () => {
	return (
		<div className="social-links">
			{/* GitHub */}
			{INFO.socials.github && (
				<div className="social-link-item">
					<a
						href={INFO.socials.github}
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon
							icon={faGithub}
							className="social-icon"
						/>
						<span className="social-link-text">
							{INFO.socials.github}
						</span>
					</a>
				</div>
			)}
			{/* Blog */}
			{INFO.socials.blog && (
				<div className="social-link-item">
					<a
						href={INFO.socials.blog}
						target="_blank"
						rel="noreferrer"
					>
						<VelogIcon className="social-icon" />
						<span className="social-link-text">
							{INFO.socials.blog}
						</span>
					</a>
				</div>
			)}
			{/* Email */}
			{INFO.main.email && (
				<div className="social-link-item">
					<a
						href={`mailto:${INFO.main.email}`}
						target="_blank"
						rel="noreferrer"
					>
						<FontAwesomeIcon
							icon={faEnvelope}
							className="social-icon"
						/>
						<span className="social-link-text">
							{INFO.main.email}
						</span>
					</a>
				</div>
			)}
		</div>
	);
};

export default SocialLinks;
