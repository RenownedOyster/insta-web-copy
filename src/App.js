import logo from "./logo.svg";
import styles from "./App.module.css";
import {
	Feed,
	Header,
	ProfileBar,
	ProfilePicture,
	Stories,
} from "./components";

const App = () => {
	return (
		<div className={styles.containerParent}>
			<Header />
			<Feed />
			<ProfileBar />
			<ProfilePicture
				source={
					"https://flynn.boolean.careers/exercises/img/boolgram/profile1.jpg"
				}
				altText="Heading profile picture"
			/>
			<Stories />
		</div>
	);
};

export default App;
