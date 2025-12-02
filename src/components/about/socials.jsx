import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faGithub,
	faLinkedin,
	faMicroblog,
} from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/user";
import CopyToClipboardButton from "../contact/CopyEmail";
import "./styles/socials.css";

const Socials = () => {
	return (
		<div className="socials">
			<div className="social">
				<a href={INFO.socials.github} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faGithub}
							className="social-icon"
						/>
					</div>
					<div className="social-text">{INFO.socials.github}</div>
				</a>
			</div>

			<div className="social">
				<a href={INFO.socials.blog} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faMicroblog}
							className="social-icon"
						/>
					</div>
					<div className="social-text">{INFO.socials.blog}</div>
				</a>
			</div>

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
			<CopyToClipboardButton textToCopy={INFO.main.email} />
		</div>
	);
};

export default Socials;
