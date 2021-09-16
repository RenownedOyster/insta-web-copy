import React from "react";
import styles from "./Stories.module.css";
import { ProfilePicture } from "../../components";

const PictureWithText = (props) => {
	const formattedName =
		props.name.length > 7
			? `${props.name.substr(0, 6)}...`
			: props.name;

	return (
		<div className={styles.pictureWithText}>
			<ProfilePicture
				hasBorder
				alt="Profile picture"
				source={props.imageSource}
			/>
			<p className={styles.nameTag}>{formattedName}</p>
		</div>
	);
};

const compileStories = (results) =>
	results
		.slice(0, 6)
		.map((result, i) => (
			<PictureWithText
				key={`storyPicture${i}`}
				imageSource={result.profile_picture}
				name={result.profile_name}
			/>
		));

const Stories = (props) => (
	<section className={styles.storiesParent}>
		{props.hasLoaded ? (
			<div className={styles.storiesChildren}>
				{compileStories(props.activeStories)}
			</div>
		) : (
			<div className={styles.storiesChildren}>
				<ProfilePicture hasBorder={false} />
				<ProfilePicture hasBorder={false} />
				<ProfilePicture hasBorder={false} />
				<ProfilePicture hasBorder={false} />
				<ProfilePicture hasBorder={false} />
			</div>
		)}
	</section>
);

export default Stories;
