import React from "react";
import styles from "./ProfilePicture.module.css";
import classNames from "classnames";
import Skeletons from "react-loading-skeleton";

const ProfilePicture = (props) => (
	<div
		className={classNames({
			[styles.logoWrapper]: props.hasBorder,
			[styles.default]: props.size === "default",
			[styles.small]: props.size === "small",
			[styles.medium]: props.size === "medium",
		})}
	>
		{props.source ? (
			<img
				className={styles.logo}
				src={props.source}
				alt={props.altText}
			/>
		) : (
			<div className={styles.skeletonLogo} />
		)}
	</div>
);

ProfilePicture.defaultProps = {
	hasBorder: true,
	size: "default",
	altText: "Profile picture",
};

export default ProfilePicture;
