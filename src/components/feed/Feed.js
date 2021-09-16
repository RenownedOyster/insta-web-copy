import React from "react";
import styles from "./Feed.module.css";
import moment from "moment";
import { ProfilePicture } from "../../components";
import { ReactComponent as Heart } from "../../assets/images/heart.svg";
import { ReactComponent as Elipsis } from "../../assets/images/elipsis.svg";
import { ReactComponent as SpeechBubble } from "../../assets/images/speechBubble.svg";
import Gray from "../../assets/images/gray.png";

const Post = (props) => (
	<article className={styles.postParent}>
		<div className={styles.postHeader}>
			<div className={styles.postPictureheader}>
				<ProfilePicture
					source={props.source || null}
					altText="Post profile picture"
					size="medium"
					hasBorder={!!props.source}
				/>
				<p className={styles.profileName}>
					{props.posterName}
				</p>
			</div>
			<Elipsis />
		</div>
		<img
			src={props.postImageSource || Gray}
			className={styles.postImage}
			alt="Feed post"
		/>
		<section className={styles.postBody}>
			<div className={styles.ctaBar}>
				<Heart />
				<SpeechBubble />
			</div>
			<div className={styles.likeBar}>
				<ProfilePicture
					source={props.latestPostProfile || null}
					size="small"
					alt="Latest like profile"
					hasBorder={false}
				/>
				<p className={styles.likeProfileText}>
					Piace a{" "}
					<strong>{`${props.latestLikeName}`}</strong> a{" "}
					<strong>{`${props.numberOfOtherLikes} altri`}</strong>
				</p>
			</div>
			<div className={styles.descriptionBar}>
				<p>
					<strong>{props.posterName}</strong>{" "}
					{props.postDescription}
				</p>
			</div>
			<div className={styles.commentsSection}>
				<p
					className={styles.offText}
				>{`Mostra tutti e ${props.comments.length} commenti`}</p>
				{props.comments.slice(0, 3).map((comment, i) => (
					<p key={`commentPreview${i}`}>
						<strong>{comment.username}</strong>{" "}
						{comment.text}
					</p>
				))}
				<p>
					<strong>{props.posterName}</strong>{" "}
					{props.postDescription}
				</p>
			</div>
			<div className={styles.daysAgoBar}>
				<p>{`${props.daysAgo} Ore fa`}</p>
			</div>
		</section>
		<input
			type="text"
			className={styles.commentFooter}
			placeholder="Aggiungi un commento"
		/>
		<p className={styles.publish}>Pubblica</p>
	</article>
);

const SkeletonPost = () => (
	<Post
		latestPostProfile={""}
		latestLikeName={""}
		numberOfOtherLikes={""}
		postDescription={""}
		daysAgo={0}
		comments={[]}
	/>
);

const getDaysAgo = (pastDate) =>
	moment
		.duration(
			moment()
				.startOf("day")
				.diff(moment(pastDate, "YYYY-MM-DD"))
		)
		.asDays();

const CompilePosts = (props) =>
	props.posts.map((post, i) => (
		<Post
			key={`post${i}`}
			source={post.profile_picture}
			posterName={post.profile_fullname}
			postImageSource={post.post_image}
			latestPostProfile={
				post.likes[0] ? post.likes[0].profile_picture : ""
			}
			latestLikeName={
				post.likes[0] ? post.likes[0].username : ""
			}
			numberOfOtherLikes={post.likes.length}
			postDescription={post.post_text}
			daysAgo={getDaysAgo(post.date.date)}
			comments={post.comments}
		/>
	));

const Feed = (props) => (
	<section className={styles.feedParent}>
		{props.isLoadingPosts && props.posts ? (
			<SkeletonPost />
		) : (
			<CompilePosts posts={props.posts} />
		)}
	</section>
);

export default Feed;
