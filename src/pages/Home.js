import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FeaturesList from "../components/FeaturesList";

/**
 * Home Page to display basic info
 * @returns {JSX} React component
 */

function Home() {
	return (
		<React.Fragment>
			<Header />
			<main>
				<FeaturesList />
			</main>
			<Footer />
		</React.Fragment>
	);
}

export default Home;
