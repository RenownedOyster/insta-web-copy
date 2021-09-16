import React from "react";
import styles from "./Header.module.css";
import { ProfilePicture } from "../../components";
import { ReactComponent as Heart } from "../../assets/images/heart.svg";
import { ReactComponent as Home } from "../../assets/images/home.svg";
import Logo from "../../assets/images/logo.png";

const Header = () => (
	<header className={styles.headerParent}>
		<div className={styles.headerBar}>
			<img src={Logo} alt="logo" className={styles.logo} />
			<input
				type="text"
				className={styles.searchBox}
				placeholder="Cerca"
			/>
			<div className={styles.navItems}>
				<Heart />
				<Home />
				<ProfilePicture
					size="small"
					source={
						"https://flynn.boolean.careers/exercises/img/boolgram/profile1.jpg"
					}
					hasBorder={false}
					altText="Heading profile picture"
				/>
			</div>
		</div>
	</header>
);

export default Header;
