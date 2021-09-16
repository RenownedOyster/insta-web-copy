import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import {
	Feed,
	Header,
	ProfileBar,
	Stories,
	Suggestions,
} from "./components";
import classNames from "classnames";
import MugShot from "./assets/images/tony.png";
import Spinner from "./assets/images/spinner.gif";

const mockUserData = {
	profile_name: "tnybtlr",
	full_name: "Tony Butler",
	profile_picture: MugShot,
};

const wait = (delay) =>
	new Promise((resolve) => setTimeout(resolve, delay));

const getPostsAndStories = async () => {
	const [posts, stories] = await Promise.all([
		fetch(
			"https://flynn.boolean.careers/exercises/api/boolgram/posts"
		),
		fetch(
			"https://flynn.boolean.careers/exercises/api/boolgram/profiles"
		),
	]);

	await wait(1000); // Artificially pause the async operation to show of Skeleton loading elements 👍

	return [await posts.json(), await stories.json()];
};

const App = () => {
	const [isLoadingStories, setIsLoadingStories] =
		useState(false);
	const [hasLoadedStories, setHasLoadedStories] =
		useState(false);
	const [isLoadingPosts, setIsLoadingPosts] =
		useState(false);
	const [hasLoadedPosts, setHasLoadedPosts] =
		useState(false);

	const [posts, setPosts] = useState([]);
	const [stories, setStories] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		setIsLoadingStories(true);
		setIsLoadingPosts(true);
		getPostsAndStories()
			.then(([posts, stories]) => {
				setPosts(posts);
				setIsLoadingPosts(false);
				setHasLoadedPosts(true);
				setStories(stories);
				setIsLoadingStories(false);
				setHasLoadedStories(true);
			})
			.catch((error) => {
				setError(error);
				console.error("There was an error: ", error);
			});
	}, []);

	return (
		<div className={styles.containerParent}>
			<img
				src={Spinner}
				className={classNames(styles.loading, {
					[styles.removeLoading]:
						hasLoadedPosts && hasLoadedStories,
				})}
			/>
			<Header
				profilePicture={mockUserData.profile_picture}
			/>
			<main className={styles.main}>
				<section className={styles.feedParent}>
					<Stories
						isLoadingStories={isLoadingStories}
						hasLoadedStories={hasLoadedStories}
						activeStories={stories}
					/>
					<Feed
						isLoadingPosts={isLoadingPosts}
						hasLoadedPosts={hasLoadedPosts}
						posts={posts}
					/>
				</section>
				<aside className={styles.asideParent}>
					<ProfileBar
						pictureSource={mockUserData.profile_picture}
						username={mockUserData.profile_name}
						fullName={mockUserData.full_name}
					/>
					<Suggestions
						isLoadingStories={isLoadingStories}
						hasLoadedStories={hasLoadedStories}
						profiles={stories}
					/>
				</aside>
			</main>
		</div>
	);
};

export default App;
