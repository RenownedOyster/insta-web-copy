import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import {
	Feed,
	Header,
	ProfileBar,
	Stories,
	Suggestions,
} from "./components";
import MugShot from "./assets/images/tony.png";

// const posts = [
// 	{
// 		profile_picture:
// 			"https://flynn.boolean.careers/exercises/img/boolgram/profile1.jpg",
// 		profile_name: "hilma.gleason",
// 		profile_fullname: "Kylee Swift",
// 		post_image:
// 			"https://flynn.boolean.careers/exercises/img/boolgram/landscape1.jpg",
// 		post_text: "She went on.",
// 		date: {
// 			date: "2021-09-14 15:03:57.000000",
// 			timezone_type: 3,
// 			timezone: "UTC",
// 		},
// 		comments: [
// 			{ username: "keith89", text: "Mock." },
// 			{ username: "ternser", text: "But do." },
// 			{ username: "adriel.metz", text: "." },
// 			{ username: "gibson.coleman", text: "Soup?." },
// 			{ username: "jerde.bud", text: "The." },
// 			{ username: "rbartell", text: "Hatter." },
// 			{ username: "kblick", text: "." },
// 			{ username: "percival41", text: "I am." },
// 			{ username: "charity06", text: "Grief." },
// 			{ username: "roscoe02", text: "Alice." },
// 			{ username: "dillon66", text: "Alice." },
// 			{ username: "kristian24", text: "Alice." },
// 			{ username: "rroob", text: "I BEG." },
// 			{ username: "celia36", text: "Mock." },
// 		],
// 		likes: [
// 			{
// 				username: "wolff.evelyn",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile1.jpg",
// 			},
// 			{
// 				username: "edward79",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile8.jpg",
// 			},
// 			{
// 				username: "mcglynn.vicky",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile6.jpg",
// 			},
// 			{
// 				username: "white.delbert",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile3.jpg",
// 			},
// 			{
// 				username: "brayan13",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile5.jpg",
// 			},
// 			{
// 				username: "elbert.witting",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile6.jpg",
// 			},
// 			{
// 				username: "wintheiser.wade",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile7.jpg",
// 			},
// 			{
// 				username: "llehner",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile8.jpg",
// 			},
// 			{
// 				username: "vivienne33",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile1.jpg",
// 			},
// 			{
// 				username: "miller.alivia",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile1.jpg",
// 			},
// 			{
// 				username: "ydenesik",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile4.jpg",
// 			},
// 			{
// 				username: "zbosco",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile4.jpg",
// 			},
// 			{
// 				username: "tristin44",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile4.jpg",
// 			},
// 			{
// 				username: "carole51",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile8.jpg",
// 			},
// 		],
// 	},
// 	{
// 		profile_picture:
// 			"https://flynn.boolean.careers/exercises/img/boolgram/profile2.jpg",
// 		profile_name: "yaltenwerth",
// 		profile_fullname: "Aditya O'Hara",
// 		post_image:
// 			"https://flynn.boolean.careers/exercises/img/boolgram/landscape2.jpg",
// 		post_text: "Alice. 'What sort.",
// 		date: {
// 			date: "2021-09-13 20:20:28.000000",
// 			timezone_type: 3,
// 			timezone: "UTC",
// 		},
// 		comments: [
// 			{ username: "hassie.hilpert", text: "ME,'." },
// 			{ username: "kirsten35", text: "Shark." },
// 			{ username: "laurianne30", text: "Alice to." },
// 			{ username: "padberg.courtney", text: "Then." },
// 			{ username: "enola.donnelly", text: "Alice." },
// 			{ username: "marcellus33", text: "Queen in." },
// 			{ username: "harold.goyette", text: "The." },
// 			{ username: "eino.thiel", text: "Cheshire." },
// 		],
// 		likes: [
// 			{
// 				username: "avery.thiel",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile5.jpg",
// 			},
// 			{
// 				username: "arnulfo.hane",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile6.jpg",
// 			},
// 			{
// 				username: "tkris",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile6.jpg",
// 			},
// 			{
// 				username: "tara.dare",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile3.jpg",
// 			},
// 			{
// 				username: "amertz",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile5.jpg",
// 			},
// 			{
// 				username: "robb.haag",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile8.jpg",
// 			},
// 			{
// 				username: "don.veum",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile5.jpg",
// 			},
// 			{
// 				username: "ngerlach",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile5.jpg",
// 			},
// 		],
// 	},
// 	{
// 		profile_picture:
// 			"https://flynn.boolean.careers/exercises/img/boolgram/profile3.jpg",
// 		profile_name: "xjacobson",
// 		profile_fullname: "Lazaro Nikolaus",
// 		post_image:
// 			"https://flynn.boolean.careers/exercises/img/boolgram/landscape3.jpg",
// 		post_text: "Alice remarked.",
// 		date: {
// 			date: "2021-09-14 18:07:39.000000",
// 			timezone_type: 3,
// 			timezone: "UTC",
// 		},
// 		comments: [
// 			{ username: "raleigh.dach", text: "Mock." },
// 			{ username: "wilkinson.rex", text: "ONE with." },
// 			{ username: "szulauf", text: "Hatter." },
// 			{ username: "demetris.casper", text: "I say,'." },
// 			{ username: "ilakin", text: "WHAT?." },
// 			{ username: "ondricka.kaylee", text: "It." },
// 			{ username: "viva.kulas", text: "Alice." },
// 		],
// 		likes: [
// 			{
// 				username: "rmedhurst",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile2.jpg",
// 			},
// 			{
// 				username: "ndickinson",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile4.jpg",
// 			},
// 			{
// 				username: "yschmitt",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile8.jpg",
// 			},
// 			{
// 				username: "frempel",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile3.jpg",
// 			},
// 			{
// 				username: "wilbert.haley",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile6.jpg",
// 			},
// 			{
// 				username: "kohler.jennings",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile5.jpg",
// 			},
// 			{
// 				username: "arvel05",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile3.jpg",
// 			},
// 		],
// 	},
// 	{
// 		profile_picture:
// 			"https://flynn.boolean.careers/exercises/img/boolgram/profile4.jpg",
// 		profile_name: "qkuvalis",
// 		profile_fullname: "Emmalee Reynolds",
// 		post_image:
// 			"https://flynn.boolean.careers/exercises/img/boolgram/landscape4.jpg",
// 		post_text: "March Hare. Alice.",
// 		date: {
// 			date: "2021-09-14 15:17:44.000000",
// 			timezone_type: 3,
// 			timezone: "UTC",
// 		},
// 		comments: [
// 			{ username: "myrna.kreiger", text: "Alice." },
// 			{ username: "kmarvin", text: "So she." },
// 			{ username: "labadie.wilma", text: "It's the." },
// 			{ username: "vincenza53", text: "Oh dear!." },
// 			{ username: "qreynolds", text: "THESE?'." },
// 		],
// 		likes: [
// 			{
// 				username: "tyreek36",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile1.jpg",
// 			},
// 			{
// 				username: "diana.deckow",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile8.jpg",
// 			},
// 			{
// 				username: "xcassin",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile6.jpg",
// 			},
// 			{
// 				username: "isaac.west",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile8.jpg",
// 			},
// 			{
// 				username: "toney79",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile1.jpg",
// 			},
// 		],
// 	},
// 	{
// 		profile_picture:
// 			"https://flynn.boolean.careers/exercises/img/boolgram/profile5.jpg",
// 		profile_name: "lubowitz.ayla",
// 		profile_fullname: "Jett Cormier",
// 		post_image:
// 			"https://flynn.boolean.careers/exercises/img/boolgram/landscape5.jpg",
// 		post_text: "I wish you were.",
// 		date: {
// 			date: "2021-09-14 13:05:21.000000",
// 			timezone_type: 3,
// 			timezone: "UTC",
// 		},
// 		comments: [
// 			{ username: "qrunolfsson", text: "CHAPTER." },
// 			{ username: "stacey.medhurst", text: "I shall." },
// 			{ username: "howell.lavada", text: "Alice's." },
// 			{ username: "joannie69", text: "The." },
// 			{ username: "bvolkman", text: "Alice." },
// 			{ username: "odell.langworth", text: "I hadn't." },
// 			{ username: "cortez17", text: "She soon." },
// 			{ username: "aharvey", text: "I've." },
// 			{ username: "oswald.bahringer", text: "Dormouse." },
// 			{ username: "okuneva.noelia", text: "Mouse." },
// 		],
// 		likes: [
// 			{
// 				username: "nickolas.hill",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile6.jpg",
// 			},
// 			{
// 				username: "harvey18",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile6.jpg",
// 			},
// 			{
// 				username: "yschowalter",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile5.jpg",
// 			},
// 			{
// 				username: "orau",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile3.jpg",
// 			},
// 			{
// 				username: "crooks.akeem",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile8.jpg",
// 			},
// 			{
// 				username: "kassulke.dina",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile7.jpg",
// 			},
// 			{
// 				username: "ella01",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile8.jpg",
// 			},
// 			{
// 				username: "horace50",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile4.jpg",
// 			},
// 			{
// 				username: "wjones",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile5.jpg",
// 			},
// 			{
// 				username: "crooks.elias",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile2.jpg",
// 			},
// 		],
// 	},
// 	{
// 		profile_picture:
// 			"https://flynn.boolean.careers/exercises/img/boolgram/profile6.jpg",
// 		profile_name: "bayer.vern",
// 		profile_fullname: "Tyrel Welch",
// 		post_image:
// 			"https://flynn.boolean.careers/exercises/img/boolgram/landscape6.jpg",
// 		post_text: "THAT in a few.",
// 		date: {
// 			date: "2021-09-14 11:27:12.000000",
// 			timezone_type: 3,
// 			timezone: "UTC",
// 		},
// 		comments: [
// 			{ username: "aditya.lowe", text: "King." },
// 			{ username: "zakary.wiza", text: "So Alice." },
// 		],
// 		likes: [
// 			{
// 				username: "sonia.barton",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile7.jpg",
// 			},
// 			{
// 				username: "darrick.schamberger",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile2.jpg",
// 			},
// 		],
// 	},
// 	{
// 		profile_picture:
// 			"https://flynn.boolean.careers/exercises/img/boolgram/profile7.jpg",
// 		profile_name: "justyn.hickle",
// 		profile_fullname: "Mckenna Kling",
// 		post_image:
// 			"https://flynn.boolean.careers/exercises/img/boolgram/landscape7.jpg",
// 		post_text: "How I wonder what.",
// 		date: {
// 			date: "2021-09-14 01:50:38.000000",
// 			timezone_type: 3,
// 			timezone: "UTC",
// 		},
// 		comments: [
// 			{ username: "ratke.ellis", text: "Alice." },
// 			{ username: "qhirthe", text: "Dormouse." },
// 			{ username: "goldner.cleora", text: "Alice." },
// 		],
// 		likes: [
// 			{
// 				username: "oreichel",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile5.jpg",
// 			},
// 			{
// 				username: "lindsey.hayes",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile6.jpg",
// 			},
// 			{
// 				username: "wehner.reva",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile3.jpg",
// 			},
// 		],
// 	},
// 	{
// 		profile_picture:
// 			"https://flynn.boolean.careers/exercises/img/boolgram/profile8.jpg",
// 		profile_name: "chand",
// 		profile_fullname: "Jaylin McKenzie",
// 		post_image:
// 			"https://flynn.boolean.careers/exercises/img/boolgram/landscape8.jpg",
// 		post_text: "Gryphon. 'How the.",
// 		date: {
// 			date: "2021-09-14 21:24:07.000000",
// 			timezone_type: 3,
// 			timezone: "UTC",
// 		},
// 		comments: [
// 			{ username: "hailie.pouros", text: "SOMEBODY." },
// 		],
// 		likes: [
// 			{
// 				username: "jailyn.rowe",
// 				profile_picture:
// 					"https://flynn.boolean.careers/exercises/img/boolgram/profile6.jpg",
// 			},
// 		],
// 	},
// ];

