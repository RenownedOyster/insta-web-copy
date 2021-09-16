import styles from "./App.module.css";
import {
	Feed,
	Header,
	ProfileBar,
	Stories,
	Suggestions,
} from "./components";

const stories = [
	{
		profile_picture:
			"https://flynn.boolean.careers/exercises/img/boolgram/profile1.jpg",
		profile_name: "zpaucek",
	},
	{
		profile_picture:
			"https://flynn.boolean.careers/exercises/img/boolgram/profile2.jpg",
		profile_name: "weimann.elda",
	},
	{
		profile_picture:
			"https://flynn.boolean.careers/exercises/img/boolgram/profile3.jpg",
		profile_name: "pierre82",
	},
	{
		profile_picture:
			"https://flynn.boolean.careers/exercises/img/boolgram/profile4.jpg",
		profile_name: "yolanda89",
	},
	{
		profile_picture:
			"https://flynn.boolean.careers/exercises/img/boolgram/profile5.jpg",
		profile_name: "barrows.destiney",
	},
	{
		profile_picture:
			"https://flynn.boolean.careers/exercises/img/boolgram/profile6.jpg",
		profile_name: "corwin.ambrose",
	},
	{
		profile_picture:
			"https://flynn.boolean.careers/exercises/img/boolgram/profile7.jpg",
		profile_name: "idella.kuhic",
	},
	{
		profile_picture:
			"https://flynn.boolean.careers/exercises/img/boolgram/profile8.jpg",
		profile_name: "leuschke.xavier",
	},
];

const App = () => {
	return (
		<div className={styles.containerParent}>
			<Header />
			<main className={styles.main}>
				<section className={styles.feedParent}>
					<Stories hasLoaded activeStories={stories} />
					<Feed />
				</section>
				<aside className={styles.asideParent}>
					<ProfileBar />
					<Suggestions />
				</aside>
			</main>
		</div>
	);
};

export default App;
