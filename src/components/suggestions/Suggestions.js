import React from "react";
import styles from "./Suggestions.module.css";
import { ProfilePicture } from "../../components";

const collectProfiles = (profiles) =>
	(profiles ? profiles.slice(0, 8) : [...Array(7)]).map(
		(profile, i) => (
			<article
				className={styles.profile}
				key={`Profile${i}`}
			>
				<div className={styles.profilePictureText}>
					<ProfilePicture
						source={
							profile ? profile.profile_picture : null
						}
						size="medium"
						hasBorder={false}
					/>
					<strong className={styles.profileName}>
						{profile ? profile.profile_name : ""}
					</strong>
				</div>
				{profile && (
					<strong className={styles.linkOut}>Segui</strong>
				)}
			</article>
		)
	);

const Suggestions = (props) => (
	<aside className={styles.suggestionsParent}>
		<div className={styles.header}>
			<h2 className={styles.headerText}>
				Seggerimenti per te
			</h2>
			<strong className={styles.offText}>
				Mostra tutti
			</strong>
		</div>
		{props.hasLoadedStories
			? collectProfiles(props.profiles)
			: collectProfiles()}
		<p className={styles.copyright}>
			&copy; 2020 <i>not</i> INSTAGRAM FROM FACEBOOK
		</p>
	</aside>
);

export default Suggestions;
