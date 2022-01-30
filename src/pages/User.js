import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AccountsList from "../components/AccountsList";
import Greetings from "../components/Greetings";
import "../style/user.css"
import { Navigate } from "react-router-dom";

//redux 
import { useSelector } from "react-redux";

/**
 * User Page to display user account
 * @returns {JSX} React component
 */

function User() {
	const isLogged = useSelector((state) => state.isLoggedReducer);

	if(!isLogged){
		return <Navigate to="/sign-in"/>
	}
	return (
		<React.Fragment>
			<Header />
			<main className="main bg-dark">
				<Greetings />
				<AccountsList />
			</main>
			<Footer />
		</React.Fragment>
	);
}

export default User;
