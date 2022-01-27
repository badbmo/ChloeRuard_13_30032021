import React from "react";
import "../style/header.css";
import { NavLink } from "react-router-dom";
import Logo from "../assets/argentBankLogo.png";

//redux
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../redux/actions";

/**
 * Header Component with Nav
 * @returns {JSX} React component
 */

function Header() {
	const isLogged = useSelector((state) => state.isLoggedReducer);
	console.log(isLogged);
	const dispatch = useDispatch();

	const handleLogOut = () => {
		dispatch(logOut());
	};

	const LoggedInNav = () => {
		return (
			<div>
				<NavLink className="main-nav-item" to="/user">
					<i className="fa fa-user-circle"></i>
					Tony
				</NavLink>
				<NavLink className="main-nav-item" onClick={handleLogOut} to="/">
					<i className="fa fa-sign-out"></i>
					Sign Out
				</NavLink>
			</div>
		);
	};

	const LoggedOutNav = () => {
		return (
			<NavLink exact className="main-nav-item" to="/sign-in">
				<i className="fa fa-user-circle"></i>
				Sign In
			</NavLink>
		);
	};

	return (
		<nav className="main-nav">
			<NavLink exact className="main-nav-logo" to="/">
				<img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
				<h1 className="sr-only">Argent Bank</h1>
			</NavLink>
			<div>{isLogged ? LoggedInNav() : LoggedOutNav()}</div>
		</nav>
	);
}

export default Header;
