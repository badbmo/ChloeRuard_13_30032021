import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

/**
 * Login Page to connect to an user account
 * @returns {JSX} React component
 */

function Home() {
	return (
		<React.Fragment>
			<Header />
			<main className="login__content"></main>
			<Footer />
		</React.Fragment>
	);
}

export default Home;
