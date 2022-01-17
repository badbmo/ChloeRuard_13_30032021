import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

/**
 * User Page to display user account
 * @returns {JSX} React component
 */

function Home() {
	return (
		<React.Fragment>
			<Header />
			<main className="user__content"></main>
			<Footer />
		</React.Fragment>
	);
}

export default Home;
