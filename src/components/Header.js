import React from "react";
import "../style/header.css";
import { NavLink } from "react-router-dom";
import Logo from "../assets/argentBankLogo.png";

/**
 * Header Component with Nav
 * @returns {JSX} React component
 */

function Header() {
	return (
		<nav className="main-nav">
			<NavLink exact className="main-nav-logo" to="/">
				<img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
				<h1 className="sr-only">Argent Bank</h1>
			</NavLink>
			<div>
				<NavLink exact className="main-nav-item" to="/sign-in">
					<i className="fa fa-user-circle"></i>
					Sign In
				</NavLink>
				<div>
					<NavLink className="main-nav-item" to="/user">
						<i className="fa fa-user-circle"></i>
						Tony
					</NavLink>
					<NavLink className="main-nav-item" to="/home">
						<i className="fa fa-sign-out"></i>
						Sign Out
					</NavLink>
				</div>
			</div>
		</nav>
	);
}

export default Header;
