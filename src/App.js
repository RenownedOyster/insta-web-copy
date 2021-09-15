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
			<ProfilePicture />
			<Stories />
		</div>
	);
};

export default App;
