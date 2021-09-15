import logo from "./logo.svg";
import "./App.css";
import {
	Feed,
	Header,
	ProfileBar,
	ProfilePicture,
	Stories,
} from "./components";

function App() {
	return (
		<>
			<Header />
			<Feed />
			<ProfileBar />
			<ProfilePicture />
			<Stories />
		</>
	);
}

export default App;
