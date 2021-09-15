import React from "react";
import styles from "./Header.module.css";
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
				placeholder="search"
			/>
			<div className={styles.navItems}>
				<Heart />
				<Home />
				<div className={styles.icon}></div>
			</div>
		</div>
	</header>
);

export default Header;