// const stories = [
// 	{
// 		profile_picture:
// 			"https://flynn.boolean.careers/exercises/img/boolgram/profile1.jpg",
// 		profile_name: "zpaucek",
// 	},
// 	{
// 		profile_picture:
// 			"https://flynn.boolean.careers/exercises/img/boolgram/profile2.jpg",
// 		profile_name: "weimann.elda",
// 	},
// 	{
// 		profile_picture:
// 			"https://flynn.boolean.careers/exercises/img/boolgram/profile3.jpg",
// 		profile_name: "pierre82",
// 	},
// 	{
// 		profile_picture:
// 			"https://flynn.boolean.careers/exercises/img/boolgram/profile4.jpg",
// 		profile_name: "yolanda89",
// 	},
// 	{
// 		profile_picture:
// 			"https://flynn.boolean.careers/exercises/img/boolgram/profile5.jpg",
// 		profile_name: "barrows.destiney",
// 	},
// 	{
// 		profile_picture:
// 			"https://flynn.boolean.careers/exercises/img/boolgram/profile6.jpg",
// 		profile_name: "corwin.ambrose",
// 	},
// 	{
// 		profile_picture:
// 			"https://flynn.boolean.careers/exercises/img/boolgram/profile7.jpg",
// 		profile_name: "idella.kuhic",
// 	},
// 	{
// 		profile_picture:
// 			"https://flynn.boolean.careers/exercises/img/boolgram/profile8.jpg",
// 		profile_name: "leuschke.xavier",
// 	},
// ];

const mockUserData = {
	profile_name: "tnybtlr",
	full_name: "Tony Butler",
	profile_picture: MugShot,
};

const getPostsAndStories = async () => {
	const [posts, stories] = await Promise.all([
		fetch(
			"https://flynn.boolean.careers/exercises/api/boolgram/posts"
		),
		fetch(
			"https://flynn.boolean.careers/exercises/api/boolgram/profiles"
		),
	]);

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
