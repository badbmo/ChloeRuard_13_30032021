import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

/**
 * Home Page to display basic info
 * @returns {JSX} React component
 */

function Home() {
	return (
		<React.Fragment>
			<Header />
			<main className="home__content"></main>
			<Footer />
		</React.Fragment>
	);
}

export default Home;
