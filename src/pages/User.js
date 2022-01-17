import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AccountsList from "../components/AccountsList";
import Greetings from "../components/Greetings";

/**
 * User Page to display user account
 * @returns {JSX} React component
 */

function User() {
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
