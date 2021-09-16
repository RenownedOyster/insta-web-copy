import React from "react";
import styles from "./ProfileBar.module.css";
import { ProfilePicture } from "../../components";

const ProfileBar = (props) => (
	<aside className={styles.profileBarParent}>
		<ProfilePicture
			source={props.pictureSource}
			hasBorder={false}
		/>
		<div className={styles.names}>
			<strong>{props.username}</strong>
			<p className={styles.fullName}>{props.fullName}</p>
		</div>
		<p className={styles.linkOut}>Passa a</p>
	</aside>
);

export default ProfileBar;
